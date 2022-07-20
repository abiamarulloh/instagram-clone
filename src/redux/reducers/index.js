import {combineReducers} from 'redux';

import cartReducer from './cartReducer';
import loginReducer from './loginReducer';
import orderReducer from './orderReducer';

export default combineReducers({
  cart: cartReducer,
  login: loginReducer,
  order: orderReducer,
});
