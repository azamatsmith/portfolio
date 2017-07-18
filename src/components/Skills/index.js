// Skills/index.js

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firebase, helpers } from 'react-redux-firebase';
const { isLoaded, isEmpty, dataToJS } = helpers;

class Skills extends Component {
  render() {
    const { skills } = this.props;
    if (!isLoaded(skills)) { return <div />; }
    if (isEmpty(skills)) { return <div />; }

    const skillsList = Object.keys(skills).map( (skill) => {
      return <li key={`${ skill }-${ skill }`}>{ skills[skill] }</li>;
    });

    return (
      <div className="row">
        <div className="col-sm-4 col-sm-offset-8">
          <ul className="list-unstyled">
            { skillsList }
          </ul>
        </div>
      </div>
    );
  }
}

const data = firebase([
  'skills',
])(Skills);

export default connect(
  ({ firebase }) => ({
    skills: dataToJS(firebase, 'skills')
  })
)(data);
