import React, {useState} from 'react';
import './App.css';
import CardsContainer from './Components/CardsContainer/CardsContainer.js';
import Button from './Components/Button/Button';
import Modal from './Components/Modal/Modal';
import {users} from './users.js';

function App() {
  const [isShown, setToggle] = useState(false);

  const modalWindowHandler = (e) => {
    e.preventDefault();
    e.stopPropagation();

    setToggle(!isShown)
  }

  const cardClass = isShown? 'modalOverlay showModal' : 'modalOverlay';

  const [usersState, setUsersState] = useState({
    users: {users}
  });

  const addUser = (e, newUser) => {
    e.preventDefault();
    e.stopPropagation();

    setUsersState(users.push(newUser));

    console.log(users);

  };

  return (
    <div className="App">
      <Modal
        modalClass ={cardClass}
        closeModal = {e => modalWindowHandler(e)}
        addUser = {(e, newUser) => addUser(e, newUser)}
        />
      <div className = "AppHeader">
        <Button className = "addUserButton" title = "Add user" eventOnClick = {e => modalWindowHandler(e)}/>
      </div>
      <div className = "AppBody">
        <CardsContainer users = {users}/>
      </div>
    </div>
  );
}

export default App;

