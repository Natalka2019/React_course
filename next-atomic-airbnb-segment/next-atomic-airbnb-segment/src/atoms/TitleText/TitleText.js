import React from 'react';

import styles from './TitleText.module.css';

const TitleText = ({children}) => <p className = {styles.TitleText}>{children}</p>;

export default TitleText;