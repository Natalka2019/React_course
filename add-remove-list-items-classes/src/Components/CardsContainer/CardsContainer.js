import React from 'react';

import './CardsContainer.css';

import UserCard from '../UserCard/UserCard';

class CardsContainer extends React.Component {

  render() {

    const cardItems = this.props.users;
    const removeUser = this.props.removeUserHandler;

    return (
      <div className = "CardsContainer">
        {cardItems.map( (element, index) => (
          <UserCard 
            cardDetails = {element} 
            key = {`key- ${ Symbol(index).toString() }`} 
            removeUser = {removeUser} 
            currentIndex = {index}
          />

        ))}
    </div>
    )
  }
};

export default CardsContainer;
