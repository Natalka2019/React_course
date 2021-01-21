import React from 'react';

import styles from './InfoWindowContent.module.css';

import {Photo, TitleText, PlainText} from '../../atoms';

const InfoWindowContent = (props) => {

  const {thumbnailUrl, address, name, guestReviews, ratePlan} = props;
  const {countryName, locality, region, streetAddress} = address;
  const {rating, total} = guestReviews;

  return (
    <div className = {styles.InfoWindowContent}>
      <div className = {styles.photo}>
        <Photo thumbnailUrl = {thumbnailUrl} name = {name}/>
      </div>
      <div className = {styles.description}>
        <div className = {styles.info}>
          <div className = {styles.badge}>
            <PlainText>{`${rating} (${total})`}</PlainText>
          </div>
            <PlainText>{`${countryName}, ${locality}, ${region}, ${streetAddress}`}</PlainText>
            <TitleText><strong>{name}</strong></TitleText>
        </div>
        <div className = {styles.price}>
          <PlainText><b>{ratePlan.price.current}</b> {ratePlan.price.info}</PlainText>
        </div>
      </div>
    </div>
  )
};

export default InfoWindowContent;