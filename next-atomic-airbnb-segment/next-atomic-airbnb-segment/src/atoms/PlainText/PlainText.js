import React from 'react';

import styles from './PlainText.module.css';

const PlainText = ({children}) => {

  return (

    <p className = {styles.PlainText}>{children}</p>

  )
};

export default PlainText;