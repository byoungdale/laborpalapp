import {
  DELETE_CONTRACTION,
  ADD_CONTRACTION
} from './types';

export const addContraction = (dispatch, contraction, startStamp, newContractionsList) => {
  dispatch({
    type: ADD_CONTRACTION,
    startStamp: new Date(),
    timeElapsed: new Date() - startStamp,
    contractions: newContractionsList
  });
};

export const deleteContraction = (dispatch, newContractionsList) => {
  dispatch({
    type: DELETE_CONTRACTION,
    contractions: newContractionsList
  });
};

export const handleContractionPress = (timeElapsed, startStamp, contractions) => {
  return (dispatch) => {
    const contraction = {
      timeElapsed,
      startStamp,
      endStamp: new Date(),
      note: null,
    };
    const newContractionsList = contractions.concat([contraction]);
    this.clearInterval(this.interval);
    addContraction(dispatch, contraction, startStamp, newContractionsList);
  };
};

export const handleContractionDeletePress = (contractions, index) => {
  console.log(contractions, index);
  const newContractionsList = contractions.slice(index + 1).concat(contractions.slice(0, index));
  return (dispatch) => {
    deleteContraction(dispatch, newContractionsList);
  };
};
