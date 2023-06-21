import React from 'react';

const CartItems = ({ item, removeFromCart }) => {
    return (
        <li>
            {item.title} - ${item.price}
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </li>
    );
};

export default CartItems;
