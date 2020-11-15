import React from 'react';
import './Button.css';

const Button = ({className, title, eventOnClick}) => {

return <div className = { `buttonStandard ${className}` } onClick = {eventOnClick}>{title}</div>
}

export default Button;