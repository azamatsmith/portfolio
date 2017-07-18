// components/Reading.js

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firebase, helpers } from 'react-redux-firebase';
const { isLoaded, isEmpty, dataToJS } = helpers;
import moment from 'moment';

class Reading extends Component {

  _sortBooks = (books) => {
    const bookList = Object.keys(books).map(key => {
      return books[key];
    });

    return bookList.sort((a,b) => {
      return new Date(b.date) - new Date(a.date)
    });
  }

  _buildBookList = () => {
    const { books } = this.props;
    const sortedBooks = this._sortBooks(books);

    return sortedBooks.map(book => {
      return (
        <li key={book.title}>
					<span>
						{book.author}
					</span>
					<span>
						<i>{book.title}</i>
						({ moment(book.date).format('MMM YYYY') })
					</span>
        </li>
      );
    });
  }

  render() {
    const { books } = this.props;

    if (!isLoaded(books)) { return <div />; }

    if (isEmpty(books)) { return <div />; }

    const bookList = this._buildBookList();

    return (
      <div className="row">
        <div className="col-sm-12 col-sm-offset-8">
          <ul className="list-unstyled">
            { bookList }
          </ul>
        </div>
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
