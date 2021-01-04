import React from 'react';

import styles from './SearchPageHeaderCenter.module.css';

import {Link} from '../../atoms'

const SearchPageHeaderCenter = () => {

  return (

      <div className = {styles.content}>
        <Link class = 'active'>Places to stay</Link>
        <Link>Experiences</Link>
        <Link>Online experiences</Link>
      </div>

  )

};

export default SearchPageHeaderCenter;