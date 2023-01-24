
//This component will handle the pagination of the books displayed on the bookshelf, allowing users to view the next and previous books.


import React, { useState } from 'react';

function Pagination({ totalPages }) {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePreviousClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  }

  return (
    <div>
      <button onClick={handlePreviousClick} disabled={currentPage === 1}>Previous</button>
      <span>{currentPage}</span>
      <button onClick={handleNextClick} disabled={currentPage === totalPages}>Next</button>
    </div>
  );
}

export default Pagination;
