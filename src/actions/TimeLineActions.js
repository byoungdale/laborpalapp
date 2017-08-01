import {
  UPDATE_TIMELINE
} from './types';

export const updateTimeLine = (dispatch, timelinedata) => {
  dispatch({
    type: UPDATE_TIMELINE,
    timelinedata
  });
};

export const handleContractionSavePress = (newContractionsList) => {
  return (dispatch) => {
    const timelinedata = newContractionsList.map((contraction) => {
      const result = {
        time: contraction.timeElapsed,
        title: `Contraction ${contraction.length}`,
        description: contraction.note,
        icon: contraction.rating
      };
      return result;
    });
    updateTimeLine(dispatch, timelinedata);
  };
};
