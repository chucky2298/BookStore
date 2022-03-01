import actionTypes from './action_types';
import actionStatuses from '../../../../redux/constants/action_statuses';
import * as types from './types';
import { AppDispatch } from '../../../../redux/store';
import logInService from './api';
import errorParser from '../../../../utils/api_error_parser';
import { saveItem, deleteItem } from '../../../../utils/storage';
import constants from '../../../../constants/constants';

export const logIn = (
	{ email, password }: types.LogInFormValues,
  ) => async (dispatch: AppDispatch): Promise<void> => {
	dispatch({
	  type: actionTypes.LOG_IN,
	  status: actionStatuses.STARTED,
	});
  
	try {
	  const response = await logInService({ email, password });
	  dispatch({
		type: actionTypes.LOG_IN,
		status: actionStatuses.SUCCEEDED,
		payload: response,
	  });
	  saveItem({
		key: constants.USER,
		value: response,
	  });
	} catch (e: any) {
	  dispatch({
		type: actionTypes.LOG_IN,
		status: actionStatuses.FAILED,
		payload: errorParser(e),
	  });
	}
  };
  
  export const logOut = () => (dispatch: AppDispatch) => {
	dispatch({
	  type: actionTypes.LOG_OUT,
	  status: actionStatuses.SUCCEEDED,
	});
	deleteItem(constants.USER);
  };
  