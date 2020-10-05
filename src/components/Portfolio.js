import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateCurrentScroll } from 'actions';

import {
  ComingSoon,
  ContactMe,
  Header,
  Footer,
  NewReading,
  Projects,
  Skills,
  Work,
} from 'components';

class Portfolio extends Component {
  render() {
    return (
      <>
        <ComingSoon />
        <div className="Portfolio relative">
          <Header />

          <div className="mw9 mh3 mh5-l">
            <Work />

            <Projects />

            <Skills />

            <NewReading />

            <ContactMe />
          </div>
          <Footer />
        </div>
      </>
    );
  }
}

export default connect(null, { updateCurrentScroll })(Portfolio);
