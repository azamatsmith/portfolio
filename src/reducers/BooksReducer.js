const initialState = {
  books: []
};

const BooksReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'UPDATE_BOOKS':
      return { ...state, books: action.books };
    default:
     return state;
  }
}

export default BooksReducer;
