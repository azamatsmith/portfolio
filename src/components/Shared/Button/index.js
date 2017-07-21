import React from 'react';
// import PropTypes from 'prop-types';
import './Button.css'

// const propTypes = {
// };

// const defaultProps = {
// };

const Button = (props) => {
  const { text, ...rest } = props;

  return (
    <button className="Button" { ...rest }>
      { text }
    </button>
  );
};

// Button.propTypes = propTypes;
// Button.defaultProps = defaultProps;

export default Button;
