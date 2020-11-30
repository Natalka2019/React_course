import React from 'react';

import './Button.css';

const Button = (props) => {

  const { className, eventOnClick, title } = props;

  return (
    <div className = { `buttonStandard ${className}` } onClick = {eventOnClick}>{title}</div>
  )
}

export default Button;
