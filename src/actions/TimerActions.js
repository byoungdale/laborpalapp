import { Actions } from 'react-native-router-flux';

import {
  START_PRESS,
  STOP_PRESS,
  INCREMENT_TIME
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

  Actions.note();
};

export const incrementTimer = (dispatch, startStamp) => {
  dispatch({
    type: INCREMENT_TIME,
    timeElapsed: new Date() - startStamp
  });
};

export const handleStopPress = (running, timeElapsed) => {
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
