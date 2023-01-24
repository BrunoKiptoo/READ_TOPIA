// This component will display a loading spinner or other visual indicator while the app is fetching data or performing other tasks. 
// It uses a state management library such as redux to 
// access the loading state from the global state and display a loading message to the user.



import React from 'react';
import { useSelector } from 'react-redux';

function Loading() {
  const isLoading = useSelector(state => state.isLoading);

  if (!isLoading) {
    return null;
  }

  return (
    <div>
      <p>Loading...</p>
    </div>
  );
}

export default Loading;
