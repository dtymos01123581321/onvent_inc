import history from '../../history';
import { addUser } from '../../services/usersService';
import { login } from '../../services/authService';

export const registrationAction = (params) => async () => {
    try {
      await addUser(params);

      history.push('/')
    } catch (error) {
      console.log(error)
    }
};

export const loginAction = (params) => async dispatch => {
  const { data: { token, user } } = await login(params);

  dispatch(login({
    token,
    user
  }));

  history.push('/');
};


