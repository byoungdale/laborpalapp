import {
  START_PRESS,
  STOP_PRESS,
  INCREMENT_TIME
} from './types';

const formatTime = require('minutes-seconds-milliseconds');

export const startTimer = (dispatch) => {
  dispatch({
    type: START_PRESS,
    running: true,
    startStamp: new Date(),
    timer: 0
  });
};

export const stopTimer = (dispatch, startStamp) => {
  dispatch({
    type: STOP_PRESS,
    timeElapsed: 0,
    endStamp: Date.now(),
    timer: 0
  });
};

export const incrementTimer = (dispatch, startStamp) => {
  dispatch({
    type: INCREMENT_TIME,
    timer: Date.now() - startStamp
  });
};

export const handleStopPress = (startStamp, callback) => {
  return (dispatch) => {
    this.clearInterval(this.interval);
    stopTimer(dispatch, startStamp);
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
