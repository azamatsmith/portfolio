import React from 'react';
// import PropTypes from 'prop-types';
import Social from './components/Social';

import running from '../images/running.jpg';

import './ContactMe.css';

const propTypes = {};

const defaultProps = {};

const ContactMe = props => (
  <div className="ContactMe">
    <div className="ContactMe-divider" />
    <h2 className="ContactMe-title">Contact Me</h2>
    <div className="ContactMe-img-wrapper">
      <img alt="portrait" className="ContactMe-img" src={running} />
    </div>
    <div className="ContactMe-right">
      <p className="ContactMe-text">
        I'm currently Freelancing and accepting React and React Native projects.
      </p>
    </div>
    <div className="ContactMe-social">
      <Social />
    </div>
  </div>
);

ContactMe.propTypes = propTypes;
ContactMe.defaultProps = defaultProps;

export default ContactMe;
