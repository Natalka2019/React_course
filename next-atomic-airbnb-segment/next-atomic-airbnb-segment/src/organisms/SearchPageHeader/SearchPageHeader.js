import React, {useContext} from 'react';

import styles from './SearchPageHeader.module.css';

import {SearchResultsContext} from '../../../AppContext';
import {Logo, Redirect, Language} from '../../atoms';
import {SearchPageHeaderCenter} from '../../molecules';

const SearchPageHeader = () => {

  const {modalHandler} = useContext(SearchResultsContext);

  return (
    <div className = {styles.container}>
      <div className = {styles.leftContainer}>
        <Logo>Logo</Logo>
      </div>
      <div className = {styles.centerContainer}>
        <SearchPageHeaderCenter/>
      </div>
      <div className = {styles.rightContainer}>
        <Redirect>Become a host</Redirect>
        <Language onClickHandler = {modalHandler} >En</Language>
      </div> 
    </div>
  )

};

export default SearchPageHeader;