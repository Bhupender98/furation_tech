import React from 'react';
import { useParams } from 'react-router-dom';
import BookDetails from '../Components/BookDetails';

const BookDetailsPage = () => {
    const { id } = useParams();
    const book = {}; // Fetch book details from an API using the 'id' parameter
    return <BookDetails book = {book}/>;
};

export default BookDetailsPage;
