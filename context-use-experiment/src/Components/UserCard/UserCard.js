import React, {useContext} from 'react';
import PropTypes from 'prop-types';

import './UserCard.css';

import {UsersContext} from '../../AppContext';
import Button from '../Button/Button';
import UserInfo from '../UserInfo/UserInfo';


const UserCard = (props) => {
  
  const {currentIndex, cardDetails} = props;

  const userCardContext = useContext(UsersContext);

  const {addRemoveUserHandler} = userCardContext;

  return (

    <div className = "UserCard" id = {cardDetails.id}>
      <UserInfo user = {cardDetails} />
      <div className = "cardDeleteButtonContainer">
        <Button className = "deleteUserButton" title = "Delete user" eventOnClick = {(e) => addRemoveUserHandler(e, null, currentIndex)} />
      </div>
    </div>

  )
};

UserCard.propTypes = {

  currentIndex: PropTypes.number.isRequired,
  cardDetails: PropTypes.object.isRequired 

}

export default UserCard;
