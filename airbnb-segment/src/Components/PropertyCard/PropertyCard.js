import React from 'react';

import './PropertyCard.css';

const PropertyCard = (props) => {

  const {thumbnailUrl, address, name, guestReviews, ratePlan} = props;
  const {countryName, locality, region, streetAddress} = address;
  const {badgeText, rating} = guestReviews;
  const {features, price} = ratePlan;

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
            <p>{Object.keys(features).join(' - ')}</p>
          </div>
          <div className = 'PropertyCardRatingPrice'>
            <p className = 'rating'>{`${badgeText}, ${rating}`}</p>
            <p className = 'price'><b>{price.current}</b>/ {price.info}</p>
          </div>
        </div>
      </div>
      <hr className = 'cardLine'></hr>
    </div>
  )
};

export default PropertyCard;