import React, {Component} from 'react';
import {Icon} from './components';
import './Social.css';

export default class Social extends Component {
  render() {
    return (
      <div className="Social">
        <Icon icon="email" link="mailto:azamatsmith@gmail.com" target="_top" />
        <Icon icon="linkedin" link="https://www.linkedin.com/in/azamatsmith" />
        <Icon icon="github" link="https://github.com/azamatsmith" />
        <Icon icon="twitter" link="https://twitter.com/azamatsmith" />
      </div>
    );
  }
}
