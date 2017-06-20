import {
  START_TIMER,
  STOP_TIMER,
  TICK
} from './types';

export const startTimer = () => {
  console.log('startTimer action');
  return {
    type: START_TIMER,
    timeElapsed: 0,
    offset: Date.now()
  };
};

export const progressTimer = () => {
  console.log('progressTimer action');
  return {
    type: TICK,
    timeElapsed: Date.now()
  };
};

export const stopTimer = () => {
  console.log('stopTimer action');
  return {
    type: STOP_TIMER,
  };
};

export const runTimer = () => {
  console.log('runTimer action');
  return (dispatch, getState) => {
    dispatch(startTimer());
    if (getState().running) {
        console.log('getState().running');
        dispatch(progressTimer());
      }
  };
};
