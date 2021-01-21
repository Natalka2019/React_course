import React from 'react';

import styles from './InputDate.module.css';

const InputDate = ({placeholder, name, onChangeHandler}) => (
  <input type = 'date'
    placeholder = {placeholder}
    name = {name}
    className = {styles.InputDate}
    onChange = {onChangeHandler}
  />
);

export default InputDate;