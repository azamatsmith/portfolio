import React from 'react';
// import PropTypes from 'prop-types';
import Social from '../Social';

import running from '../images/running.jpg';

import './ContactMe.css';

const propTypes = {};

const defaultProps = {};

const ContactMe = props => (
  <div className="ContactMe">
    <img alt="portrait" className="ContactMe-img" src={running} />
    <p>
      I'm currently Freelancing and accepting React and React Native projects.
      Some other things to say
    </p>
    <div className="ContactMe-social">
      <Social />
    </div>
  </div>
);

ContactMe.propTypes = propTypes;
ContactMe.defaultProps = defaultProps;

export default ContactMe;
