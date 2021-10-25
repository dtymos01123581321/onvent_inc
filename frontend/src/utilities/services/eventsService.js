import { http } from './httpService';

export const fetchEvents = async (url) => {
  try {
    const response = await http.get(url);
    return response.data;
  } catch (error) {
    if (error.response.status !== 401) {
      throw new Error(error);
    }
    return;
  }
};

export const addEvent = async (url, data) => {
  try {
    const response = await http.post(url, data);
    return response.data;
  } catch (error) {
    if (error.response.status !== 401) {
      throw new Error(error);
    }
    return;
  }
};
