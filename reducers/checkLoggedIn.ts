import {CHECK_LOGGEDIN} from './types';

export const checkLoggedIn = (state: any) => {
  return (dispatch: any) => {
    dispatch({
      type: CHECK_LOGGEDIN,
      payload: state,
    });
  };
};
