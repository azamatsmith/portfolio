// components/Work/index.js

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firebase, helpers } from 'react-redux-firebase';
const { isLoaded, isEmpty, dataToJS } = helpers;
import WorkItem from './WorkItem';
import WorkPlaceHolder from './WorkPlaceHolder';

import './Work.css';

class WorkList extends Component {
  render() {
    const { work } = this.props;

    if (!isLoaded(work)) {
      return (
        <div>
          <WorkPlaceHolder />
          <WorkPlaceHolder />
          <WorkPlaceHolder />
        </div>
      );
    }

    if (isEmpty(work)) { return <div />; }

    const workList = Object.keys(work).map(key => {
      return (
        <WorkItem key={ key } data={ work[key] } />
      );
    });

    return (
      <div className="Work">
        <ul>
          { workList }
        </ul>
      </div>
    );
  }
}

const data = firebase([
  'work'
])(WorkList);

export default connect(
  ({ firebase }) => ({
    work: dataToJS(firebase, 'work')
  })
)(data);


