import * as types from './actionTypes';
import history from '../../history';
import { toast } from 'react-toastify';
import routeNames from '../../routeNames';

export const setEvent = (event) => {
  return {
    type: types.SET_EVENT_SUCCESS,
    payload: event,
  };
};

export const setEventFailure = (error) => {
  return {
    type: types.SET_EVENT_FAILURE,
    payload: error,
  };
};

export const setEventAction = (event) => (dispatch) => {
  try {
    dispatch(setEvent(event));

    toast.info(`The new event was added!`, {
      position: "top-right",
      autoClose: 5000,
      closeOnClick: true,
      pauseOnHover: true,
      progress: undefined,
    });

    history.push(routeNames.root);
  } catch (error) {
    dispatch(setEventFailure(error));
  }
}

