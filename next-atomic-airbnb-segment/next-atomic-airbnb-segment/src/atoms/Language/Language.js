import React from 'react';

import styles from './Language.module.css';

const Language = ({children, onClickHandler}) =>(
  <button className = {styles.button} 
    onClick = {(e) => onClickHandler(e)}>
      {children}
  </button>
);

export default Language;