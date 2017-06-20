import {
  START_TIMER,
  STOP_TIMER,
  TICK
} from '../actions/types';

const INITIAL_STATE = {
  timeElapsed: null,
  startTime: null,
  running: false,
  contractions: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case START_TIMER:
      console.log('hit START_TIMER reducer case');
      return {
        ...state,
        running: true,
        timeElapsed: 0,
        offset: action.offset
      };

    case STOP_TIMER:
      console.log('hit STOP_TIMER reducer case');
      return {
        ...state,
        running: false
      };

    case TICK:
      console.log('hit TICK_TIMER reducer case');
      return {
        ...state,
        timeElapsed: state.time + (action.time - state.offset),
        offset: action.time
      };

    default:
      return state;
  }
};
