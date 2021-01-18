import React from 'react';

import styles from './Modal.module.css';

import {CloseButton, TitleText} from '../../atoms';

const Modal = ({showModal, modalHandler}) => {

const className = showModal? 'styles.Modal show' : styles.Modal;

  return (
    <div className = {className}>
      <div className = {styles.overlay} onClick = {(e) => modalHandler(e)}>
        <div className = {styles.content} onClick = {e => e.stopPropagation()}>
          <CloseButton onClickHandler = {modalHandler}/>
          <TitleText>Language and region</TitleText>
        </div>
      </div>
    </div>

  )
};

export default Modal;