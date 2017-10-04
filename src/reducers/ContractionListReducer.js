import {
  ADD_CONTRACTION,
  DELETE_CONTRACTION,
  UPDATE_CONTRACTION_LIST,
  UPDATE_TIMELINE,
  RESET_CONTRACTIONS
} from '../actions/types';

const INITIAL_STATE = {
  contractions: [],
  timelinedata: [
    {
      time: '09:00',
      title: 'Example',
      description: 'Giving birth should be your greatest achivement. Not your greatest fear.\n - Jane Weideman',
      icon: require('../img/baby.png'),
    }
  ]
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_CONTRACTION:
      return {
        ...state,
        contractions: action.contractions
      };
    case DELETE_CONTRACTION:
      return {
        ...state,
        contractions: action.contractions,
        timelinedata: action.timelinedata
      };
    case UPDATE_CONTRACTION_LIST:
      return {
        ...state,
        contractions: action.contractions
      };
    case UPDATE_TIMELINE:
      return {
        ...state,
        timelinedata: action.timelinedata
      };
    case RESET_CONTRACTIONS:
      return INITIAL_STATE;
    default:
      return state;
  }
};
