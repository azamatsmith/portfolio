import React from 'react';
import PropTypes from 'prop-types';
import './Input.css'

const propTypes = {
  label: PropTypes.string
};

const defaultProps = {
  label: ''
};

const Input = (props) => {
  const { label, ...rest } = props;

  return (
    <div className="Input">
      <label className="Input-label">
        { label }
      </label>
      <input
        className="Input-input"
        { ...rest }
      />
    </div>
  );
};

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;

export default Input;
