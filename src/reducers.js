import {combineReducers} from 'redux';
import {firebaseStateReducer} from 'react-redux-firebase';
import Main from './reducers/reducer_main';

const rootReducer = combineReducers({
  firebase: firebaseStateReducer,
	app: Main,

});

export default rootReducer;
