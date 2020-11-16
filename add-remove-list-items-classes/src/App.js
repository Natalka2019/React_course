import React from 'react';
import './App.css';
import CardsContainer from './Components/CardsContainer/CardsContainer.js';
import Button from './Components/Button/Button';
import Modal from './Components/Modal/Modal';
import {users} from './users.js';

class App extends React.Component {
  constructor(props) {

    super(props);

    this.state = {
      isShown: false,
      listOfUsers: users
    };

    this.modalWindowHandler = this.modalWindowHandler.bind(this);
    this.addUser = this.addUser.bind(this);

  }

  modalWindowHandler (e)  {
    e.preventDefault();
    e.stopPropagation();

    this.setState({isShown: !this.state.isShown})
  }

  

  addUser (e, newUser) {
    e.preventDefault();
    e.stopPropagation();

    users.push(newUser);
    this.setState({listOfUsers: users});

  }

  render() {

    const cardClass = this.state.isShown? 'modalOverlay showModal' : 'modalOverlay';

    return (
      <div className="App">
        <Modal
          modalClass ={cardClass}
          closeModal = {e => this.modalWindowHandler(e)}
          addUser = {(e, newUser) => this.addUser(e, newUser)}
          />
        <div className = "AppHeader">
          <Button className = "addUserButton" title = "Add user" eventOnClick = {e => this.modalWindowHandler(e)}/>
        </div>
        <div className = "AppBody">
          <CardsContainer users = {users}/>
        </div>
      </div>
    );
  }
}

export default App;

// function App() {
//   const [isShown, setToggle] = useState(false);

//   const modalWindowHandler = (e) => {
//     e.preventDefault();
//     e.stopPropagation();

//     setToggle(!isShown)
//   }

//   const cardClass = isShown? 'modalOverlay showModal' : 'modalOverlay'

//   const [usersState, setUsersState] = useState({
//     users: {users}
//   });

//   const addUser = (e, newUser) => {
//     e.preventDefault();
//     e.stopPropagation();

//     setUsersState(users.push(newUser));

//   }

//   return (
//     <div className="App">
//       <Modal
//         modalClass ={cardClass}
//         closeModal = {e => modalWindowHandler(e)}
//         addUser = {(e, newUser) => addUser(e, newUser)}
//         currentUserId = {users.length}
//         />
//       <div className = "AppHeader">
//         <Button className = "addUserButton" title = "Add user" eventOnClick = {e => modalWindowHandler(e)}/>
//       </div>
//       <div className = "AppBody">
//         <CardsContainer users = {users}/>
//       </div>
//     </div>
//   );
// }

// export default App;

