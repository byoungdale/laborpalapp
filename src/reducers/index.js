import { combineReducers } from 'redux';
import TimerReducer from './TimerReducer';
import ContractionListReducer from './ContractionListReducer';
import TimeLineReducer from './TimeLineReducer';

export default combineReducers({
  timer: TimerReducer,
  contractionListManager: ContractionListReducer,
  timelinedata: TimeLineReducer
});
