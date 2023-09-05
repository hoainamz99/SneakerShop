import React from 'react'
import '../Home/style.css'
import banner from '../Home/banner.svg'
import { Products } from '../../components/Product/products'

const Home = () => {
    return (
        <div className="container">
            <div className="banner">
                <div className="banner_img">
                    <img src={banner}
                        alt="banner"
                    />
                </div>
                <Products />
            </div>
        </div>
    )
}

export default Home