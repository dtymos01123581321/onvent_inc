import history from '../../history';
import { addUser } from '../../services/usersService';

export const registrationAction = (params) => async () => {
    try {
      await addUser(params);

      history.push('/')
    } catch (error) {
      console.log(error)
    }
};


