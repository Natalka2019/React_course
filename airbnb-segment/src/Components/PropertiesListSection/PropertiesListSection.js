import React, {useContext} from 'react';

import './PropertiesListSection.css'

import {SearchResultsContext} from '../../AppContext';
import PropertyCard from '../PropertyCard/PropertyCard';

const PropertiesListSection = () => {

  const {destination, propertiesList} = useContext(SearchResultsContext);

  return (
    <div className = 'PropertiesListSection'>
      <div className = 'listHeader'>
        <p>{propertiesList.length} stays</p>
        <h3>Stays in {destination}</h3>
      </div>
      <div className = 'list'>
        {propertiesList.map( (property, index) => (
            <PropertyCard
            {...property}
            key = {property.id} />
          ))}
        </div> 
    </div>
  )
};

export default PropertiesListSection;