//This file should import all individual reducers and combine them using the combineReducers function from redux;


import { combineReducers } from 'redux';
import authReducer from './authReducer';

export default combineReducers({
  auth: authReducer,
});


