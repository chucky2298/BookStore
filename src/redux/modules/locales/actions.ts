import { Dispatch } from 'redux';

import actionTypes from './action_types';

const selectLanguage = (selectedLanguage: string) => (dispatch: Dispatch) => {
  dispatch({
    type: actionTypes.SELECT_LANGUAGE,
    payload: selectedLanguage,
  });
};

export default selectLanguage;
