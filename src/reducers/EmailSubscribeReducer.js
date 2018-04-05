import {
  SUBSCRIBE_USER_SUCCESS,
  SUBSCRIBE_USER_FAIL,
  UPDATE_EMAIL_FORM,
  SUBSCRIBE_USER_DECLINE
} from '../actions/types';

const INITIAL_STATE = {
  form: {
    email: '',
  },
  subscriber: {
    status: null,
    email: ''
  }
};

export default (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case SUBSCRIBE_USER_SUCCESS:
      return {
        ...state,
        subscriber: action.subscriber,
      };
    case SUBSCRIBE_USER_FAIL:
      return {
        ...state,
        subscriber: action.subscriber,
      };
    case SUBSCRIBE_USER_DECLINE:
      return {
        ...state,
        subscriber: action.subscriber
      }
    case UPDATE_EMAIL_FORM:
      return {
        ...state,
        form: action.form,
      };
    default:
      return state;
  }
};