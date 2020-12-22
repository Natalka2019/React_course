import React from 'react';

import styles from './TitleText.module.css';

const TitleText = ({children}) => {

  return (

    <p className = {styles.TitleText}>{children}</p>

  )
};

export default TitleText;