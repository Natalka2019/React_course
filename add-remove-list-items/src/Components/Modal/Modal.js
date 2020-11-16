import React, {useState} from 'react';
import './Modal.css';
import Button from '../Button/Button';

const Modal = ({modalClass, closeModal, addUser}) => {
 

  const [newUser, setUserState] = useState({

    name: '',
    username: '',
    email: '',
    phone: ''
    
  });
  
  const onNameChange = (e) => {
    
    const value = e.target.value;

    setUserState( {
      ...newUser,
      [e.target.name]: value
    });

  };

  const clearNewUser = (e) => {
    e.preventDefault();

    setUserState( {

      name: '',
      username: '',
      email: '',
      phone: ''

    });
  }

    return (
      <div className = {modalClass}>
        <div className = "modalContent">
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
            addUser(e, newUser);
            closeModal(e);
            clearNewUser(e);
            }}/>
          <Button className = "modalCloseButton" title = "Close" eventOnClick = {(e) => {closeModal(e); clearNewUser(e)}}/>
        </div>
      </div>
      
    )

};

export default Modal;