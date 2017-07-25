import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Social from '../Social';

import running from '../images/running.jpg';
import code from '../images/code.svg';
import bike from '../images/bike.svg';
import book from '../images/book.svg';

import './Header.css'


export default class Header extends Component {

  static propTypes = {
    text: PropTypes.string
  }

  static defaultProps = {

  }

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
        <img
          alt="portrait"
          className="Pics-profile"
          src={ running }
        />
        <div className="Pics-icon">
          <img
            alt="icon code"
            src={ code }
          />
        </div>
        <div className="Pics-icon">
          <img
            alt="icon book"
            src={ book }
          />
        </div>
        <div className="Pics-icon">
          <img
            alt="icon bike"
            src={ bike }
          />
        </div>
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
