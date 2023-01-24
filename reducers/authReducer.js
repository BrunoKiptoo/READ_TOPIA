

// This authReducer will handle the different actions that are related to authentication. 
// The initial state sets isAuthenticated to false and user to null. When the LOGIN_SUCCESS or REGISTER_SUCCESS action is dispatched, 
// it updates the state to set isAuthenticated to true and user to the payload of the action. If the LOGIN_FAILURE or REGISTER_FAILURE action is dispatched, 
// it updates the state to set isAuthenticated to false, user to null and error to the payload of the action.





import { LOGIN_SUCCESS, LOGIN_FAILURE, REGISTER_SUCCESS, REGISTER_FAILURE } from './types';

const initialState = {
  isAuthenticated: false,
  user: null,
  error: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
        error: null,
      };
    case LOGIN_FAILURE:
    case REGISTER_FAILURE:
        return {
            ...state,
            isAuthenticated: false,
            user: null,
            error: action.payload,
          };
        default:
          return state;
      }
    }
    
