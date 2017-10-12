import {
  FREQUENCY_LENGTH
} from '../actions/types';

const INITIAL_STATE = {
  frequency_length_boolean: {
    lastestfrequency: true,
    latestcontraction: true,
    averagefrequency: true,
    averagecontraction: true
  },
  frequency_length_values: {
    lastestfrequency: 0,
    latestcontraction: 0,
    averagefrequency: 0,
    averagecontraction: 0
  }
};

export default (state = INITIAL_STATE, action) => {
  if (action.type === 'frequency_length') {
    console.log(action);
  }
  switch (action.type) {
    case FREQUENCY_LENGTH:
      return {
        frequency_length_boolean: action.frequency_length_boolean,
        frequency_length_values: action.frequency_length_values
      };
    default:
      return state;
  }
};
