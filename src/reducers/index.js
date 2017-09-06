import { combineReducers } from 'redux';
import TimerReducer from './TimerReducer';
import ContractionListReducer from './ContractionListReducer';

export default combineReducers({
  stopwatch: TimerReducer,
  contractionListManager: ContractionListReducer,
});
