import React, {useContext} from 'react'; 
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';

import './App.css';

import {UsersContext} from './AppContext';
import CardsMainPage from './Components/CardsMainPage/CardsMainPage';
import UserPage from './Components/UserPage/UserPage';


const App = () => {

  const redirectContext = useContext(UsersContext);

  const {clearRedirection} = redirectContext;

  return (
    <BrowserRouter>
      <div className="App">
        <div className="AppHeader">
          <ul>
            <li onClick = {clearRedirection}><Link to = '/'>All users</Link></li>
          </ul>
        </div>
        <Switch>
          <Route path = '/' exact component = { CardsMainPage }/>
          <Route path = '/user/:id' component = {UserPage } />
        </Switch>  
      </div>
    </BrowserRouter>   
  );
}

export default App;
