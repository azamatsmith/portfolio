import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Email, Github, Linkedin, Twitter} from '../';
import './Icon.css';

class Icon extends Component {
  static propTypes = {
    icon: PropTypes.string.isRequired,
    link: PropTypes.string,
    target: PropTypes.string,
  };

  static defaultProps = {
    link: '#',
    target: '_blank',
  };

  // PRIVATE

  _getIcon = () => {
    const {icon} = this.props;
    const validIcons = {
      email: <Email />,
      github: <Github />,
      linkedin: <Linkedin />,
      twitter: <Twitter />,
    };
    const valid = Object.keys(validIcons);

    if (valid.indexOf(icon) >= 0) {
      return validIcons[icon];
    }

    console.log('icon not valid');
    return null;
  };

  render() {
    const {link, target} = this.props;
    console.log('should render', this._getIcon());
    return (
      <a className="Icon" href={link} rel="nofollow" target={target}>
        {this._getIcon()}
      </a>
    );
  }
}

export default Icon;
