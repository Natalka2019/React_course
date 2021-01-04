import React from 'react';

import styles from './CloseButton.module.css';

const CloseButton = ({onClickHandler}) => <button className = {styles.button} onClick = {(e) => onClickHandler(e)}>x</button>;

export default CloseButton;