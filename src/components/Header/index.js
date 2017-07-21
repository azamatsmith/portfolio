import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Social from '../Social';

import './Header.css'

const propTypes = {
  text: PropTypes.string
};

const defaultProps = {

};

export default class Header extends Component {

  state = {
    headerClass: 'Header'
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ headerClass: 'Header post' });
    }, 4000);
  }

  // PRIVATE

  _renderPics = () => {
    return (
      <div className="Pics">
        <div className="Pics-profile"></div>
        <div className="Pics-icon"></div>
        <div className="Pics-icon"></div>
        <div className="Pics-icon"></div>
      </div>
    );
  }

  render() {
    const { headerClass } = this.state;
    const pics = headerClass === 'Header post' ? this._renderPics() : null;

    return (
      <div className={ headerClass }>

        <div className="Header-title">
          <div className="Header-title-wrapper">
            <p className="Header-title-p">I'm Matt.</p>
            <p className="Header-title-p">I build apps,</p>
            <p className="Header-title-p">read books,</p>
            <p className="Header-title-p">and ride bikes.</p>
          </div>
        </div>


        { pics }

        <div className="Header-social">
          <Social />
        </div>

      </div>
    );
  }
}

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;


