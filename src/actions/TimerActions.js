import {
  START_PRESS,
  STOP_PRESS,
  INCREMENT_TIME,
  ADD_CONTRACTION,
  CONTINUE_TIMER
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
  dispatch({
    type: INCREMENT_TIME,
    timeElapsed: new Date() - startTime
  });
};

export const continueTimer = (dispatch, timeElapsed) => {
  dispatch({
    type: CONTINUE_TIMER,
    timeElapsed
  });
};

export const addContraction = (dispatch, contraction, startTime, newContractionsList) => {
  dispatch({
    type: ADD_CONTRACTION,
    startTime: new Date(),
    timeElapsed: new Date() - startTime,
    contractions: newContractionsList,
  });
};

export const handleStopPress = (running) => {
  return (dispatch) => {
    clearInterval(this.interval);
    stopTimer(dispatch);
    return;
  };
};

export const handleStartPress = (running, startTime, timeElapsed) => {
  return (dispatch) => {
    if (timeElapsed !== 0 && !running) {
      continueTimer(dispatch, timeElapsed);
    }

    startTimer(dispatch);

    this.interval = setInterval(() => {
      incrementTimer(dispatch, startTime);
    }, 30);
  };
};

export const handleContractionPress = (timeElapsed, startTime, contractions) => {
  return (dispatch) => {
    const contraction = timeElapsed;
    const newContractionsList = contractions.concat([contraction]);
    clearInterval(this.interval);
    addContraction(dispatch, contraction, startTime, newContractionsList);
  };
};
