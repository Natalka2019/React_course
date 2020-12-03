import React, {useContext} from 'react';

import './CardsContainer.css';

import {UsersContext} from '../../AppContext';
import UserCard from '../UserCard/UserCard';

const CardsContainer = (props) => {

  const cardsContainerContext = useContext(UsersContext);

  const {listOfUsers} = cardsContainerContext;

  return (

    <div className = "CardsContainer">
      {listOfUsers.map( (element, index) => (
        <UserCard 
          cardDetails = {element} 
          key = {`key- ${ Symbol(index).toString() }`} 
          currentIndex = {index}
        />

      ))}
    </div>
  
  )
};

export default CardsContainer;
