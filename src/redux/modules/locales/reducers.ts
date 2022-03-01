import locales from '../../../constants/locales';
import * as types from './types';
import actionTypes from './action_types';

const initialState: types.switchLanguageState = {
  selectedLanguage: locales.ENGLISH,
};

const reducer = (
  state: types.switchLanguageState = initialState,
  action: types.switchLanguageAction,
): types.switchLanguageState => {
  if (action.type === actionTypes.SELECT_LANGUAGE) {
    return {
      ...state,
      selectedLanguage: action.payload,
    };
  }

  return state;
};

export default reducer;
