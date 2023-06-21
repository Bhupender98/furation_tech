import React from 'react';
import Shopping_cart from '../Components/Shopping_cart';

const Shopping_cart_Page = () => {
    const cartItems = []; // Fetch cart items from Redux or React Context
    const removeFromCart = (itemId) => {
        // Implement remove from cart logic using Redux or React Context
    };
    return <Shopping_cart cartItems={cartItems} removeFromCart={removeFromCart} />;
};

export default Shopping_cart_Page;
