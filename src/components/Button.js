import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ text, type }) => (
  <button className={`calc-button ${type}`} type="button">
    {text}
  </button>
);

Button.propTypes = {
  text: PropTypes.string.isRequired, // Validate "text" prop as a required string
  type: PropTypes.string, // Validate "type" prop as an optional string
};

Button.defaultProps = {
  type: '', // Provide a default value for "type" prop
};

export default Button;
