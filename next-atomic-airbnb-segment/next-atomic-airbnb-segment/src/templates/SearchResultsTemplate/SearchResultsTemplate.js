import React from 'react';

import styles from './SearchResultsTemplate.module.css';

import {SearchResultsPageHeader, PropertiesListSection, Map} from '../../organisms';

const SearchResultsTemplate = () => {
  
  return (

    <>
      <header className = {styles.Header}>
        <SearchResultsPageHeader />
      </header>
      <div className = {styles.propertiesListSectionContainer}>
        <PropertiesListSection />
      </div>
      <div className = {styles.mapContainer}>
        <Map 
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%`}} />}
          containerElement={<div style={{ height: `90vh`}} />}
          mapElement={<div style={{ height: `100%`}} />} />
      </div>

    </>

  )

};

export default SearchResultsTemplate;