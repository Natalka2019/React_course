import React from 'react';

import './UserCard.css';

import Button from '../Button/Button';
import UserInfo from '../UserInfo/UserInfo';


class UserCard extends React.Component {
  
  render (){

    const {removeUser, currentIndex, cardDetails} = this.props;

    return (

      <div className = "UserCard" id = {cardDetails.id}>
        <UserInfo user = {cardDetails} />
        <div className = "cardDeleteButtonContainer">
          <Button className = "deleteUserButton" title = "Delete user" eventOnClick = {(e) => removeUser(e, null, currentIndex)} />
        </div>
      </div>

    )
  }
}

export default UserCard;
