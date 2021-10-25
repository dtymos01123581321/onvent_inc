import history from '../../history';
import { addUser } from '../../services/authService';

export const registrationAction = (data) => async () => {
    try {
      await addUser(data);

      history.push('/')
    } catch (error) {
      console.log(error)
    }
};

