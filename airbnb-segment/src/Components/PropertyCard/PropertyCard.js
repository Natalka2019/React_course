import React from 'react';

import './PropertyCard.css';

const PropertyCard = (props) => {

  const {thumbnailUrl, address, name, guestReviews, ratePlan} = props;
  const {countryName, locality, region, streetAddress} = address;
  const {badgeText, rating} = guestReviews;
  const {features, price} = ratePlan;

  const splitWords = (string) => {

    let splitString = '';

    for (let char of string) {

      if (char !== char.toUpperCase()) {
        
        splitString += char; 

      } else {
        
        splitString += ` ${char.toLowerCase()}`; 

       }
    }

    return splitString;
    
  };

  return (
    <div className = 'PropertyCard'>
      <div className = 'PropertyCardDetails'>
        <div className = 'propertyPhoto'>
          <img src = {thumbnailUrl} alt = {name}/>
        </div>
        <div className = 'propertyDescription'>
          <div className = 'PropertyCardInfo'>
            <p>{`${countryName}, ${locality}, ${region}, ${streetAddress}`}</p>
            <p className = 'propertyName'>{name}</p>
            <hr></hr>
            <p>{Object.keys(features).map(feature => splitWords(feature) ).join(' - ')}</p>
          </div>
          <div className = 'PropertyCardRatingPrice'>
            <p className = 'rating'>{`${badgeText}, ${rating}`}</p>
            <p className = 'price'><b>{price.current}</b> {price.info}</p>
          </div>
        </div>
      </div>
      <hr className = 'cardLine'></hr>
    </div>
  )
};

export default PropertyCard;