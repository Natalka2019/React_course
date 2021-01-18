import React from 'react';

import styles from './InputNumber.module.css';

const InputNumber = ({name, onChangeHandler}) => (
  <select className = {styles.InputNumber}
    onChange = {onChangeHandler}
    name = {name}>
    <option value='1'>Add guests</option>
    <option value='1'>1</option>
    <option value='2'>2</option>
    <option value='3'>3</option>
    <option value='4'>4</option>
  </select>
  );

export default InputNumber;