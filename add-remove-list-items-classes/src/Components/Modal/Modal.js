import React from 'react';
import './Modal.css';
import Button from '../Button/Button';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    
    this.initialState = {

        name: '',
        username: '',
        email: '',
        phone: ''

    };

    this.state = this.initialState;

    this.onNameChange = this.onNameChange.bind(this);
    this.clearNewUser  = this.clearNewUser .bind(this);
  }
  
  onNameChange (e) {

    this.setState( {

      [e.target.name]: e.target.value,

    });

  };

  clearNewUser (e) {
    e.preventDefault();

    this.setState( this.initialState );
  }

  render() {

    const {modalClass, closeModal, addUser} = this.props;
    const newUser = this.state;

    return (
      <div className = {modalClass}>
        <div className = "modalContent">
         <div className = "modalInputs">
            <label htmlFor = "inputName">name: </label>
            <input type = 'text' id = "inputName" name = "name" value = {newUser.name} onChange= {this.onNameChange} placeholder = "Enter name"></input>
            <label htmlFor = "inputUsername">username: </label>
            <input type = 'text' id = "inputUsername" name = "username" value = {newUser.username} onChange= {this.onNameChange} placeholder = "Enter username"></input>
            <label htmlFor = "inputEmail">email: </label>
            <input type = 'text' id = "inputEmail" name = "email" value = {newUser.email} onChange= {this.onNameChange} placeholder = "Enter email"></input>
            <label htmlFor = "inputPhone">phone: </label>
            <input type = 'text' id = "inputPhone" name = "phone" value = {newUser.phone} onChange= {this.onNameChange} placeholder = "Enter phone"></input>
          </div>
          <Button className = "modalAddButton" title = "Add" eventOnClick = {(e) => { 
            addUser(e, newUser);
            closeModal(e);
            this.clearNewUser(e);
            }}/>
          <Button className = "modalCloseButton" title = "Close" eventOnClick = {(e) => {closeModal(e); this.clearNewUser(e)}}/>
        </div>
      </div>
      
    )
  }        

};

export default Modal;
