import { http } from './httpService';
import apiEndpoints from '../apiEndpoints';

export const addUser = async (data) => {
  try {
    const response = await http.post(apiEndpoints.users, data);
    return response.data;
  } catch (error) {
    if (error.response.status !== 401) {
      throw new Error(error);
    }
    return;
  }
};
