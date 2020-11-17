import {AUTH_STATE_CHANGE, CHECK_LOGGEDIN, CHANGE_DARKMODE} from './types';

const whiteModeData = {
  backgroundColor: 'white',
  headerColor: 'black',
  iconBg: 'buttonSecondary',
  titleColor: 'black',
  textColor: 'black',
  tabBackground: 'rgba(12, 12, 52, 0.05)',
  noticeColor: '#2CB9B0',
  buttonPrimary: 'primary',
  pdfBg: 'white',
};
const DarkModeData = {
  backgroundColor: 'bgDark',
  headerColor: 'white',
  iconBg: 'iconBgDark',
  titleColor: 'white',
  textColor: 'white',
  tabBackground: '#383C40',
  noticeColor: '#FFE8A3',
  buttonPrimary: 'noticeColorDark',
  pdfBg: '#272D33',
};
const initialState = {
  isSigned: false,
  darkMode: false,
  modeData: whiteModeData,
};

export default (state = initialState, action: any) => {
  let {isSigned} = state;
  switch (action.type) {
    case AUTH_STATE_CHANGE:
      isSigned = action.payload;
      return {...state, isSigned: isSigned};

    case CHECK_LOGGEDIN:
      if (action.payload === 'LoggedIn') {
        return {...state, isSigned: true};
      } else return {...state, isSigned: false};

    case CHANGE_DARKMODE:
      let {modeData} = state;

      if (action.payload) {
        modeData = DarkModeData;
      } else {
        modeData = whiteModeData;
      }
      return {
        ...state,
        mode: action.payload,
        modeData: modeData,
      };

    default:
      return state;
  }
};
