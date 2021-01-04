import React, {useContext} from 'react';
import Link from 'next/link';

import styles from './SearchArea.module.css';

import {LocationSearchField, DateSearchField, GuestsNumberField} from '../../molecules';
import {SearchButton} from '../../atoms';
import {SearchResultsContext} from '../../../AppContext';

const SearchArea = () => {

  const {searchHandler} = useContext(SearchResultsContext);

  return (

    <div className = {styles.SearchArea}>
      <LocationSearchField/>
      <div className = {styles.horizontalLine}/>
      <DateSearchField label = 'Check In' name = 'checkIn'/>
      <div className = {styles.horizontalLine}/>
      <DateSearchField label = 'Check Out' name = 'checkOut'/>
      <div className = {styles.horizontalLine}/>
      <GuestsNumberField/>
      <SearchButton onClickHandler = {searchHandler} >
        <Link to href = '/SearchResults'>Search</Link>
      </SearchButton>
    </div>
    
  )
};

export default SearchArea;