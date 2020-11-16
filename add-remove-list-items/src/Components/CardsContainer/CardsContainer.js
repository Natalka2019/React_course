import React, {useState} from 'react';
import './CardsContainer.css';
import UserCard from '../UserCard/UserCard';

const CardsContainer = ({users}) => {

  const [usersState, setUsersList] = useState({users: {users}});

  const removeUser = (index) => {
    
    setUsersList(users.splice(index, 1));

  };

  return (
    <div className = "CardsContainer">
    {users.map( (element, index) => (
      <UserCard {...element} key = {element.email? element.email : index} removeUser = {removeUser} currentIndex = {index}/>
    ))}
  </div>
  )
  
};

export default CardsContainer;
