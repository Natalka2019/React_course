import React from 'react';

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

export default CardsContainer;
