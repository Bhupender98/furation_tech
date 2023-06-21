import React from 'react';

const BookDetails = ({ book }) => {
    return (
        <div>
            <h2>{book.title}</h2>
            <p>Author: {book.author}</p>
            <p>Price: ${book.price}</p>
            <button>Add to Cart</button>
        </div>
    );
};

export default BookDetails;
