import React from 'react';

import styles from './SearchFields.module.css';

import SearchButton from '../../atoms/SearchButton/SearchButton';
import SearchField from '../../atoms/SearchField/SearchField';

const SearchFields = ({destination, checkInShort, checkOutShort, adult}) => {
  
  return (

    <div className = {styles.SearchFields}>
      <SearchField>{destination}</SearchField>
      <hr></hr>
      <SearchField>{` ${checkInShort} - ${checkOutShort} `}</SearchField>
      <hr></hr>
      <SearchField>{` ${adult} guest`}</SearchField>
      <hr></hr>
      <SearchButton>Search</SearchButton>
    </div>
    
  )

};

export default SearchFields;