import { combineReducers } from 'redux';
import authReducer from './reducers/authReducer';
import booksReducer from './reducers/booksReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  books: booksReducer,
});

export default rootReducer;
