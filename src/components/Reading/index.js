// components/Reading.js

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firebase, helpers } from 'react-redux-firebase';
const { isLoaded, isEmpty, dataToJS } = helpers;
import moment from 'moment';

class Reading extends Component {

  // PRIVATE
  _sortBooks = (books) => {
    const bookList = Object.keys(books).map(key => books[key]);

    return bookList.sort((a,b) => (
      new Date(b.date) - new Date(a.date)
    ));
  }

  _buildBookList = () => {
    const { books } = this.props;
    const sortedBooks = this._sortBooks(books);

    return sortedBooks.map(book => (
      <li key={ book.title }>
        <span>
          { book.author }
        </span>
        <span>
          <i>{ book.title }</i>
          ({ moment(book.date).format('MMM YYYY') })
        </span>
      </li>
    ));
  }

  render() {
    const { books } = this.props;

    if (!isLoaded(books)) { return <div />; }

    if (isEmpty(books)) { return <div />; }

    const bookList = this._buildBookList();

    return (
      <div className="Books">
        <ul className="Books-list">
          { bookList }
        </ul>
      </div>
    );
  }
}

const data = firebase([
  'books'
])(Reading);

export default connect(
  ({firebase}) => ({
    books: dataToJS(firebase, 'books')
  })
)(data);
