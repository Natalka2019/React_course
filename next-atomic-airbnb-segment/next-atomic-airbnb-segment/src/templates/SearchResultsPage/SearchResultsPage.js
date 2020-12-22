import React, {useContext} from 'react';

import styles from './SearchResultsPage.module.css';

import SearchResultsPageHeader from '../../organisms/SearchResultsPageHeader/SearchResultsPageHeader';
import PropertiesListSection from '../../organisms/PropertiesListSection/PropertiesListSection';
import Map from '../../organisms/Map/Map';

const SearchResultsPage = () => {
  
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

export default React.memo(SearchResultsPage);