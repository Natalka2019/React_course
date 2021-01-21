import React from 'react';

import styles from './SearchFields.module.css';

import {SearchButton,SearchField} from '../../atoms';

const SearchFields = ({destination, checkInShort, checkOutShort, adult}) => (

    <div className = {styles.SearchFields}>
      <SearchField>{destination}</SearchField>
      <div className = {styles.horizontalLine}/>
      <SearchField>{` ${checkInShort} - ${checkOutShort} `}</SearchField>
      <div className = {styles.horizontalLine}/>
      <SearchField>{` ${adult} guest`}</SearchField>
      <div className = {styles.horizontalLine}/>
      <SearchButton>Search</SearchButton>
    </div>
    
);

export default SearchFields;