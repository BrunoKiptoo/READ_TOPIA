//This component uses a form to take in the search term, 
// a onChange event to update the component's state with the search term, 
// and a onSubmit event that sends a GET request to the Google Books API using the search term, 
// and the results are displayed in an unordered list.


import React, { useState } from 'react';
import axios from 'axios';

function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`);
    setResults(response.data.items);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} placeholder="Search for a book" />
        <button type="submit">Search</button>
      </form>
      <ul>
        {results.map(result => (
          <li key={result.id}>{result.volumeInfo.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Search;



