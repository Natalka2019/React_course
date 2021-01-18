import React, {useContext} from 'react';
import {withScriptjs, withGoogleMap, GoogleMap, InfoWindow } from 'react-google-maps';
import { MarkerWithLabel} from 'react-google-maps/lib/components/addons/MarkerWithLabel';

import {SearchResultsContext} from '../../../AppContext';

import styles from './Map.module.css';


const Map = withScriptjs(withGoogleMap(() => {

  const {propertiesList, propertySelected, markerSelectedHandler, showInfoWindow, infoWindowID  } = useContext(SearchResultsContext);
  const defaultCenter = {
    lat: propertiesList[12].coordinate.lat,
    lng: propertiesList[12].coordinate.lon
  }
  
  const selectedProperty = propertiesList.filter(property => property.id == infoWindowID)[0];

  console.log(infoWindowID);
  console.log(defaultCenter);
  console.log(showInfoWindow);
  console.log(selectedProperty);

//   let infoWindowID = '';

//   const markerSelectedHandler = (e) => {

//     // console.log(e);
//     //console.log(e.target.dataset.id);
//     console.log(e.currentTarget);
    
//     console.log(e.currentTarget.title);
//     console.log(e.target);
    
//     e.preventDefault();

//     return infoWindowID = e.currentTarget.title;



//     //setInfoWindowId(e.currentTarget.id);
//     //setShowInfo(true);

// }



  const icon = {
    url: " ",
    scaledSize: new google.maps.Size(90, 42)
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
            // <div key = {property.id} id = {property.id} onClick = { (e) => markerSelectedHandler(e) }>
              <MarkerWithLabel
                key = {property.id}
                position = {{lat: property.coordinate.lat, lng: property.coordinate.lon}}
                labelAnchor = {new google.maps.Point(0, 0)}
                labelClass = {property.id == propertySelected? styles.labelSelected : styles.label } 
                icon = {icon}
                title={property.id.toString()}
                onClick = { (e) => markerSelectedHandler(e) }
              >
                <div>{property.ratePlan.price.current}</div>
              </MarkerWithLabel>
            //</div>
          )
        )}  
        {showInfoWindow &&
          (
            <InfoWindow
            position={defaultCenter}
            clickable={true}
            //onCloseClick={() => setSelected({})}
          >
            <p>{selectedProperty.name}</p>
          </InfoWindow>
          )
        }  
      </div>
    </GoogleMap>
    </div>
  )
}));

export default Map;