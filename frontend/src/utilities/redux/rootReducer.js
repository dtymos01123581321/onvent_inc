import { combineReducers } from 'redux';
import { events } from './reducers/eventsReducers';
import { token } from './reducers/authReducers';

const rootReducer = combineReducers({
  events,
  token,
});

export default rootReducer;
