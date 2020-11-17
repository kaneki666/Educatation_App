import {CHANGE_DARKMODE} from './types';

export const changeDarkMode = (state) => {
  return (dispatch) => {
    dispatch({
      type: CHANGE_DARKMODE,
      payload: state,
    });
  };
};
