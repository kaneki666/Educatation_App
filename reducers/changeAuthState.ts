import {AUTH_STATE_CHANGE} from './types';

export const changeAuth = (state: any) => {
  return (dispatch: any) => {
    dispatch({
      type: AUTH_STATE_CHANGE,
      payload: state,
    });
  };
};
