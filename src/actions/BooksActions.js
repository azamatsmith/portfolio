const updateBooks = (books) => ({
  type: 'UPDATE_BOOKS',
  books
});

export const getBooks = () => dispatch => {
  const url = 'https://tw-portfolio-mts.herokuapp.com/';
  fetch(url)
    .then(res => res.json())
    .then(json => {
      return dispatch(updateBooks(json));
    })
    .catch(err => console.log('error getting books: ', err));
}
