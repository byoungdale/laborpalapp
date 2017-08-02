import {
  UPDATE_TIMELINE,
  SELECT_TIMELINE_ELEMENT
} from '../actions/types';

const INITIAL_STATE = {
  timelinedata: [
    {
      time: '09:00',
      title: 'Sample Contraction',
      description: 'Giving birth should be your greatest achivement. Not your greatest fear.\n - Jane Weideman',
      icon: require('../img/baby.png'),
    }
  ]
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
