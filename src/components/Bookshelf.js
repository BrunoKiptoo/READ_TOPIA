//This component will display the books in the user's bookshelf and allow them to add and remove books.

//This example checks if the user is authenticated and if so it will fetch the books that belong to the currently 
// logged in user from the backend using the getUserBooks action, and it uses the useEffect hook to dispatch 
// this action when the component is rendered. It also uses the useSelector hook to access the user, 
// isAuthenticated and books state from the store, and renders the books in the user's bookshelf and the user's name. 
// if the user is not authenticated it will redirect the user to the login page.


import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUserBooks } from './bookActions';
import { Redirect } from 'react-router-dom';


function Bookshelf() {
  const user = useSelector((state) => state.auth.user);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const books = useSelector(state => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(getUserBooks());
    }
  }, [dispatch, isAuthenticated]);

  if (!isAuthenticated) {
    return <Redirect to="/login" />;
  }

  return (
    <div>
      <h1>Welcome, {user.name}</h1>
      <ul>
        {books.map(book => (
          <li key={book.id}>{book.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Bookshelf;




