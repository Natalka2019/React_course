import React from 'react';
import {Redirect} from 'react-router-dom';

import './CardsMainPage.css';

import CardsContainer from '../CardsContainer/CardsContainer.js';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';


class CardsMainPage extends React.Component {
  constructor(props) {

    super(props);

    this.state = {
      URLUsers: "https://jsonplaceholder.typicode.com/users",
      URLPosts: "https://jsonplaceholder.typicode.com/posts",
      isShown: false,
      listOfUsers: [],
      istOfPosts: [],
      redirect: false,
      selectedId: ''
    };

    this.modalWindowHandler = this.modalWindowHandler.bind(this);
    this.addUser = this.addUser.bind(this);
    this.extractUserPosts = this.extractUserPosts.bind(this);
    this.removeUserHandler = this.removeUserHandler.bind(this);

  }

  componentDidMount() {

    fetch(this.state.URLUsers)
      .then(data => data.json())
        .then(data => this.setState({listOfUsers: data}))

    fetch(this.state.URLPosts)
      .then(data => data.json())
        .then(data => this.setState({listOfPosts: data}))


  }

  modalWindowHandler (e)  {
    e.preventDefault();
    e.stopPropagation();

    this.setState({isShown: !this.state.isShown})
  }

  

  addUser (e, newUser) {
    e.preventDefault();
    e.stopPropagation();

    const usersArray = [...this.state.listOfUsers];

    usersArray.push(newUser);
    this.setState({listOfUsers: usersArray});

  }

  removeUserHandler (index, e) {
    e.preventDefault();
    e.stopPropagation();

    const users = [...this.state.listOfUsers];

    users.splice(index, 1);
    
    this.setState({listOfUsers: users});

  };

  extractUserPosts(e) {

    const activeUserId = e.target.closest(".UserCard").id;
    
    const selectedUser = this.state.listOfUsers.filter(user => user.id == activeUserId);

    const selectedUserPosts = this.state.listOfPosts.filter(post => post.userId == activeUserId);

    this.setState({redirect: true});

    this.props.findSelectedUser(selectedUser[0], selectedUserPosts);

    this.setState({selectedId: activeUserId});

  }

  render() {

    const cardClass = this.state.isShown? 'modalOverlay showModal' : 'modalOverlay';

    const {selectedId: id}= this.state;

    if (this.state.redirect) {

      return <Redirect push to = {`/user/${id}`}/>
    }

    return (
      <div className="CardsMainPage">
        <Modal
          modalClass ={cardClass}
          closeModal = {e => this.modalWindowHandler(e)}
          addUser = {(e, newUser) => this.addUser(e, newUser)}
          />
        <div className = "CardsMainPageHeader">
          <Button className = "addUserButton" title = "Add user" eventOnClick = {e => this.modalWindowHandler(e)}/>
        </div>
        <div className = "CardsMainPageBody" onClick = {e => this.extractUserPosts(e)}>
          <CardsContainer
            users = {this.state.listOfUsers}
            removeUserHandler = {this.removeUserHandler}
            />
        </div>
        
      </div>
    );
  }
}

export default CardsMainPage;

