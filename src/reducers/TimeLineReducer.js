import {
  UPDATE_TIMELINE
} from '../actions/types';

const INITIAL_STATE = {
  timelinedata: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_TIMELINE:
      return {
        ...state,
        timelinedata: action.timelinedata
      };
    default:
      return state;
  }
};
