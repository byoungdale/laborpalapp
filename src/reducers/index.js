import { combineReducers } from 'redux';
import StopWatchReducer from './StopWatchReducer';

export default combineReducers({
  timer: StopWatchReducer
});
