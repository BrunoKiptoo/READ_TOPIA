


import { LOGIN_SUCCESS, LOGIN_FAILURE } from './types';

const initialState = {
  user: null,
  error: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        error: null,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        user: null,
        error: action.payload,
      };
    default:
      return state;
  }
}
