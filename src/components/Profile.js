




import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateProfile } from './actions';

function Profile() {
  const user = useSelector((state) => state.auth.user);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProfile({ name, email }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">Save</button>
    </form>
  );
}

export default Profile;
