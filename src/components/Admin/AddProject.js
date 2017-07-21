// AddProject.js

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {firebase, helpers} from 'react-redux-firebase';
const {dataToJS} = helpers;

import Button from '../Shared/Button';
import Input from '../Shared/Input';
import TextArea from '../Shared/TextArea';

class AddProject extends Component {

  state = {
    title: '',
    org: '',
    summary: '',
    linkUrl: '',
    linkName: '',
  }

  // PRIVATE

  _handleAdd = () => {
    this.props.firebase.push('/projects', this.state);
    this.setState({ title: '', org: '', summary: '', linkUrl: '', linkName: '' });
  }

  render() {
    const {
      title,
      org,
      summary,
      linkUrl,
      linkName
    } = this.state;

    return (
      <div className="AddProject admin-section">
        <h3 className="admin-title">Add A Project</h3>

        <Input
          placeholder="Title"
          type="text"
          value={title}
          onChange={(e) => this.setState({title: e.target.value})}
        />

        <Input
          placeholder="Organization"
          type="text"
          value={org}
          onChange={(e) => this.setState({org: e.target.value})}
        />

        <Input
          placeholder="Link Url"
          type="text"
          value={linkUrl}
          onChange={(e) => this.setState({linkUrl: e.target.value})}
        />

        <Input
          placeholder="Link Name"
          type="text"
          value={linkName}
          onChange={(e) => this.setState({linkName: e.target.value})}
        />

        <TextArea
          placeholder="Summary"
          type="text"
          value={summary}
          onChange={(e) => this.setState({summary: e.target.value})}
        />

        <Button
          onClick={ this._handleAdd }
          text="Add Project"
        />

      </div>
    );
  }
}

const data = firebase([
  'projects'
])(AddProject);
export default connect(
  ({ firebase }) => ({
    projects: dataToJS(firebase, 'projects')
  })
)(data);
