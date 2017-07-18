// reducers/reducer_main.js

import {
  LOAD_PHOTOS,
  UPDATE_CURRENT_SCROLL
} from 'actions/index';

const INITIAL_STATE = {
  scroll: 0,
  photos: null,
};

export default function (state = INITIAL_STATE, action) {
	switch(action.type) {

		case LOAD_PHOTOS:
			return { ...state, photos: action.payload };

		case UPDATE_CURRENT_SCROLL:
			return { ...state, scroll: action.scroll };

		default:
			return state;
	}
}

