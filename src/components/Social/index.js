import React, { Component } from 'react';
import Github from './components/Github';
import Linkedin from './components/Linkedin';
import Twitter from './components/Twitter';

import './Social.css';


export default class Social extends Component {

  state = {
    twitterHovered: false,
    linkedinHovered: false,
    githubHovered: false,
  }

  render() {
    const {
      twitterHovered,
      linkedinHovered,
      githubHovered,
    } = this.state;

    return (
      <div className="Social">
        <div
          className="Social-icon-wrapper"
          onMouseEnter={ () => this.setState({ linkedinHovered: true })}
          onMouseLeave={ () => this.setState({ linkedinHovered: false })}
        >
          <a
            href="https://www.linkedin.com/in/azamatsmith"
            rel="nofollow"
            target="_blank"
          >
            <Linkedin hovered={ linkedinHovered} />
          </a>
        </div>

        <div
          className="Social-icon-wrapper"
          onMouseEnter={ () => this.setState({ githubHovered: true })}
          onMouseLeave={ () => this.setState({ githubHovered: false })}
        >
          <a
            href="https://github.com/azamatsmith"
            rel="nofollow"
            target="_blank"
          >
            <Github hovered={ githubHovered}/>
          </a>
        </div>

        <div
          className="Social-icon-wrapper"
          onMouseEnter={ () => this.setState({ twitterHovered: true })}
          onMouseLeave={ () => this.setState({ twitterHovered: false })}
        >
          <a
            href="https://twitter.com/azamatsmith"
            rel="nofollow"
            target="_blank"
          >
            <Twitter hovered={ twitterHovered } />
          </a>
        </div>
      </div>
    );
  }
}


