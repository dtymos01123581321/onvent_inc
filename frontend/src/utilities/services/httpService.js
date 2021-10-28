import axios from 'axios';
import { toast } from 'react-toastify';

import { SERVER_ERROR } from '../constants';
import { store } from '../../utilities/redux/store';
import { deleteTokenAction } from '../redux/actions/authActions';

const unauthorizedErrorInterceptor = () => {
  return async (error) => {
    if (!error) {
      toast.error(SERVER_ERROR, {
        autoClose: 3000,
        position: toast.POSITION.TOP_LEFT,
        className: 'toast',
      });
    }

    if (error.response && error.response.status === 401) {
      await store.dispatch(deleteTokenAction());
    }

    // need to passthrough the error if we're doing nothing with it
    return Promise.reject(error.response);
  };
};

const createAxiosInstance = () => {
  const client = axios.create({
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });

  client.interceptors.request.use((config) => {
    config.headers = { authorization: `Bearer ${store.getState().token}` };
    return config;
  }, error => Promise.reject(error));

  client.interceptors.response.use(
    response => response,
    unauthorizedErrorInterceptor(),
  );

  return client;
};

export const http = createAxiosInstance();
