import * as types from './types';
import actionTypes from './action_types';
import actionStatuses from '../../../../redux/constants/action_statuses';
import { getItem } from '../../../../utils/storage';
import constants from '../../../../constants/constants';

const initialState: types.AuthState = {
  user: getItem(constants.USER),
  isLoggingIn: false,
  error: undefined,
};

const reducer = (
  state: types.AuthState = initialState,
  action: types.AuthAction,
): types.AuthState => {
  if (action.type === actionTypes.LOG_IN) {
    if (action.status === actionStatuses.STARTED) {
      return {
        ...state,
        isLoggingIn: true,
        error: undefined,
      };
    }
    if (action.status === actionStatuses.SUCCEEDED) {
      return {
        ...state,
        isLoggingIn: false,
        error: undefined,
        user: action.payload as types.User,
      };
    }
    if (action.status === actionStatuses.FAILED) {
      return {
        ...state,
        isLoggingIn: false,
        error: action.payload as string,
      };
    }

    return state;
  }

  if (action.type === actionTypes.LOG_OUT) {
    return initialState;
  }

  return state;
};

export default reducer;
