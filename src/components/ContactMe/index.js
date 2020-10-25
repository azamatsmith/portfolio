import React from 'react';
import Social from './components/Social';
import running from '../images/running.jpg';
import './ContactMe.css';

const ContactMe = () => (
  <div className="ContactMe">
    <div className="ContactMe-divider" />
    <h2 className="ContactMe-title">Contact Me</h2>
    <div className="ContactMe-img-wrapper">
      <img alt="portrait" className="ContactMe-img" src={running} />
    </div>
    <div className="ContactMe-social">
      <Social />
    </div>
  </div>
);

export default ContactMe;
