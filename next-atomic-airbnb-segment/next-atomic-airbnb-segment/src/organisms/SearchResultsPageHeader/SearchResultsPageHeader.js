import React, {useContext, useMemo} from 'react';
import Link from 'next/link';

import styles from './SearchResultsPageHeader.module.css';

import {SearchResultsContext} from '../../../AppContext';
import {SearchFields} from '../../molecules';

const SearchResultsPageHeader = () => {

  const {destination, showLoading, checkInShort, checkOutShort, adult} = useContext(SearchResultsContext);

  const memoizedSearchFields = useMemo( () => <SearchFields destination = {destination} checkInShort = {checkInShort} checkOutShort = {checkOutShort} adult = {adult}/>,
  [destination, checkInShort, checkOutShort, adult]);
  
  return (

    <header className = {styles.header}>
      {showLoading && 
        <div className = {styles.loadingMessage}>Wait a minute. Information is loading ...</div>
      }
      {!showLoading && 
      <div className = {styles.SearchResultsPageHeader}>
        <div className = {styles.returnLinkContainer}>
          <Link to href = '/'>
            <div>
              <span className = {styles.returnArrow}>&lt;</span>
              <span className = {styles.returnText}>Return</span>
            </div>
          </Link>
        </div>
        <div className = {styles.searchFieldsContainer}>
          {memoizedSearchFields}
        </div>
      </div>
      }
    </header>

  )

};

export default SearchResultsPageHeader;