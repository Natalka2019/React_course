import React, {useContext} from 'react';

import styles from './LocationSearchField.module.css';

import {InputText} from '../../atoms';
import {SearchResultsContext} from '../../../AppContext';

const LocationSearchField = ({type}) => {
  
  const {inputValueHandler} = useContext(SearchResultsContext);
  
  return (

    <div className = {styles.LocationSearchField}>
      <label className = {styles.label}>Location<br/>
        <InputText type = 'text'
          placeholder = 'Where are you going?'
          name = 'destination'
          onChangeHandler = {inputValueHandler}
        />
      </label>
    </div>
    
  )};

export default LocationSearchField;