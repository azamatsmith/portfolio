import React from 'react';

import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();

  const link = (
    <a className="link" href="http://www.github.com/azamatsmith/portfolio">
      GitHub
    </a>
  );
  const mailTo = (
    <span className="Footer-copy">&copy; {year} Matthew Smith</span>
  );

  return (
    <div className="Footer">
      <p style={{ marginBottom: 8 }}>
        Made with Gatsby. Check it out on {link}.
      </p>
      <p>{mailTo}</p>
    </div>
  );
};

export default Footer;
