// components/Project/index.js

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {firebase, helpers} from 'react-redux-firebase';
import {Section} from 'components';
import ProjectItem from './ProjectItem';
import './Projects.css';
const {isLoaded, isEmpty, dataToJS} = helpers;

class Projects extends Component {
  render() {
    const {projects} = this.props;

    if (!isLoaded(projects)) {
      return <div />;
    }

    if (isEmpty(projects)) {
      return <div />;
    }

    const projectList = Object.keys(projects).map(key => {
      return <ProjectItem data={projects[key]} key={key} />;
    });

    return (
      <Section title="Projects">
        <div className="Projects">
          <ul className="Projects-list">{projectList}</ul>
        </div>
      </Section>
    );
  }
}

const data = firebase(['projects'])(Projects);

export default connect(({firebase}) => ({
  projects: dataToJS(firebase, 'projects'),
}))(data);
