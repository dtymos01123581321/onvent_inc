import * as types from './actionTypes';
import history from '../../history';
import { toast } from 'react-toastify';
import routeNames from '../../routeNames';
import { fetchEvents, addEvent } from '../../services/eventsService';
import apiEndpoints from '../../apiEndpoints';

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

export const setEvents = (events) => {
  return {
    type: types.SET_EVENTS_SUCCESS,
    payload: events,
  };
};

export const setEventAction = (event) => async (dispatch) => {
  try {
    const data = await addEvent(apiEndpoints.events, event)

    dispatch(setEvent(data));
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

export const deleteEvents = (event) => {
  return {
    type: types.DELETE_EVENTS_SUCCESS,
    payload: event,
  };
};

export const deleteEventsAction = () => (dispatch) => {
  try {
    dispatch(deleteEvents());
    console.log('deleteEventsAction');

    toast.warn(`Delete all events!`, {
      position: "top-right",
      autoClose: 5000,
      closeOnClick: true,
      pauseOnHover: true,
      progress: undefined,
    });

  } catch (error) {
    console.log(error)
  }
}

export const fetchEventsAction = () => async (dispatch) => {
    try {
      const data = await fetchEvents(apiEndpoints.events);
      dispatch(setEvents(data));

    } catch (error) {
      console.log(error)
      dispatch(setEvents([]));
    }
};

