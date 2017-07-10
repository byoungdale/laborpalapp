import { combineReducers } from 'redux';
import TimerReducer from './TimerReducer';
import ContractionReducer from './ContractionReducer';

export default combineReducers({
  timer: TimerReducer,
  contractionManager: ContractionReducer
});
