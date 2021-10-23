import * as types from '../actions/actionTypes';

const initState = [
  {
    events: [],
  }
]

export const events = (state = initState, action) => {
  const newState = {...state}
  switch (action.type) {
    case types.SET_EVENT:
      newState.events = [...newState.events, action.payload];
      return newState;
    default:
      return state;
  }
};
