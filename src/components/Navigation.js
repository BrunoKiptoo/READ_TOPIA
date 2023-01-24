
// This component will handle the navigation throughout the application, such as linking to the home page, search page, bookshelf, 
// and login/logout pages. It uses React Router to handle the client-side routing and also uses a state management 
// library such as redux to check if the user is authenticated and show the appropriate links.

import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Navigation() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/search">Search</Link>
      {isAuthenticated ? (
        <>
          <Link to="/bookshelf">Bookshelf</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/logout">Logout</Link>
        </>
      ) : (
        <>
          <Link to="/register">Register</Link>
          <Link to="/login">Login</Link>
        </>
      )}
    </nav>
  );
}

export default Navigation;
