// This component will handle the display of books in the app and manage the pagination of the books, 
// allowing users to view the next and previous books. 
// It takes in an array of books as a prop and maps over them to display the book title, 
// it also import the pagination component to show the next and previous books.


import React from 'react';
import Pagination from './Pagination';

function BookList({ books }) {
  return (
    <div>
      <ul>
        {books.map(book => (
          <li key={book.id}>{book.volumeInfo.title}</li>
        ))}
      </ul>
      <Pagination totalPages={10} />
    </div>
  );
}

export default BookList;
