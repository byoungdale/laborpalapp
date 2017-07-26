import { Actions } from 'react-native-router-flux';

import {
  DELETE_CONTRACTION,
  ADD_CONTRACTION,
  UPDATE_CONTRACTION_LIST
} from './types';

export const addContraction = (dispatch, contraction, startStamp, newContractionsList) => {
  dispatch({
    type: ADD_CONTRACTION,
    startStamp: new Date(),
    timeElapsed: new Date() - startStamp,
    contractions: newContractionsList
  });
  Actions.note({ contraction });
};

export const deleteContraction = (dispatch, newContractionsList) => {
  dispatch({
    type: DELETE_CONTRACTION,
    contractions: newContractionsList
  });

  Actions.stopwatch();
};

export const updateContraction = (dispatch, newContractionsList) => {
  dispatch({
    type: UPDATE_CONTRACTION_LIST,
    contractions: newContractionsList
  });
};

export const handleAddingContraction = (startStamp, timeElapsed, contractions) => {
  return (dispatch) => {
    const contraction = {
      id: contractions.length + 1,
      timeElapsed,
      startStamp,
      endStamp: new Date(),
      rating: null,
      note: null,
      encouragement: false
    };
    const newContractionsList = contractions.concat([contraction]);
    this.clearInterval(this.interval);
    addContraction(dispatch, contraction, startStamp, newContractionsList);
  };
};

export const handleContractionDeletePress = (contractions, id) => {
  const newContractionsList = contractions.filter((contraction) => {
    return contraction.id !== id;
  });
  return (dispatch) => {
    deleteContraction(dispatch, newContractionsList);
  };
};

export const handleContractionRatingUpdate = (contractions, id, ratingName) => {
  const newContractionsList = contractions.map((contraction) => {
    return contraction.id === id ? { ...contraction, rating: ratingName } : contraction;
  });
  return (dispatch) => {
    updateContraction(dispatch, newContractionsList);
  };
};

export const handleContractionNoteUpdate = (contractions, id, note) => {
  const newContractionsList = contractions.map((contraction) => {
    return contraction.id === id ? { ...contraction, note } : contraction;
  });
  return (dispatch) => {
    updateContraction(dispatch, newContractionsList);
  };
};

export const showEncouragement = () => {

};
