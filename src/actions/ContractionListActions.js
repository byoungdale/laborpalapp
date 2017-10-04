import { Actions } from 'react-native-router-flux';

import {
  DELETE_CONTRACTION,
  ADD_CONTRACTION,
  UPDATE_CONTRACTION_LIST,
  UPDATE_TIMELINE,
  RESET_CONTRACTIONS
} from './types';
import ratings from '../img/ratings';

const formatTime = require('minutes-seconds-milliseconds');

export const addContraction = (dispatch, contraction, timeElapsed, startStamp, newContractionsList) => {
  dispatch({
    type: ADD_CONTRACTION,
    startStamp: new Date(),
    timeElapsed,
    contractions: newContractionsList
  });
  Actions.note({ contraction });
};

export const deleteContraction = (dispatch, newContractionsList, newTimelinedata) => {
  dispatch({
    type: DELETE_CONTRACTION,
    contractions: newContractionsList,
    timelinedata: newTimelinedata
  });
  Actions.stopwatch({ type: 'reset' });
};

export const resetContractions = (dispatch) => {
  dispatch({
    type: RESET_CONTRACTIONS
  });
}

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
  Actions.pop({ type: 'reset' });
};

export const handleAddingContraction = (startStamp, timeElapsed, contractions) => {
  return (dispatch) => {
    const contraction = {
      id: contractions.length + 1,
      timeElapsed: Date.now() - startStamp,
      startStamp,
      endStamp: new Date(),
      rating: null,
      note: null,
      encouragement: false
    };
    const newContractionsList = contractions.concat([contraction]);
    this.clearInterval(this.interval);
    addContraction(dispatch, contraction, timeElapsed, startStamp, newContractionsList);
  };
};

export const handleContractionDeletePress = (contractions, timelinedata, id) => {
  const newContractionsList = contractions.filter((contraction) => {
    if (contraction.id > id) {
      return contraction.id = contraction.id - 1;
    } else if (contraction.id !== id) {
      return contraction;
    }
  });
  const newTimelinedata = timelinedata.filter((contraction) => {
    if (contraction.title > id) {
      return contraction.title = contraction.title - 1;
    } else if (contraction.title !== id) {
      return contraction;
    }
  });

  return (dispatch) => {
    deleteContraction(dispatch, newContractionsList, newTimelinedata);
  };
};

export const handleResetPress = () => {
  return (dipatch) => { resetContractions(dipatch); };
}

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

export const handleContractionSavePress = (newContractionsList, contractionID) => {
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
