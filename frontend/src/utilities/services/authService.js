import { http } from './httpService';
import apiEndpoints from '../apiEndpoints';

export const login = async (data) => {
  try {
    const response = await http.post(apiEndpoints.auth, data);
    return response.data;
  } catch (error) {
    if (error.response.status !== 401) {
      throw new Error(error);
    }
    return;
  }
};
