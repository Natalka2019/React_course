import React from 'react';

import styles from './SearchPageHeaderCenter.module.css';

import {Redirect} from '../../atoms'

const SearchPageHeaderCenter = () => {

  return (

      <div className = {styles.content}>
        <Redirect class = 'active'>Places to stay</Redirect>
        <Redirect>Experiences</Redirect>
        <Redirect>Online experiences</Redirect>
      </div>

  )

};

export default SearchPageHeaderCenter;