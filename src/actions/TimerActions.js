import {
  START_PRESS,
  STOP_PRESS,
  INCREMENT_TIME,
  CONTINUE_TIMER
} from './types';

export const startTimer = (dispatch, timeElapsed) => {
  dispatch({
    type: START_PRESS,
    running: true,
    startStamp: new Date(),
    timeElapsed
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

export const continueTimer = (dispatch, timeElapsed) => {
  dispatch({
    type: CONTINUE_TIMER,
    timeElapsed
  });
};

export const handleStopPress = (running, timeElapsed) => {
  return (dispatch) => {
    this.clearInterval(this.interval);
    stopTimer(dispatch, timeElapsed);
    return;
  };
};

export const handleStartPress = (running, startStamp, timeElapsed) => {
  return (dispatch) => {
    if (timeElapsed !== 0 && !running) {
      continueTimer(dispatch, timeElapsed);
    }

    startTimer(dispatch);

    this.interval = this.setInterval(() => {
      incrementTimer(dispatch, startStamp);
    }, 1000);
  };
};
