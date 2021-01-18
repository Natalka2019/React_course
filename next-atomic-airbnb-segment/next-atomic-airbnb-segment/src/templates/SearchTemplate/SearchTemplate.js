import React, {useContext} from 'react';

import styles from './SearchTemplate.module.css';

import {SearchPageHeader, SearchArea} from '../../organisms';
import {Modal} from '../../molecules';
import {Button} from '../../atoms';
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
        <div className = {styles.centralSection}>
          <div className = {styles.goNearContainer}>
            <p>Go Near</p>
          </div>
          <div className = {styles.exploreContainer}>
            <Button>Explore nearby stays</Button>
          </div>
        </div>
      </main>
    </div>

  )

};

export default SearchTemplate;