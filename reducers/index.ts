import {combineReducers} from 'redux';
import RootReducer from './RootReducer';

export default combineReducers({
  authState: RootReducer,
});
