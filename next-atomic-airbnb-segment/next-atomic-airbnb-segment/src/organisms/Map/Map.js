import React, {useContext, useMemo} from 'react';
import {withScriptjs, withGoogleMap, GoogleMap, Marker} from 'react-google-maps';
import {MarkerClusterer} from 'react-google-maps/lib/components/addons/MarkerClusterer';

import {SearchResultsContext} from '../../../AppContext';


const Map = withScriptjs(withGoogleMap(() => {

  const {propertiesList} = useContext(SearchResultsContext);
  const defaultCenter = {
    lat: propertiesList[0].coordinate.lat,
    lng: propertiesList[0].coordinate.lon
  }

  return (
    <div className = 'Map'>
    <GoogleMap 
      default zoom = {10}
      defaultCenter = {defaultCenter}
    >
      <MarkerClusterer>
        {propertiesList.map(
          property => (
            <Marker
              key = {property.id}
              position = {{lat: property.coordinate.lat, lng: property.coordinate.lon}}
             />
          )
        )}      
      </MarkerClusterer>
    </GoogleMap>
    </div>
  )
}));

export default Map;