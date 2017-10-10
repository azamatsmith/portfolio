import React, {Component} from 'react';
import {connect} from 'react-redux';
import {updateCurrentScroll} from 'actions';

import Header from './Header';
import Work from './Work';
import Projects from './Projects';
import Skills from './Skills';
import Reading from './Reading';
import ContactMe from './ContactMe';

import Footer from './Footer/';
import Section from './Section';

class Portfolio extends Component {
  // componentDidMount() {
  //   window.addEventListener('scroll', this._handleScroll);
  // }

  // componentWillUnmount() {
  //   window.removeEventListener('scroll', this._handleScroll);
  // }

  // //PRIVATE

  // _handleScroll = e => {
  //   // console.log('scrolled height', e.srcElement.body.scrollHeight);
  //   // console.log('scrolled top', e.srcElement.body.scrollTop);
  //   // console.log('scrolled', e);
  // };

  render() {
    return (
      <div className="Portfolio">
        <Header />

        <Section title="Work">
          <Work />
        </Section>

        <Section title="Projects">
          <Projects />
        </Section>

        <Section title="Skills">
          <Skills />
        </Section>

        <Section title="Reading">
          <Reading />
        </Section>

        <Section>
          <ContactMe />
        </Section>

        <Footer />
      </div>
    );
  }
}

export default connect(null, {updateCurrentScroll})(Portfolio);
