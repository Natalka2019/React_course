import React from 'react';
import './CardsContainer.css';
import UserCard from '../UserCard/UserCard';

class CardsContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {cardItems: this.props.users};

    this.removeUser = this.removeUser.bind(this); 

  }

  removeUser (index) {

    this.props.users.splice(index, 1);
    
    this.setState({cardItems: this.props.users});

  };

  render() {

    const {cardItems} = this.state;

    return (
      <div className = "CardsContainer">
      {cardItems.map( (element, index) => (
        <UserCard {...element} key = {element.email? element.email : index} removeUser = {this.removeUser} currentIndex = {index}/>
      ))}
    </div>
    )
  }
};

export default CardsContainer;
