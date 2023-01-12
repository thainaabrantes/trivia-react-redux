import { ADD_SETTINGS } from '../actions';

const INITIAL_STATE = {
  name: '',
  email: '',
};
const playerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ADD_SETTINGS: {
    return {
      ...state,
      ...action.payload,
    };
  }
  default:
    return state;
  }
};

export default playerReducer;
