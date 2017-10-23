import {combineReducers} from 'redux';
import {firebaseStateReducer} from 'react-redux-firebase';
import BooksReducer from './reducers/BooksReducer';

const rootReducer = combineReducers({
  firebase: firebaseStateReducer,
  books: BooksReducer
});

export default rootReducer;
