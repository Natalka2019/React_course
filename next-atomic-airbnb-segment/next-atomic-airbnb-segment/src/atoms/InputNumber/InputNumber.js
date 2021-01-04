import React from 'react';

import styles from './InputNumber.module.css';

const InputNumber = ({type, placeholder, name, min, max, onChangeHandler}) => (
  <input type = {type}
    placeholder = {placeholder}
    name = {name}
    className = {styles.InputNumber}
    min = {min}
    max = {max}
    onChange = {onChangeHandler}
  />);

export default InputNumber;