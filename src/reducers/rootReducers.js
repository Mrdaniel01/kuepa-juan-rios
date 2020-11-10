import { combineReducers } from 'redux';
import { clientReducer } from './clientReducer';
import { userReducer } from './userReducer';

export const rootReducer = combineReducers({
  client: clientReducer,
  user: userReducer,
});