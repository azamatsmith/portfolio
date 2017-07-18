// components/Project/index.js

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firebase, helpers } from 'react-redux-firebase';
const { isLoaded, isEmpty, dataToJS } = helpers;

import ProjectItem from './ProjectItem';

import './Projects.css';

class Projects extends Component {

  render() {
    const { projects } = this.props;

    if (!isLoaded(projects)) { return <div />; }

    if (isEmpty(projects)) { return <div />; }

    const projectList = Object.keys(projects).map(key => {
      return (
				<ProjectItem data={projects[key]} key={key} />
      );
    });

    return (
      <div className="Projects">
        <ul className="Projects-list">
          { projectList }
        </ul>
      </div>
    );
  }
}

const data = firebase([
  'projects'
])(Projects);

export default connect(
  ({ firebase }) => ({
    projects: dataToJS(firebase, 'projects')
  })
)(data);

