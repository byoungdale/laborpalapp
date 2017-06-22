import {
  START_PRESS,
  STOP_PRESS,
  INCREMENT_TIME
} from '../actions/types';

const INITIAL_STATE = {
  timeElapsed: null,
  startTime: null,
  running: false,
  laps: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case START_PRESS:
      return { ...state, running: true, startTime: action.startTime };
    case STOP_PRESS:
      return { ...state, running: false };
    case INCREMENT_TIME:
      return { ...state, running: true, timeElapsed: action.timeElapsed };
    default:
      return state;
  }
};
