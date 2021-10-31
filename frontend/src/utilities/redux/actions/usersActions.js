import history from '../../history';
import { addUser } from '../../services/usersService';

export const registrationAction = (params) => async () => {
    try {
      const data = await addUser(params);
      console.log('data  --: ', data);

      history.push('/')
    } catch (error) {
      console.log(error)
    }
};


