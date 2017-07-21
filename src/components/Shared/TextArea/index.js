import React from 'react';
import PropTypes from 'prop-types';

import './TextArea.css'


const propTypes = {
  label: PropTypes.string
};

const defaultProps = {
  label: ''
};


const TextArea = (props) => {
  const { label, ...rest } = props;

  return (
    <div className="TextArea">
      <label className="TextArea-label">
        { label }
      </label>
      <textarea
        className="TextArea-input"
        { ...rest }
      />
    </div>
  );
};

TextArea.propTypes = propTypes;
TextArea.defaultProps = defaultProps;

export default TextArea;
