import React, {useContext} from 'react';
import {Redirect} from 'react-router-dom';

import './CardsMainPage.css';

import {UsersContext} from '../../AppContext';
import CardsContainer from '../CardsContainer/CardsContainer.js';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';


const CardsMainPage = () => {

  const mainPageContext = useContext(UsersContext);

  const {redirect, selectedId, modalWindowHandler, extractUserPosts} = mainPageContext;

  if (redirect) {

    return <Redirect push to = {`/user/${selectedId}`}/>
  }

  return (

    <div className="CardsMainPage">
      <Modal/>
      <div className = "CardsMainPageHeader">
        <Button className = "addUserButton" title = "Add user" eventOnClick = {e => modalWindowHandler(e)}/>
      </div>
      <div className = "CardsMainPageBody" onClick = {e => extractUserPosts(e)}>
        <CardsContainer />
      </div>
    </div>
    
  );
};

export default CardsMainPage;
