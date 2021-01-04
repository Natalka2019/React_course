import React from 'react';

import styles from './SearchButton.module.css';

const SearchButton = ({children, onClickHandler}) => (
  <p className = {styles.SearchButton}
    onClick = {(e) => onClickHandler(e)}>
    {children}
  </p>);

export default SearchButton;