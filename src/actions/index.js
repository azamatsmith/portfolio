// actions/index.js

export const LOAD_PHOTOS = 'LOAD_PHOTOS';
export const UPDATE_CURRENT_SCROLL = 'UPDATE_CURRENT_SCROLL';

export const loadPhotos = (payload) => ({
		type: LOAD_PHOTOS,
		payload,
});

export const updateCurrentScroll = (scroll) => ({
  type: UPDATE_CURRENT_SCROLL,
  scroll,
});
