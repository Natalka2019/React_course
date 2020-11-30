import React from 'react';
import PropTypes from 'prop-types';

import './CardsContainer.css';

import UserCard from '../UserCard/UserCard';

const CardsContainer = (props) => {

  const {users, removeUserHandler} = props;

  return (

    <div className = "CardsContainer">
      {users.map( (element, index) => (
        <UserCard 
          cardDetails = {element} 
          key = {`key- ${ Symbol(index).toString() }`} 
          removeUser = {removeUserHandler} 
          currentIndex = {index}
        />

      ))}
    </div>
  
  )
};

CardsContainer.propTypes = {

  users: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeUserHandler: PropTypes.func.isRequired,

}

export default CardsContainer;
