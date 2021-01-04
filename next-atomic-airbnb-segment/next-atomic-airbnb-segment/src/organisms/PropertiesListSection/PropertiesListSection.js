import React, {useContext, useMemo} from 'react';
import Link from 'next/link';

import styles from './PropertiesListSection.module.css'

import {SearchResultsContext} from '../../../AppContext';
import {PropertyCard} from '../../molecules';

const PropertiesListSection = () => {

  const {destination, propertiesList, checkInShort, checkOutShort, adult} = useContext(SearchResultsContext);

  const memoizedPropertyCards = useMemo( () => propertiesList.map( (property) => (
    <PropertyCard
    {...property}
    key = {property.id} />
  )), [propertiesList]);

  return (
    <div className = {styles.PropertiesListSection}>
      <div className = {styles.listHeader}>
      <div className = {styles.listHeaderUpper}>
      <Link to href = '/'>
        <span className = {styles.returnArrow}>&lt;</span>
      </Link>
        <p>{`${propertiesList.length} stays`} &middot; {`${checkInShort} - ${checkOutShort}`} &middot; {`${adult} guest`}</p>
        </div>
        <h3>Stays in {destination}</h3>
      </div>
      <div className = {styles.list}>
        {memoizedPropertyCards}
        </div> 
    </div>
  )
};

export default PropertiesListSection;