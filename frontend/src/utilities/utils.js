import jwt from 'jsonwebtoken';
import { SECRET_KEY } from './constants';
import { store } from './redux/store';
import { logoutAction } from './redux/actions/authActions';

export const parseToken = token => {
  try {
    return token && jwt.verify(token, SECRET_KEY);
  } catch (e) {
    console.log('token expired!!');
    store.dispatch(logoutAction());

    return '';
  }
}
