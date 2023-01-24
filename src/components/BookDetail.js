
//This component will display detailed information about a specific book, such as the book's cover, title, author, publisher, and summary. 
// It takes in a single book object as a prop and displays the relevant information using JSX.

import React from 'react';

function BookDetail({ book }) {
  return (
    <div>
      <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.title} />
      <h2>{book.volumeInfo.title}</h2>
      <p>Author: {book.volumeInfo.authors.join(', ')}</p>
      <p>Publisher: {book.volumeInfo.publisher}</p>
      <p>Published Date: {book.volumeInfo.publishedDate}</p>
      <p>Summary: {book.volumeInfo.description}</p>
    </div>
  );
}

export default BookDetail;
