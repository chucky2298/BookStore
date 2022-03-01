import Axios from 'axios';

import constants from '../../../../constants/constants';
import * as types from './types';

const logIn = async ({
  email,
  password,
}: types.LogInFormValues): Promise<types.User> => {
  const logInUrl = `${constants.API_URL}/auth/login`;
  const response = await Axios({
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    url: logInUrl,
    data: { email, password },
  });

  return response.data;
};

export default logIn;
