import React from 'react';

import styles from './PropertyCard.module.css';

import Photo from '../../atoms/Photo/Photo';
import TitleText from '../../atoms/TitleText/TitleText';
import PlainText from '../../atoms/PlainText/PlainText';

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
    <div className = {styles.PropertyCard}>
      <div className = {styles.PropertyCardDetails}>
        <Photo thumbnailUrl = {thumbnailUrl} name = {name}/>
        <div className = {styles.propertyDescription}>
          <div className = {styles.PropertyCardInfo}>
            <PlainText>{`${countryName}, ${locality}, ${region}, ${streetAddress}`}</PlainText>
            <TitleText>{name}</TitleText>
            <hr></hr>
            <PlainText>{Object.keys(features).map(feature => splitWords(feature) ).join(' - ')}</PlainText>
          </div>
          <div className = {styles.PropertyCardRatingPrice}>
            <PlainText>{`${badgeText}, ${rating}`}</PlainText>
            <div className = {styles.price}>
              <PlainText><b>{price.current}</b> {price.info}</PlainText>
            </div>
          </div>
        </div>
      </div>
      <hr className = {styles.cardLine}></hr>
    </div>
  )
};

export default PropertyCard;