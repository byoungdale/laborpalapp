import {
  START_PRESS,
  STOP_PRESS,
  INCREMENT_TIME
} from '../actions/types';

const INITIAL_STATE = {
  timeElapsed: 0,
  startStamp: Date.now(),
  endStamp: 0,
  timer: Date.now(),
  running: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case START_PRESS:
      return { ...state, running: true, startStamp: action.startStamp };
    case STOP_PRESS:
      return {
        ...state,
        endStamp: action.endStamp,
        timeElapsed: action.timeElapsed,
        timer: action.timer,
        running: false
      };
    case INCREMENT_TIME:
      return { ...state, running: true, timer: action.timer };
    default:
      return state;
  }
};
