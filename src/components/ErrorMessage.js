
// This component will handle error messages and display them to the user in a user-friendly format. 
// It uses a state management library such as redux to access
// the error message from the global state and display it to the user.

import React from 'react';
import { useSelector } from 'react-redux';

function ErrorMessage() {
  const error = useSelector(state => state.error);

  if (!error) {
    return null;
  }

  return (
    <div>
      <p>{error}</p>
    </div>
  );
}

export default ErrorMessage;
