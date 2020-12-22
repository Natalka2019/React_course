import React from 'react';

import styles from './SearchButton.module.css';

const SearchButton = ({children}) => {

  return (

    <p className = {styles.SearchButton}>{children}</p>

  )
};

export default SearchButton;