import React, { useContext, useEffect, useState } from 'react'
import '../dtProduct/style.css'
import { useParams } from 'react-router-dom'
import { ShopContext } from "../../../context/shop-context"

const DtProduct = () => {

    //Add

    const { addToCart, cartItems } = useContext(ShopContext)
    //detail Product
    const { proid } = useParams();
    const [prodata, setProdata] = useState({});
    console.log(prodata)
    useEffect(() => {
        fetch("http://localhost:3000/product/" + proid).then(res => {
            return res.json();
        }).then((resp) => {
            setProdata(resp);
            console.log(resp)
        }).catch((err) => {
            console.log(err.message);
        })
    }, []);
    return (
        <div className="wrapper">
            <div className="product-img">
                <img src={prodata.image} alt="" />
            </div>

            <div className="rproduct-info">
                <div className="product-text">
                    <h1>{prodata.name}</h1>
                    <h2>By Nam</h2>
                    <p>
                        {prodata.description}
                    </p>
                </div>

                <div className="product-price-btn">
                    <p><span>{prodata.price}$</span></p>
                    <button type='button' onClick={() => addToCart(proid)}>Add to cart</button>
                </div>
            </div>

        </div>
    )
}

export default DtProduct