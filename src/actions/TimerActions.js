import {
  START_PRESS,
  STOP_PRESS,
  INCREMENT_TIME
} from './types';

export const startTimer = (dispatch) => {
  dispatch({
    type: START_PRESS,
    running: true,
    startStamp: new Date()
  });
};

export const stopTimer = (dispatch, timeElapsed) => {
  dispatch({
    type: STOP_PRESS,
    timeElapsed
  });
};

export const incrementTimer = (dispatch, startStamp) => {
  dispatch({
    type: INCREMENT_TIME,
    timeElapsed: new Date() - startStamp
  });
};

export const handleStopPress = (timeElapsed) => {
  return (dispatch) => {
    this.clearInterval(this.interval);
    stopTimer(dispatch, timeElapsed);
    return;
  };
};

export const handleStartPress = (running, startStamp) => {
  return (dispatch) => {
    startTimer(dispatch);

    this.interval = this.setInterval(() => {
      incrementTimer(dispatch, startStamp);
    }, 1000);
  };
};
