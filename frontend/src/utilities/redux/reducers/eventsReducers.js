import * as types from '../actions/actionTypes';

const initState = []

export const events = (state = initState, action) => {
  switch (action.type) {
    case types.SET_EVENT_SUCCESS:
      return [...state, action.payload];
    case types.SET_EVENTS_SUCCESS:
      return action.payload;
    case types.DELETE_EVENTS_SUCCESS:
      return [];
    case types.DELETE_EVENT_SUCCESS:
      const newEvents = [...state];
      return newEvents.filter( event => event._id !== action.payload );
    default:
      return state;
  }
};
