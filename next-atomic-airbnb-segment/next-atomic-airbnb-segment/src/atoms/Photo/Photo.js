import React from 'react';

import styles from './Photo.module.css';

const Photo = ({thumbnailUrl, name}) => (

  <div className = {styles.Photo}>
    <img src = {thumbnailUrl} alt = {name}/>
  </div>
      
);

export default Photo;