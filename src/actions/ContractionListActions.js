import { Actions } from 'react-native-router-flux';

import {
  DELETE_CONTRACTION,
  ADD_CONTRACTION,
  UPDATE_CONTRACTION_LIST,
  UPDATE_TIMELINE
} from './types';
import ratings from '../img/ratings';

const formatTime = require('minutes-seconds-milliseconds');

export const addContraction = (dispatch, contraction, startStamp, newContractionsList) => {
  dispatch({
    type: ADD_CONTRACTION,
    startStamp: new Date(),
    timeElapsed: new Date() - startStamp,
    contractions: newContractionsList
  });
  console.log('addContraction: contraction');
  console.log(contraction);
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

export const updateTimeLine = (dispatch, timelinedata) => {
  dispatch({
    type: UPDATE_TIMELINE,
    timelinedata
  });
  Actions.pop();
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

export const handleContractionSavePress = (newContractionsList) => {
  return (dispatch) => {
    const timelinedata = newContractionsList.map((contraction) => {
      const finalRating = contraction.rating.toString();
      const result = {
        time: formatTime(contraction.timeElapsed),
        title: contraction.id,
        description: contraction.note,
        icon: ratings[finalRating]
      };
      return result;
    });
    updateTimeLine(dispatch, timelinedata.reverse());
  };
};
