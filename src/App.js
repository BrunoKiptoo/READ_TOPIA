import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Navigation from './components/Navigation';
import HomePage from './components/HomePage';
import Search from './components/Search';
import Register from './components/Register';
import Login from './components/Login';
import Bookshelf from './components/Bookshelf';
import Logout from './components/Logout';
import ErrorMessage from './components/ErrorMessage';
import Loading from './components/Loading';
import Profile from './components/Profile';
import History from './components/History';
import BookDetail from './components/BookDetail';
import Form from './components/Form';

function App() {
  return (
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
          <Route path="/profile" component={Profile} />
          <Route path="/history" component={History} />
          <Route path="/book/:id" component={BookDetail} />
          <Route path="/form" component={Form} />
        </Switch>
      </Router>
      </Provider>
      )}

      export default App;
