import React, {useContext} from 'react';

import styles from './DateSearchField.module.css';

import {InputDate} from '../../atoms';
import {SearchResultsContext} from '../../../AppContext';

const DateSearchField = ({label, name}) => {

  const {inputValueHandler} = useContext(SearchResultsContext);

  return (

    <div className = {styles.DateSearchField}>
      <label className = {styles.label}>{label}
        <InputDate placeholder = 'Add dates'
          name = {name}
          onChangeHandler = {inputValueHandler}/>
      </label>
    </div>
    
  )

};

export default DateSearchField;