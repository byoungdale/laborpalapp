import {
  ADD_CONTRACTION,
  DELETE_CONTRACTION,
  UPDATE_CONTRACTION_LIST
} from '../actions/types';

const INITIAL_STATE = {
  contractions: []
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
        contractions: action.contractions
      };
    case UPDATE_CONTRACTION_LIST:
      return {
        ...state,
        contractions: action.contractions
      };
    default:
      return state;
  }
};
