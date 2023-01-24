//the Login component is a functional component that uses the useState hook to keep track of the email 
// and password that the user enters into the form.
// It also uses the useDispatch hook from react-redux to dispatch the login action with the user data.



import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from './actions';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = {
      email,
      password,
    };
    dispatch(login(user));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <br />
      <button type="submit">Log in</button>
    </form>
  );
}

export default Login;
