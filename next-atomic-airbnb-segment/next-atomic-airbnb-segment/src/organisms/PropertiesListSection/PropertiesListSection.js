import React, {useContext} from 'react';
import Link from 'next/link';

import styles from './PropertiesListSection.module.css'

import {SearchResultsContext} from '../../../AppContext';
import PropertyCard from '../../molecules/PropertyCard/PropertyCard';

const PropertiesListSection = () => {

  const {destination, propertiesList, checkInShort, checkOutShort, adult} = useContext(SearchResultsContext);

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
        {propertiesList.map( (property, index) => (
            <PropertyCard
            {...property}
            key = {property.id} />
          ))}
        </div> 
    </div>
  )
};

export default React.memo(PropertiesListSection);