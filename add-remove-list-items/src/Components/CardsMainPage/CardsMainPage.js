import React, {useState, useEffect} from 'react';
import {Redirect} from 'react-router-dom';

import './CardsMainPage.css';

import CardsContainer from '../CardsContainer/CardsContainer.js';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';


const CardsMainPage = (props) => {

  const [URLUsers] = useState("https://jsonplaceholder.typicode.com/users");
  const [URLPosts] = useState("https://jsonplaceholder.typicode.com/posts");

  const [listOfUsers, setListOfUsers] = useState([]);
  const [listOfPosts, setListOfPosts] = useState([]);

  const [isShown, setShowState] = useState(false);
  const [selectedId, setSelectedId] = useState('');
  const [redirect, setRedirect] = useState(false);

  useEffect( () => {

    Promise.all( [fetch(URLUsers), fetch(URLPosts) ] )
      .then(responses => Promise.all(responses.map(response => response.json())))
        .then(responses => {
          setListOfUsers(responses[0]);
          setListOfPosts(responses[1]);
        }
        )
          .catch(error => console.log(error))

  }, []);

  const modalWindowHandler = (e) => {
    e.preventDefault();
    e.stopPropagation();

    setShowState( !isShown)
  };

  const addRemoveUserHandler = (e, newUser, index) => {

    e.preventDefault();
    e.stopPropagation();

    const users = [...listOfUsers];

    newUser? users.push(newUser) : users.splice(index, 1);

    setListOfUsers(users);

  };

  const extractUserPosts = (e) => {

    const activeUserId = +e.target.closest(".UserCard").id;
    
    const selectedUser = listOfUsers.filter(user => user.id === activeUserId);

    const selectedUserPosts = listOfPosts.filter(post => post.userId === activeUserId);

    setRedirect(true);

    props.findSelectedUser(selectedUser[0], selectedUserPosts);

    setSelectedId(activeUserId);

  };

  const cardClass = isShown? 'modalOverlay showModal' : 'modalOverlay';

  if (redirect) {

    return <Redirect push to = {`/user/${selectedId}`}/>
  }

  return (

    <div className="CardsMainPage">
      <Modal
        modalClass ={cardClass}
        closeModal = {e => modalWindowHandler(e)}
        addUser = {(e, newUser) => addRemoveUserHandler(e, newUser)}
        />
      <div className = "CardsMainPageHeader">
        <Button className = "addUserButton" title = "Add user" eventOnClick = {e => modalWindowHandler(e)}/>
      </div>
      <div className = "CardsMainPageBody" onClick = {e => extractUserPosts(e)}>
        <CardsContainer
          users = {listOfUsers}
          removeUserHandler = {addRemoveUserHandler}
          />
      </div>
    </div>
    
  );
};

export default CardsMainPage;
