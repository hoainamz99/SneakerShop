import React, { createContext, useState } from 'react'
import { product } from "../../../Server/db.json"

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {}; // 
    for (let i = 1; i < product.length + 1; i++) {
        cart[i] = 0; //sl trong 
    }
    return cart;
}

const ShopContextProvider = (props) => {
    const [cartItems, setCarItems] = useState(getDefaultCart());

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = product.find((Product) => Product.id === Number(item)); //
                totalAmount += cartItems[item] * itemInfo.price;
            }
        }
        return totalAmount;
    };
    const addToCart = (itemId) => {
        setCarItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    };
    const removeFromCart = (itemId) => {
        setCarItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    };
    const updateCartItemCount = (newAmount, itemId) => {
        setCarItems((prev) => ({ ...prev, [itemId]: newAmount }));
    };

    const contextValue = { cartItems, addToCart, removeFromCart, updateCartItemCount, getTotalCartAmount }
    console.log(cartItems)
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider