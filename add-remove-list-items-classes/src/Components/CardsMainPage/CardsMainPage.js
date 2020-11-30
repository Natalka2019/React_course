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
    this.addRemoveUserHandler = this.addRemoveUserHandler.bind(this);
    this.extractUserPosts = this.extractUserPosts.bind(this);

  }

  componentDidMount() {

    Promise.all([fetch(this.state.URLUsers), fetch(this.state.URLPosts)])
      .then(responses => Promise.all(responses.map(response => response.json())))
        .then(responses => this.setState ({

          listOfUsers: responses[0],
          listOfPosts: responses[1]

        }))
          .catch(error => console.log(error))

  }

  modalWindowHandler (e)  {
    e.preventDefault();
    e.stopPropagation();

    this.setState({isShown: !this.state.isShown})
  }

  addRemoveUserHandler (e, newUser, index) {

    e.preventDefault();
    e.stopPropagation();

    const users = [...this.state.listOfUsers];

    newUser? users.push(newUser) : users.splice(index, 1);

    this.setState({listOfUsers: users});

  }

  extractUserPosts(e) {

    const activeUserId = e.target.closest(".UserCard").id;
    
    const selectedUser = this.state.listOfUsers.filter(user => user.id == activeUserId);

    const selectedUserPosts = this.state.listOfPosts.filter(post => post.userId == activeUserId);

    this.setState({redirect: true});

    this.props.findSelectedUser(selectedUser[0], selectedUserPosts);

    this.setState({selectedId: activeUserId});

  }

  render() {

    console.log(this.state.listOfUsers);

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
          addUser = {(e, newUser) => this. addRemoveUserHandler(e, newUser)}
          />
        <div className = "CardsMainPageHeader">
          <Button className = "addUserButton" title = "Add user" eventOnClick = {e => this.modalWindowHandler(e)}/>
        </div>
        <div className = "CardsMainPageBody" onClick = {e => this.extractUserPosts(e)}>
          <CardsContainer
            users = {this.state.listOfUsers}
            removeUserHandler = {this. addRemoveUserHandler}
            />
        </div>
        
      </div>
    );
  }
}

export default CardsMainPage;

