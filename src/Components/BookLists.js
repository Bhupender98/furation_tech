import React from 'react';

const BookLists = ({ books }) => {
    return (
        <div>
            <h2>Book Listing</h2>
            <ul>
                {books.map((book) => (
                    <li key={book.id}>{book.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default BookLists;
