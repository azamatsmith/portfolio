import React from 'react';
// import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

const seo = {
  description:
    'Matt Smith | I am a freelance full stack engineer specializing in React and Gatsby located in Tucson, AZ.',
  image: '',
  title: 'Matthew Smith | Full-Stack Engineer',
};
function SEO() {
  return (
    <Helmet defer={false} title={seo.title}>
      <meta name="description" content={seo.description} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@azamatsmith" />
      <meta name="twitter:domain" content="bikeandcode.com" />
      <meta name="twitter:image" content={seo.image} />
      <meta name="twitter:site" content="@azamatsmith" />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:title" content={seo.title} />

      {/* Open graph tags */}
      <meta property="og:type" content="website" />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:url" content={'https://bikeandcode.com'} />
      <meta property="og:title" content={seo.title} />
    </Helmet>
  );
}

SEO.propTypes = {};

SEO.defaultProps = {};

export default SEO;
