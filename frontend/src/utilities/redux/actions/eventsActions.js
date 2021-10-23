import * as types from './actionTypes';

export const setEvent = (event) => {
  return {
    type: types.SET_EVENT,
    payload: event,
  };
};

export const setEventAction = (event) => (dispatch) => dispatch(setEvent(event));
