import React, {useContext} from 'react';

import styles from './SearchPageHeader.module.css';

import {SearchResultsContext} from '../../../AppContext';
import {Logo, Redirect, Language, ButtonUser} from '../../atoms';
import {SearchPageHeaderCenter} from '../../molecules';

const SearchPageHeader = () => {

  const {modalHandler, signInHandler, showSignIn} = useContext(SearchResultsContext);

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
        <ButtonUser onClickHandler = {signInHandler}>User</ButtonUser>
      </div>
      {showSignIn &&
        <div className = {styles.login} onClick = {e => e.stopPropagation()}>
          <ul>
            <li><a href = '#'>Sign Up</a></li>
            <li><a href = '#'>log In</a></li>
          </ul>
          <div className = {styles.horizontalLine}/>
          <ul>
            <li><a href = '#'>Host your home</a></li>
            <li><a href = '#'>Host an experience</a></li>
            <li><a href = '#'>Help</a></li>
          </ul>
        </div>
      } 
    </div>
  )

};

export default SearchPageHeader;