import React from 'react';
// import PropTypes from 'prop-types';

import running from '../images/running.jpg';

import './ContactMe.css';

const propTypes = {};

const defaultProps = {};

const ContactMe = props => (
  <div className="ContactMe">
    <img alt="portrait" className="ContactMe-img" src={running} />
  </div>
);

ContactMe.propTypes = propTypes;
ContactMe.defaultProps = defaultProps;

export default ContactMe;
