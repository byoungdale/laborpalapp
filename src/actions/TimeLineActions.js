import {
  UPDATE_TIMELINE
} from './types';
import ratings from '../img/ratings';

const formatTime = require('minutes-seconds-milliseconds');

export const updateTimeLine = (dispatch, timelinedata) => {
  dispatch({
    type: UPDATE_TIMELINE,
    timelinedata
  });
};

export const handleContractionSavePress = (newContractionsList) => {
  return (dispatch) => {
    const timelinedata = newContractionsList.map((contraction) => {
      const finalRating = contraction.rating.toString();
      const result = {
        time: formatTime(contraction.timeElapsed),
        title: `Contraction ${contraction.id}`,
        description: contraction.note,
        icon: ratings[finalRating]
      };
      return result;
    });
    updateTimeLine(dispatch, timelinedata.reverse());
  };
};
