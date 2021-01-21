import React, {useContext} from 'react';

import styles from './GuestsNumberField.module.css';

import {InputNumber} from '../../atoms';
import {SearchResultsContext} from '../../../AppContext';

const GuestsNumberField = () => {
  
  const {inputValueHandler} = useContext(SearchResultsContext);

  return (

    <div className = {styles.GuestsNumberField }>
      <label className = {styles.label}>Guests<br/>
        <InputNumber 
          name = 'adult'
          onChangeHandler = {inputValueHandler}/>
      </label>
    </div>
    
  )
};

export default GuestsNumberField;