import {
  START_PRESS,
  STOP_PRESS,
  INCREMENT_TIME,
  ADD_CONTRACTION,
  CONTINUE_TIMER
} from '../actions/types';

const INITIAL_STATE = {
  timeElapsed: 0,
  startTime: new Date(),
  running: false,
  contractions: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case START_PRESS:
      return { ...state, running: true, startTime: action.startTime };
    case STOP_PRESS:
      return { ...state, running: false };
    case INCREMENT_TIME:
      return { ...state, running: true, timeElapsed: action.timeElapsed };
    case CONTINUE_TIMER:
      return { ...state, running: true, timeElapsed: action.timeElapsed };
    case ADD_CONTRACTION:
      return {
        ...state,
        running: false,
        startTime: new Date(),
        timeElapsed: 0,
        contractions: action.contractions
      };
    default:
      return state;
  }
};
