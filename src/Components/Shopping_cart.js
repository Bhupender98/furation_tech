import React from 'react';
import cartItems from './CartItems';


const Shopping_cart = ({ cartItems, removeFromCart }) => {
    return (
        <div>
            <h2>Shopping Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <ul>
                    {cartItems.map((item) => (
                        <cartItems key={item.id} item={item} removeFromCart={removeFromCart} />
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Shopping_cart;
