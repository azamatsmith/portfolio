// AddProject.js

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {firebase, helpers} from 'react-redux-firebase';
const {dataToJS} = helpers;

class AddProject extends Component {
  constructor(props) {
    super(props);  
    this.state = { 
      title: '', 
      org: '', 
      summary: '', 
      linkUrl: '', 
      linkName: '', 
    };
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd() {
    this.props.firebase.push('/projects', this.state);
    this.setState({ title: '', org: '', summary: '', linkUrl: '', linkName: '' });
  }

  render() {
    const {title, org, summary, linkUrl, linkName} = this.state;
    return (
      <div>  
        <h3>Add A Project</h3>
        <input 
          placeholder="Title" 
          type="text" 
          value={title} 
          onChange={(e) => this.setState({title: e.target.value})} 
        />
        <input 
          placeholder="Organization" 
          type="text" 
          value={org} 
          onChange={(e) => this.setState({org: e.target.value})} 
        />
        <textarea 
          placeholder="Summary" 
          type="text" 
          value={summary} 
          onChange={(e) => this.setState({summary: e.target.value})} 
        />
        <input 
          placeholder="Link Url" 
          type="text" 
          value={linkUrl} 
          onChange={(e) => this.setState({linkUrl: e.target.value})} 
        />
        <input 
          placeholder="Link Name" 
          type="text" 
          value={linkName} 
          onChange={(e) => this.setState({linkName: e.target.value})} 
        />
        <button onClick={() => this.handleAdd()}>Add Project</button>
      </div>
    );  
  }
}

const data = firebase([
  'projects'
])(AddProject);
export default connect( 
  ({firebase}) => ({
    projects: dataToJS(firebase, 'projects')    
  })
)(data);
