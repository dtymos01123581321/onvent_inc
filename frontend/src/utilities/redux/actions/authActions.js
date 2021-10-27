import { LOGIN_TOKEN_FAILURE, LOGIN_TOKEN_SUCCESS } from './actionTypes';
import history from '../../history';
import routeNames from '../../routeNames';
import { login } from '../../services/authService';

export const setTokenSuccess = (token) => {
  return {
    type: LOGIN_TOKEN_SUCCESS,
    payload: token,
  };
};

export const setTokenFailure = (error) => {
  return {
    type: LOGIN_TOKEN_FAILURE,
    payload: error,
  };
};

export const loginAction = (data) => async (dispatch) => {
  try {
    const { token }  = await login(data);
    dispatch(setTokenSuccess(token));

    history.push(routeNames.root);
  } catch (error) {
    dispatch(setTokenFailure());
  }
};
