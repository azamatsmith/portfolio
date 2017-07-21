import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import { connect } from 'react-redux';
import { firebase, helpers } from 'react-redux-firebase';
const { dataToJS } = helpers;
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

import Button from '../Shared/Button';
import Input from '../Shared/Input';

class AddBook extends Component {

  state = {
    title: '',
    author: '',
    date: moment(),
  }

  _handleAdd = () => {
    const book = this.state;
    book.date = book.date.format();
    this.props.firebase.push('/books', book);
    this.setState({title: '', author: '', date: moment()});
  }

  render() {
    const {
      author,
      date,
      title
    } = this.state;

    return (
      <div className="AddBook admin-section">
        <h3 className="admin-title">Add Book</h3>

        <Input
          placeholder="Title"
          type="text"
          value={title}
          onChange={(e) => this.setState({title: e.target.value})}
        />

        <Input
          placeholder="Author"
          type="text"
          value={author}
          onChange={(e) => this.setState({author: e.target.value})}
        />

        <DatePicker
          selected={date}
          onChange={ (date) => this.setState({date})}
        />

        <Button
          onClick={ this._handleAdd }
          text="Add Book"
        />
      </div>
    );
  }
}

const data = firebase([
  'books'
])(AddBook);

export default connect(
  ({firebase}) => ({
    books: dataToJS(firebase, 'books')
  })
)(data);
