import React, {useContext, useMemo} from 'react';
import {withScriptjs, withGoogleMap, GoogleMap, Marker} from 'react-google-maps';
import {MarkerClusterer} from 'react-google-maps/lib/components/addons/MarkerClusterer';

import {SearchResultsContext} from '../../../AppContext';


const Map = withScriptjs(withGoogleMap(() => {

  const {propertiesList} = useContext(SearchResultsContext);

  return (
    <div className = 'Map'>
    <GoogleMap 
      default zoom = {10}
      defaultCenter = {{lat: 40.704175, lng: -73.937509}}
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