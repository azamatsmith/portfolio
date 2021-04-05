import React from 'react';

// import ComingSoon from 'components/ComingSoon';
import ContactMe from 'components/ContactMe';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Layout from 'components/Layout';
import Projects from 'components/Projects';
import Skills from 'components/Skills';
import Work from 'components/Work';

function Portfolio() {
  return (
    <Layout>
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
