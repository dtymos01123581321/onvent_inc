import { http } from './httpService';
import apiEndpoints from '../apiEndpoints';

export const fetchEvents = async () => {
  try {
    const response = await http.get(apiEndpoints.events);
    return response.data;
  } catch (error) {
    if (error.response.status !== 401) {
      throw new Error(error);
    }
    return;
  }
};

export const addEvent = async (data) => {
  try {
    const response = await http.post(apiEndpoints.events, data);
    return response.data;
  } catch (error) {
    if (error.response.status !== 401) {
      throw new Error(error);
    }
    return;
  }
};
