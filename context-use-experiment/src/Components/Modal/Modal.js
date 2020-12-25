import React, {useContext} from 'react';

import './Modal.css';

import {UsersContext} from '../../AppContext';
import Button from '../Button/Button';

const Modal = () => {

  const modalContext = useContext(UsersContext);

  const {newUser, onNameChange, cardClass, modalWindowHandler, addRemoveUserHandler} = modalContext;

  return (
    
    <div className = {cardClass} onClick = { e => modalWindowHandler(e)}>
      <div className = "modalContent" onClick = { e => e.stopPropagation()}>
        <div className = "modalInputs">
          <label htmlFor = "inputName">name: </label>
          <input type = 'text' id = "inputName" name = "name" value = {newUser.name} onChange= {onNameChange} placeholder = "Enter name"></input>
          <label htmlFor = "inputUsername">username: </label>
          <input type = 'text' id = "inputUsername" name = "username" value = {newUser.username} onChange= {onNameChange} placeholder = "Enter username"></input>
          <label htmlFor = "inputEmail">email: </label>
          <input type = 'text' id = "inputEmail" name = "email" value = {newUser.email} onChange= {onNameChange} placeholder = "Enter email"></input>
          <label htmlFor = "inputPhone">phone: </label>
          <input type = 'text' id = "inputPhone" name = "phone" value = {newUser.phone} onChange= {onNameChange} placeholder = "Enter phone"></input>
        </div>
        <Button className = "modalAddButton" title = "Add" eventOnClick = {(e) => { 
          addRemoveUserHandler(e, newUser);
          modalWindowHandler(e);
        }}/>
        <Button className = "modalCloseButton" title = "Close" eventOnClick = {(e) => {modalWindowHandler(e);}}/>
      </div>
    </div>
    
  )
      
};

export default Modal;

