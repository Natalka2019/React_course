import React from 'react';

import './Button.css';

class Button extends React.Component {

  render() {

    const { className, eventOnClick, title } = this.props;

    return (
      <div className = { `buttonStandard ${className}` } onClick = {eventOnClick}>{title}</div>
    )
  }
}

export default Button;
