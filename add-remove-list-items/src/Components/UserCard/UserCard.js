import React from 'react';

import './UserCard.css';

import Button from '../Button/Button';
import UserInfo from '../UserInfo/UserInfo';


const UserCard = (props) => {
  
  const {removeUser, currentIndex, cardDetails} = props;

  return (

    <div className = "UserCard" id = {cardDetails.id}>
      <UserInfo user = {cardDetails} />
      <div className = "cardDeleteButtonContainer">
        <Button className = "deleteUserButton" title = "Delete user" eventOnClick = {(e) => removeUser(e, null, currentIndex)} />
      </div>
    </div>

  )
};

export default UserCard;
