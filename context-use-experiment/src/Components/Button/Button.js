import React from 'react';
import PropTypes from 'prop-types';

import './Button.css';

const Button = (props) => {

  const { className, eventOnClick, title } = props;

  return (
    <div className = { `buttonStandard ${className}` } onClick = {eventOnClick}>{title}</div>
  )
}

Button.propTypes = {

  className: PropTypes.string.isRequired,
  eventOnClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired 

}

export default Button;
