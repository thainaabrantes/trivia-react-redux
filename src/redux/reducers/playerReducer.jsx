import { ADD_SETTINGS, SAVE_USER, SUM_SCORE, ADD_TOTAL } from '../actions';

const INITIAL_STATE = {
  name: '',
  email: '',
  score: 0,
  questions: 0,
};
const playerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ADD_SETTINGS: {
    return {
      ...state,
      ...action.payload,
    };
  }
  case SAVE_USER: {
    return {
      ...state,
      name: action.payload[0],
      email: action.payload[1],
    };
  }
  case SUM_SCORE: {
    return {
      ...state,
      score: action.payload,
    };
  }
  case ADD_TOTAL: {
    return {
      ...state,
      score: action.payload,
      questions: action.payload,
    };
  }
  default:
    return state;
  }
};

export default playerReducer;
