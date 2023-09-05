import React from 'react'
import { useEffect, useState } from 'react'
import './style.css'
import { useNavigate } from 'react-router-dom'

export const Products = () => {
    const navigate = useNavigate();
    //detail
    const LoadDetail = (id) => {
        navigate("/product/detail/" + id)
    }
    //show
    const [product, setProduct] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:3000/product`).then(res => {
            return res.json();
        }).then((resp) => {
            setProduct(resp);
            console.log(resp)
        }).catch((err) => {
            console.log(err.message);
        })
    }, [])
    return (
        <div className="than">
            <div className="products">
                {product &&
                    product.map((item) => (
                        <div className="product" key={item._id}>
                            <img className='image'
                                src={item.image}
                                alt={item.name}
                            />
                            <div className="namePrice">
                                <a onClick={() => { LoadDetail(item.id) }}><h3>{item.name}</h3></a>
                                <span>{item.price}$</span>
                            </div>
                            <p>{item.sortdes}.</p>
                            <div className="start">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                            </div>
                            <div className="buy">
                                <button
                                    onClick={() => { LoadDetail(item.id) }}
                                >
                                    Buy now
                                </button>
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}
