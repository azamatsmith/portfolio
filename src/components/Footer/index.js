import React from 'react'

import './Footer.css';

const Footer = () => {
	const year = new Date().getFullYear();

	const link = <a className="link" href="http://www.github.com/azamatsmith/portfolio">GitHub</a>;
	const mailTo = (
    <a
      className="link"
      href="mailto:azamatsmith@gmail.com"
    >
      &copy; { year } Matthew Smith
    </a>
  );

	return (
		<div className="Footer">
			<p>
				My Portfolio is made with React, Redux, and Firebase. Check it out on { link }.
			</p>

			<p>
        { mailTo }
      </p>
		</div>
	);
}

export default Footer;
