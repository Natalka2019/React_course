import React from 'react';

import styles from './InputText.module.css';

const InputText = ({type, placeholder, name, onChangeHandler}) => (
  <input type = {type}
    placeholder = {placeholder}
    name = {name}
    className = {styles.InputText}
    onChange = {onChangeHandler}
  />
);

export default InputText;