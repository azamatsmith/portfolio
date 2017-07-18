import React, {Component} from 'react';
import {connect} from 'react-redux';
import {firebase, helpers} from 'react-redux-firebase';
const {dataToJS} = helpers;

class AddWork extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      org: '',
      dates: '', 
      summary: ''
    };
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd() {
    const work = this.state; 
    this.props.firebase.push('/work', work);
    this.setState({title: '', org: '', dates: '', summary: ''});
  }

  render() {
    const {title, org, dates, summary} = this.state;
    return (
      <div>  
        <h3>Add Work</h3>
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
        <input 
          placeholder="Dates" 
          type="text" 
          value={dates} 
          onChange={(e) => this.setState({dates: e.target.value})} 
        />
        <textarea 
          placeholder="Summary" 
          type="text" 
          value={summary} 
          onChange={(e) => this.setState({summary: e.target.value})} 
        />
        <button onClick={() => this.handleAdd()}>Add Work</button>
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
