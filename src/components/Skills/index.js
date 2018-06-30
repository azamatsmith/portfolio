// Skills/index.js

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {firebase, helpers} from 'react-redux-firebase';
import {Section} from 'components';
import './Skills.css';
const {isLoaded, isEmpty, dataToJS} = helpers;

class Skills extends Component {
  render() {
    const {skills} = this.props;

    if (!isLoaded(skills)) {
      return <div />;
    }
    if (isEmpty(skills)) {
      return <div />;
    }

    const skillsList = Object.keys(skills).map((skill, i) => (
      <li className="Skills-list-item" key={`${skill}-${i}`}>
        {skills[skill]}
      </li>
    ));

    return (
      <Section title="Skills">
        <div className="Skills">
          <ul className="Skills-list">{skillsList}</ul>
        </div>
      </Section>
    );
  }
}

const data = firebase(['skills'])(Skills);

export default connect(({firebase}) => ({
  skills: dataToJS(firebase, 'skills'),
}))(data);
