import {
  START_PRESS,
  STOP_PRESS,
  INCREMENT_TIME
} from './types';

export const startTimer = (dispatch) => {
  dispatch({
    type: START_PRESS,
    running: true,
    startTime: new Date()
  });
};

export const stopTimer = (dispatch) => {
  dispatch({
    type: STOP_PRESS,
    running: true
  });
};

export const incrementTimer = (dispatch, startTime) => {
  console.log('incrementing');
  dispatch({
    type: INCREMENT_TIME,
    timeElapsed: new Date() - startTime
  });
};

export const handleStartStopPress = (running, startTime) => {
  console.log(running);
  return (dispatch) => {
    if (running) {
      clearInterval(this.interval);
      stopTimer(dispatch);
      return;
    }

    startTimer(dispatch);

    this.interval = setInterval(() => {
      incrementTimer(dispatch, startTime);
    }, 30);
  };
};
