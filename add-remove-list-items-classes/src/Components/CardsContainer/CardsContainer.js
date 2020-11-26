import React from 'react';

import './CardsContainer.css';

import UserCard from '../UserCard/UserCard';

class CardsContainer extends React.Component {
  constructor(props) {
    super(props);

    this.removeUser = this.removeUser.bind(this); 

  }

  removeUser (index, e) {
    e.preventDefault();
    e.stopPropagation();

    this.props.users.splice(index, 1);
    
    this.setState({cardItems: this.props.users});

  };

  render() {

    const cardItems = this.props.users;

    return (
      <div className = "CardsContainer">
        {cardItems.map( (element, index) => (
          <UserCard 
          cardDetails = {element} 
          key = {`key- ${ Symbol(index).toString() }`} 
          removeUser = {this.removeUser} 
          currentIndex = {index}
          />

        ))}
    </div>
    )
  }
};

export default CardsContainer;
