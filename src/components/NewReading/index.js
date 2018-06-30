import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getBooks} from 'actions';
import Image from './components/Image';
import './NewReading.css';

class NewReading extends Component {
  static propTypes = {books: PropTypes.array};

  static defaultProps = {books: []};

  componentDidMount() {
    this.props.getBooks();
  }

  // PRIVATE

  _renderBooks = () => {
    const {books} = this.props;
    if (!books.length) {
      return null;
    }

    const re = /audible/;
    return this.props.books
      .filter(book => re.test(book.url.expanded_url))
      .map(book => <Image key={book.id} {...book} />);
  };

  render() {
    return <div className="NewReading">{this._renderBooks()}</div>;
  }
}

const mapStateToProps = ({books}) => ({books: books.books});

export default connect(
  mapStateToProps,
  {getBooks}
)(NewReading);
