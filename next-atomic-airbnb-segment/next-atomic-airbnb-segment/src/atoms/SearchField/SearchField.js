import React from 'react';

import styles from './SearchField.module.css';

const SearchField = ({children}) => {

  return (

    <p className = {styles.SearchField}>{children}</p>

  )
  
};

export default SearchField;