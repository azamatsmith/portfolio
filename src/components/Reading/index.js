// components/Reading.js

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { firebase, helpers } from 'react-redux-firebase';
const { isLoaded, isEmpty, dataToJS } = helpers;
import moment from 'moment';

import './Reading.css';


class Reading extends Component {

  static propTypes = {
    books: PropTypes.array.isRequired
  }

  static defaultProps = {
    books: []
  }

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
      <li
        className="Reading-list-item"
        key={ book.title }
      >
        <span className="Reading-list-item-title">
          <i>{ book.title }</i>
        </span>
        <span className="Reading-list-item-author">
          { book.author }
        </span>
        <span className="Reading-list-item-date">
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

