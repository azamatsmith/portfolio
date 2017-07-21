import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firebase, helpers } from 'react-redux-firebase';
const { dataToJS } = helpers;

import Button from '../Shared/Button';
import Input from '../Shared/Input';
import TextArea from '../Shared/TextArea';

class AddWork extends Component {

  state = {
    title: '',
    org: '',
    dates: '',
    summary: ''
  }

  // PRIVATE

  _handleAdd = () => {
    console.log('handling add');
    const work = this.state;
    this.props.firebase.push('/work', work);
    this.setState({
      title: '',
      org: '',
      dates: '',
      summary: ''
    });
  }

  render() {
    const {
      title,
      org,
      dates,
      summary
    } = this.state;

    return (
      <div className="AddWork admin-section">
        <h3 className="admin-title">Add Work</h3>

        <Input
          placeholder="Title"
          type="text"
          value={ title }
          onChange={ (e) => this.setState({ title: e.target.value }) }
        />

        <Input
          placeholder="Organization"
          type="text"
          value={org}
          onChange={(e) => this.setState({org: e.target.value})}
        />

        <Input
          placeholder="Dates"
          type="text"
          value={dates}
          onChange={(e) => this.setState({dates: e.target.value})}
        />

        <TextArea
          placeholder="Summary"
          rows="6"
          type="text"
          onChange={ (e) => this.setState({ summary: e.target.value }) }
          value={summary}
        />

        <Button
          onClick={ this._handleAdd }
          text="Add Work"
        />

      </div>
    );
  }
}

const data = firebase([
  'work'
])(AddWork);
export default connect(
  ({firebase}) => ({
    work: dataToJS(firebase, 'work')
  })
)(data);
