import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet';
import '../Admin/style.scss'
import { Link, useNavigate } from 'react-router-dom';


const Admin = () => {
    const [product, setProduct] = useState(null);
    const navigate = useNavigate();
    const LoadEdit = (id) => {
        navigate("/admin/update/" + id)
    }
    // delete
    const Remove = (id) => {
        if (window.confirm('Do you want to remove')) {
            fetch("http://localhost:3000/product/" + id, {
                method: "DELETE",
            }).then((res) => {
                alert('Remove successfully.')

            }).catch((err) => {
                console.log(err.message)
            })
        }

    }

    useEffect(() => {
        fetch(`http://localhost:3000/product`).then(res => {
            return res.json();
        }).then((resp) => {
            setProduct(resp)
        }).catch((err) => {
            console.log(err.message);
        })
    }, [product])
    return (
        <div class="table-container">
            <Helmet>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" />
            </Helmet>
            <button className='btn float-end'><Link to="/"><i class="fa-solid fa-xmark"></i></Link></button>
            <div className="container">

                <div className="card">
                    <div className="card-title ">
                        <h2>Product List</h2>
                    </div>
                    <div className="card-body">
                        <div className="add">
                            <Link to='/admin/add' className="btn btn-success m-1">Add Product</Link >
                        </div>
                        <table className='table table-bodered'>
                            <thead className="bg-dark text-white">
                                <tr>
                                    <td>ID</td>
                                    <td>Name</td>
                                    <td>Image</td>
                                    <td>Price</td>
                                    <td>Sort Description</td>
                                    <td>Description</td>
                                    <td>Action</td>
                                </tr>
                            </thead>
                            <tbody>
                                {product &&
                                    product.map(item => (
                                        <tr key={item.id}>
                                            <td>{item.id}</td>
                                            <td>{item.name}</td>
                                            <td><img src={item.image} style={{ width: '100px' }} /></td>

                                            <td>{item.price}</td>
                                            <td>{item.sortdes}</td>
                                            <td>{item.description}</td>
                                            <td>
                                                <a onClick={() => { LoadEdit(item.id) }} className='btn btn-success m-1 '>Edit</a>
                                                <a onClick={() => { Remove(item.id) }} className='btn btn-danger'>Delete</a>
                                            </td>

                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Admin