import React, {useContext, useRef} from 'react';

import styles from './PropertyCard.module.css';

import {Photo, TitleText, PlainText} from '../../atoms';
import splitWords from '../../utilities';
import {SearchResultsContext} from '../../../AppContext';

const PropertyCard = (props) => {

  const {markerHover} = useContext(SearchResultsContext);

  const {thumbnailUrl, address, name, guestReviews, ratePlan, id, cardSelectedHandler, cardDeselectedHandler} = props;
  const {countryName, locality, region, streetAddress} = address;
  const {badgeText, rating} = guestReviews;
  const {features, price} = ratePlan;

  const cardRef = useRef();

  const className = markerHover == id? styles.PropertyCardSelected : styles.PropertyCard;

  if (markerHover == id) {

      cardRef.current.scrollIntoView( {behavior: 'smooth'} );

  };

  return (
    <div className = {className}
      id = {id}
      ref = {cardRef}
      onMouseEnter = {e => cardSelectedHandler(e)}
      onMouseLeave = {e => cardDeselectedHandler(e)}>
      <div className = {styles.PropertyCardDetails}>
        <Photo thumbnailUrl = {thumbnailUrl} name = {name}/>
        <div className = {styles.propertyDescription}>
          <div className = {styles.PropertyCardInfo}>
            <PlainText>{`${countryName}, ${locality}, ${region}, ${streetAddress}`}</PlainText>
            <TitleText>{name}</TitleText>
            <div className = {styles.horizontalLine}/>
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
      <div className = {styles.horizontalLine}/>
    </div>
  )
};

export default PropertyCard;