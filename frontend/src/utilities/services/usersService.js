import FormData from 'form-data';
import axios from 'axios';
import { toast } from 'react-toastify';

import apiEndpoints from '../apiEndpoints';

export const addUser = async (data) => {
  try {
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('password', data.password);
    formData.append('images', data.file[0]);

    const config = {
      headers: {
        'content-type': 'multipart/form-data'
      }
    };
    const response = await axios.post(apiEndpoints.users, formData, config)
      .then((response) => {
        toast.success('The file is successfully uploaded', {
          position: "top-right",
          autoClose: 5000,
          closeOnClick: true,
          pauseOnHover: true,
          progress: undefined,
        });
        return response;
      }).catch((error) => {
      console.log(error);
    });

    return response.data;
  } catch (error) {
    if (error.response.status !== 401) {
      throw new Error(error);
    }
    return;
  }
};
