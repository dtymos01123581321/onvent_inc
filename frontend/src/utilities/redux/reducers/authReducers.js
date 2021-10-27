import { LOGIN_TOKEN_SUCCESS } from '../actions/actionTypes';

export const token = (state = '', action) => {
  switch (action.type) {
    case LOGIN_TOKEN_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};
