import { combineReducers } from 'redux';
import { events } from './reducers/eventsReducers';

const rootReducer = combineReducers({
  events,
});

export default rootReducer;
