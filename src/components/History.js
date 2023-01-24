
//This component will display a history of the books that the user has searched for and allow them to easily access previous search

import React from 'react';
import { useSelector } from 'react-redux';

function History() {
  const searchHistory = useSelector(state => state.searchHistory);

  return (
    <div>
      <h2>Search History</h2>
      <ul>
        {searchHistory.map((search, index) => (
          <li key={index}>{search}</li>
        ))}
      </ul>
    </div>
  );
}

export default History;
