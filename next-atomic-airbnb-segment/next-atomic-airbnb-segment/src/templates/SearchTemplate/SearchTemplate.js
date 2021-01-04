import React, {useContext} from 'react';

import styles from './SearchTemplate.module.css';

import {SearchPageHeader, SearchArea} from '../../organisms';
import {Modal} from '../../molecules';
import {SearchResultsContext} from '../../../AppContext';

const SearchTemplate = () => {

  const {showModal, modalHandler} = useContext(SearchResultsContext);

  return (

    <div>
      <Modal showModal = {showModal} modalHandler = {modalHandler}/>
      <header className = {styles.header}>
        <SearchPageHeader/>
      </header>
      <main className = {styles.main}>
        <SearchArea/>
      </main>
    </div>

  )

};

export default SearchTemplate;