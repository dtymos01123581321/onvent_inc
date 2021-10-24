import * as types from '../actions/actionTypes';

const initState = []

export const events = (state = initState, action) => {
  switch (action.type) {
    case types.SET_EVENT_SUCCESS:
      return [...state, action.payload];
    case types.DELETE_EVENTS_SUCCESS:
      return [];
    default:
      return state;
  }
};
