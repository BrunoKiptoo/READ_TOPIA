
// The Forms component is a functional component that takes a formType prop to indicate whether it's a registration form or a login form.
// It uses the useState hook to keep track of the email, password and name (in case of registration) that the user enters into the form.
// It also uses the useDispatch hook from react-redux to dispatch the register or login action with the user data.
// The component then renders the form fields according to the formType prop, and it calls the register or login action when the form is submitted.


import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login, register } from './actions';

function Form({ formType }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formType === 'login') {
      dispatch(login({ email, password }));
    } else if (formType === 'register') {
      dispatch(register({ email, password, name }));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {formType === 'register' && (
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      )}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">{formType === 'login' ? 'Log in' : 'Register'}</button>
    </form>
  );
}

export default Form;








// The component receives a prop called formType that tells it whether it should display a login form or a register form. 
// It uses the useState hook to keep track of the values of the email, password and name inputs. 
// It also uses the useDispatch hook to get access to the dispatch function from the store. When the form is submitted, 
// it calls the handleSubmit function, which prevents the default form submission behavior, 
// then it checks the formType prop and dispatches the login or register action with the relevant data as the payload.