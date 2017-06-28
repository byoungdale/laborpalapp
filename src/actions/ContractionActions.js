import {
  DELETE_CONTRACTION,
  ADD_CONTRACTION
} from './types';

export const addContraction = (dispatch, contraction, startTime, newContractionsList) => {
  dispatch({
    type: ADD_CONTRACTION,
    startTime: new Date(),
    timeElapsed: new Date() - startTime,
    contractions: newContractionsList,
  });
};

export const deleteContraction = (dispatch, newContractionsList) => {
  dispatch({
    type: DELETE_CONTRACTION,
    contractions: newContractionsList
  });
};

export const handleContractionPress = (timeElapsed, startTime, contractions) => {
  return (dispatch) => {
    const contraction = timeElapsed;
    const newContractionsList = contractions.concat([contraction]);
    this.clearInterval(this.interval);
    addContraction(dispatch, contraction, startTime, newContractionsList);
  };
};

export const handleContractionDeletePress = (contractions, index) => {
  const newContractionsList = contractions.slice(index + 1).concat(contractions.slice(0, index));
  return (dispatch) => {
    deleteContraction(dispatch, newContractionsList);
  };
};
