import {LOGIN} from './types';

export const loginAction = data => dispatch => {
  dispatch({
    type: LOGIN,
    payload: data,
  });
};
