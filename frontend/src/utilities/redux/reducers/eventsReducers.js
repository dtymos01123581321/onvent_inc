import * as types from '../actions/actionTypes';

const initState = []

export const events = (state = initState, action) => {
  switch (action.type) {
    case types.SET_EVENT:
      return [...state, action.payload];
    default:
      return state;
  }
};
