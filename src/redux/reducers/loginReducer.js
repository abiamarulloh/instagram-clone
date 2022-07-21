import {LOGIN} from '../actions/types';

const initialState = {
  email: '',
  password: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return action.payload;
    default:
      return state;
  }
};
