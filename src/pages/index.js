import React from 'react';

import {
  ComingSoon,
  ContactMe,
  Header,
  Footer,
  Layout,
  Projects,
  Skills,
  Work,
} from 'components';

function Portfolio() {
  return (
    <Layout>
      <ComingSoon />
      <div className="Portfolio relative">
        <Header />
        <div className="mw9 mh3 mh5-l">
          <Work />
          <Projects />
          <Skills />
          <ContactMe />
        </div>
        <Footer />
      </div>
    </Layout>
  );
}

export default Portfolio;
