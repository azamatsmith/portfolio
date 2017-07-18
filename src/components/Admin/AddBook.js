import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import { connect } from 'react-redux';
import { firebase, helpers } from 'react-redux-firebase';
const { dataToJS } = helpers;
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';

class AddBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      author: '',
      date: moment(),
    };
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd() {
    const book = this.state;
    book.date = book.date.format();
    this.props.firebase.push('/books', book);
    this.setState({title: '', author: '', date: moment()});
  }

  render() {
    const {title, author, date} = this.state;
    return (
      <div>
        <h3>Add Book</h3>
        <input
          placeholder="Title"
          type="text"
          value={title}
          onChange={(e) => this.setState({title: e.target.value})}
        />
        <input
          placeholder="Author"
          type="text"
          value={author}
          onChange={(e) => this.setState({author: e.target.value})}
        />
        <DatePicker selected={date} onChange={(date) => this.setState({date})} />
        <button onClick={() => this.handleAdd()}>Add Book</button>
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
