import React, { useState } from 'react'
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';

const AddProduct = () => {
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [image, setImage] = useState("")
    const [price, setPrice] = useState("");
    const [sortdes, setSortDes] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate()



    const handleSubmit = (e) => {
        e.preventDefault();
        const proData = { id, name, image, price, sortdes, description };
        fetch("http://localhost:3000/product", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(proData)
        }).then((res) => {
            alert('Save successfully.')
            navigate('/admin')
        }).catch((err) => {
            console.log(err.message)
        })
    }

    return (
        <div className='table-container'>
            <Helmet>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" />
            </Helmet>
            <div className="container">
                <div className="card">
                    <div className="card-title ">
                        <h2> Add Product </h2>
                    </div>
                    <div className="col-6 mx-auto">
                        <form action="" className='form-input ' onSubmit={handleSubmit}>
                            <label htmlFor="ID">ID</label>
                            <input type="text" className='form-control' placeholder='ID' value={id} disabled="disabled" />

                            <label htmlFor="">Name</label>
                            <input type="text" placeholder='Name' className='form-control' value={name} onChange={e => setName(e.target.value)} />

                            <label htmlFor="">Image</label>
                            <input type="text" placeholder='Image link' className='form-control' value={image} onChange={e => setImage(e.target.value)} />
                            <label htmlFor="">Price</label>
                            <input type="text" placeholder='Price' className='form-control' value={price} onChange={e => setPrice(e.target.value)} />
                            <label htmlFor="">Sort Description</label>
                            <input type="text" placeholder='Sort Description' className='form-control' value={sortdes} onChange={e => setSortDes(e.target.value)} />
                            <label htmlFor="">Description</label>
                            <input type="text" placeholder='Description' className='form-control' value={description} onChange={e => setDescription(e.target.value)} />
                            <button type='submit' className='m-2 btn btn-primary'>Submit</button>
                            <Link to="/admin" className='btn btn-danger'>Back</Link>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AddProduct