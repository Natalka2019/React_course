import React, {useState} from 'react';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';

import './App.css';

import CardsMainPage from './Components/CardsMainPage/CardsMainPage';
import UserPage from './Components/UserPage/UserPage';


const App = () => {

  const [state, setState] = useState( {

    userToBeRendered: {},
    posts: [],

  });

  const updateUserAndPosts = (chosenUser, chosenPosts) => {

    setState({
      userToBeRendered: chosenUser,
      posts: chosenPosts,
    });

  }

  return (
    <BrowserRouter>
      <div className="App">
        <div className="AppHeader">
          <ul>
            <li><Link to = '/'>All users</Link></li>
          </ul>
        </div>
        <Switch>
          <Route path = '/' exact render = {routerProps => <CardsMainPage {...routerProps} findSelectedUser = {updateUserAndPosts}/>}/>
          <Route path = '/user/:id' render = {routerProps => <UserPage {...routerProps} user = {state.userToBeRendered} postsToBeRendered = {state.posts}/> } />
        </Switch>  
      </div>
    </BrowserRouter>   
  );
}

export default App;
