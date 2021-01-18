import React from 'react';

import styles from './ButtonUser.module.css';

const ButtonUser = ({children, onClickHandler}) => (
  <button className = {styles.ButtonUser}
    onClick = {(e) => onClickHandler(e)}>
    {children}
  </button>
);

export default ButtonUser;