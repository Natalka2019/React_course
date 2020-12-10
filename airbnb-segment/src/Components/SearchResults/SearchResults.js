import React, {useContext} from 'react';

import './SearchResults.css';

import {SearchResultsContext} from '../../AppContext';
import PropertiesListSection from '../PropertiesListSection/PropertiesListSection';
import Map from '../Map/Map';

const SearchResults = () => {

  const {destination, showLoading} = useContext(SearchResultsContext);
  
  return (
    <div>
      <header>
      {showLoading && 
          <div className = 'loadingMessage'>Wait a minute. Information is loading ...</div>
          }
        <div className = 'searchPageHeader'>{destination}</div>
      </header>
      <div className = 'SearchResults'>
        <div className = 'propertiesListSectionContainer'>
          <PropertiesListSection />
        </div>
        <div className = 'mapContainer'>
          <Map 
            googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: `100%`}} />}
            containerElement={<div style={{ height: `90vh`}} />}
            mapElement={<div style={{ height: `100%`}} />} />
          </div>
      </div>
    </div>
  )

}

export default SearchResults;