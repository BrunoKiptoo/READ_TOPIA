
// This code import the store in the index.js file and wrap the <App> component in the <Provider> component
// This allows the components to have access to the store and use the `useSelector` and `useDispatch` hooks from `react-redux`.



import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './components/HomePage';
import Search from './components/Search';
import Register from './components/Register';
import Login from './components/Login';
import Bookshelf from './components/Bookshelf';
import Logout from './components/Logout';
import ErrorMessage from './components/ErrorMessage';
import Loading from './components/Loading';

ReactDOM.render(
  <Provider store={store}>
    <Router>
        <Navigation />
        <ErrorMessage />
        <Loading />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/search" component={Search} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/bookshelf" component={Bookshelf} />
          <Route path="/logout" component={Logout} />
        </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
