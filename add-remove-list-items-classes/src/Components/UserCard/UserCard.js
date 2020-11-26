import React from 'react';

import './UserCard.css';

import Button from '../Button/Button';
import UserInfo from '../UserInfo/UserInfo';


class UserCard extends React.Component {
  
  render (){

    const {removeUser, currentIndex} = this.props;

    return (

      <div className = "UserCard" id = {this.props.cardDetails.id}>
        <UserInfo user = {this.props.cardDetails} />
        <div className = "cardDeleteButtonContainer">
          <Button className = "deleteUserButton" title = "Delete user" eventOnClick = {(e) => removeUser(currentIndex, e)} />
        </div>
      </div>

    )
  }
}

export default UserCard;
