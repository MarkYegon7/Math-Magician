import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ text, type }) => (
  <button className={`calc-button ${type}`} type="button">
    {text}
  </button>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string,
};

Button.defaultProps = {
  type: '',
};

export default Button;
