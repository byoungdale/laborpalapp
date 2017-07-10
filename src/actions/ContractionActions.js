import { Actions } from 'react-native-router-flux';

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
  console.log('addContraction');
  console.log(contraction);
  Actions.note({ contraction });
};

export const deleteContraction = (dispatch, newContractionsList) => {
  dispatch({
    type: DELETE_CONTRACTION,
    contractions: newContractionsList
  });
};

export const handleAddingContraction = (startStamp, timeElapsed, contractions) => {
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
