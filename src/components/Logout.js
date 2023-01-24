
//This component will allow authenticated users to log out of the application by dispatching the logoutUser action.


import React from 'react';
import { useDispatch } from 'react-redux';
import { logoutUser } from './userActions';

function Logout() {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(logoutUser());
  }

  return (
    <button onClick={handleClick}>Logout</button>
  );
}

export default Logout;
