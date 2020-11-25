import React from 'react';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';

import './App.css';

import CardsMainPage from './Components/CardsMainPage/CardsMainPage';
import UserPage from './Components/UserPage/UserPage';


class App extends React.Component {

  constructor (props) {

    super(props);

    this.state = {

      user: {},
      posts: [],
    }

    this.updateUserAndPosts = this.updateUserAndPosts.bind(this);
  }

  updateUserAndPosts(chosenUser, chosenPosts) {

    this.setState({
      user: chosenUser,
      posts: chosenPosts,
    });
  
  }

  render() {

    const {user, posts} = this.state;

    return (
      <BrowserRouter>
        <div className="App">
          <div className="AppHeader">
            <ul>
              <li><Link to = '/'>All users</Link></li>
            </ul>
          </div>
          <Switch>
            <Route path = '/' exact render = {routerProps => <CardsMainPage {...routerProps} findSelectedUser = {this.updateUserAndPosts}/>}/>
            <Route path = '/user/:id' render = {routerProps => <UserPage {...routerProps} userToBeRendered = {user} postsToBeRendered = {posts}/> } />
          </Switch>  
        </div>
      </BrowserRouter>

        
    );
  }
}

export default App;

