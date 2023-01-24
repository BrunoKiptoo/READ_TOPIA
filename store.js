import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;



//This code sets up a new Redux store using the createStore function and applies the redux-thunk middleware to it. 
// It also imports the rootReducer file, 
// which should contain all of your app's reducers combined.