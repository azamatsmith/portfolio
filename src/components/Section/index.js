import React from 'react';
import PropTypes from 'prop-types';
import './Section.css'

const propTypes = {
  children: PropTypes.element,
  title: PropTypes.string
};

const defaultProps = {
  title: ''
};

export default function Section({ children, title }) {

  const thisTitle = title ? <h3 className="Section-title">{ title }</h3> : null;

  return (
    <div className="Section">
      { thisTitle }
      { children }
    </div>
  );
}

Section.propTypes = propTypes;
Section.defaultProps = defaultProps;

