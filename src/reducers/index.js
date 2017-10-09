import { combineReducers } from 'redux';
import TimerReducer from './TimerReducer';
import ContractionListReducer from './ContractionListReducer';
import FrequencyLengthReducer from './FrequencyLengthReducer';

export default combineReducers({
  stopwatch: TimerReducer,
  contractionListManager: ContractionListReducer,
  frequencyLengthManager: FrequencyLengthReducer 
});
