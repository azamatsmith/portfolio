import React from 'react';
import PropTypes from 'prop-types';
import SEO from '../SEO';

import 'tachyons/css/tachyons.min.css';
import 'reset-css/reset.css';
import 'animate.css';
import './layout.css';

function Layout({ children }) {
  return (
    <div className="Layout">
      <SEO />
      {children}
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.any.isRequired,
};

Layout.defaultProps = {};

export default Layout;
