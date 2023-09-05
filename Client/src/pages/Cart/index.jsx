import React, { useContext } from 'react'
import BgBreadCrumb from '../../components/bg_breadcrumb'
import { product } from '../../../../Server/db.json'
import { ShopContext } from "../../context/shop-context"
import CartItem from './cart-item'
import { useNavigate } from 'react-router-dom'

import "./cart.css";
const Cart = () => {
    const { cartItems, getTotalCartAmount } = useContext(ShopContext);
    const totalAmount = getTotalCartAmount();
    const navigate = useNavigate();
    return (
        <div className="cart">
            <BgBreadCrumb />
            <div className="">
                <h1>Your Cart Item</h1>
            </div>
            <div className="cartItems">
                {
                    product.map((Product) => {
                        if (cartItems[Product.id] !== 0) {
                            return <CartItem data={Product} />
                        }
                    })
                }
            </div>
            <div className="checkout">
                <p>Subtotal: ${totalAmount}</p>
                <button onClick={() => navigate("/")}>Continue Shopping</button>
                <button>Check out</button>
            </div>
        </div>

    )
}

export default Cart