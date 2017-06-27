import {
  START_PRESS,
  STOP_PRESS,
  INCREMENT_TIME,
  ADD_CONTRACTION,
  CONTINUE_TIMER
} from './types';

export const startTimer = (dispatch, timeElapsed) => {
  dispatch({
    type: START_PRESS,
    running: true,
    startTime: new Date(),
    timeElapsed
  });
};

export const stopTimer = (dispatch, timeElapsed) => {
  dispatch({
    type: STOP_PRESS,
    timeElapsed
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

export const handleStopPress = (running, timeElapsed) => {
  return (dispatch) => {
    this.clearInterval(this.interval);
    stopTimer(dispatch, timeElapsed);
    return;
  };
};

export const handleStartPress = (running, startTime, timeElapsed) => {
  console.log(startTime);
  console.log(timeElapsed);
  return (dispatch) => {
    if (timeElapsed !== 0 && !running) {
      continueTimer(dispatch, timeElapsed);
    }

    startTimer(dispatch);

    this.interval = this.setInterval(() => {
      incrementTimer(dispatch, startTime);
    }, 1000);
  };
};

export const handleContractionPress = (timeElapsed, startTime, contractions) => {
  return (dispatch) => {
    const contraction = timeElapsed;
    const newContractionsList = contractions.concat([contraction]);
    this.clearInterval(this.interval);
    addContraction(dispatch, contraction, startTime, newContractionsList);
  };
};
