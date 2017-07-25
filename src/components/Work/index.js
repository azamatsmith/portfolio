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

    const sortedWork = Object.keys(work).map(key => work[key]).sort((a,b) => {
      if (a.index < b.index) {
        return 1;
      }
      if (a.index > b.index) {
        return -1;
      }
      return 0;
    });

    const workList = sortedWork.map(work => {
      return (
        <WorkItem key={ `work-${ work.index }` } data={ work } />
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


