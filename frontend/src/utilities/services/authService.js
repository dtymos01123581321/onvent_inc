import { http } from './httpService';
import apiEndpoints from '../apiEndpoints';
import { toast } from 'react-toastify';

export const login = async (data) => {
  try {
    const response = await http.post(`${apiEndpoints.users}/login`, data);
    return response.data;
  } catch (error) {
    toast.error(error.data.msg, {
      position: "top-right",
      autoClose: 5000,
      closeOnClick: true,
      pauseOnHover: true,
      progress: undefined,
    });
    if (error.response.status !== 401) {
      throw new Error(error);
    }
    return;
  }
};
