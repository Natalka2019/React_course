import React, {useContext} from 'react';
import {withScriptjs, withGoogleMap, GoogleMap, InfoWindow } from 'react-google-maps';
import { MarkerWithLabel} from 'react-google-maps/lib/components/addons/MarkerWithLabel';

import {InfoWindowContent} from '../../molecules';

import {SearchResultsContext} from '../../../AppContext';

import styles from './Map.module.css';


const Map = withScriptjs(withGoogleMap(() => {

  const {propertiesList, propertySelected, markerSelectedHandler, showInfoWindow, infoWindowID, markerHoverHandler } = useContext(SearchResultsContext);
  
  const defaultCenter =  {
    lat: propertiesList[12].coordinate.lat,
    lng: propertiesList[12].coordinate.lon
  };
  
  const selectedMarker = propertiesList.filter(property => property.id == infoWindowID)[0];

  const icon = {
    url: " ",
    scaledSize: new google.maps.Size(0, 0)
  };


  return (
    <div className = 'Map'>
    <GoogleMap 
      default zoom = {10}
      defaultCenter = {defaultCenter}
    >
      <div>
        {propertiesList.map(
          property => (
            <MarkerWithLabel
              key = {property.id}
              position = {{lat: property.coordinate.lat, lng: property.coordinate.lon}}
              labelAnchor = {new google.maps.Point(0, 0)}
              labelClass = {property.id == propertySelected? styles.labelSelected : styles.label } 
              icon = {icon}
              title={property.id.toString()}
              onClick = { (e) => markerSelectedHandler(e) }
              onCloseClick= { (e) => markerSelectedHandler(e) }
              onMouseOver = {(e) => markerHoverHandler(e)}
            >
              <div title={property.id.toString()}>{property.ratePlan.price.current}</div>
            </MarkerWithLabel>
          )
        )}  
        {showInfoWindow &&
          (
            <InfoWindow
              position={ {lat: selectedMarker.coordinate.lat, lng: selectedMarker.coordinate.lon} }
              clickable={true}
          >
            <InfoWindowContent {...selectedMarker}></InfoWindowContent>
          </InfoWindow>
          )
        }  
      </div>
    </GoogleMap>
    </div>
  )
}));

export default Map;