import React, {useState, useEffect} from 'react';

const UsersContext = React.createContext();

const UsersProvider = (props) => {

  const URLUsers = "https://jsonplaceholder.typicode.com/users";
  const URLPosts = "https://jsonplaceholder.typicode.com/posts";

  const [listOfUsers, setListOfUsers] = useState([]);
  const [listOfPosts, setListOfPosts] = useState([]);

  const [isShown, setShowState] = useState(false);
  const [selectedId, setSelectedId] = useState('');
  const [redirect, setRedirect] = useState(false);

  const [UserPageInfo, setUserPageInfo] = useState( {

    userToBeRendered: {},
    posts: [],

  });

  const [newUser, setUserState] = useState({

    name: '',
    username: '',
    email: '',
    phone: ''

  });

  useEffect( () => {

    Promise.all( [fetch(URLUsers), fetch(URLPosts) ] )
      .then(responses => Promise.all(responses.map(response => response.json())))
        .then(responses => {
          setListOfUsers(responses[0]);
          setListOfPosts(responses[1]);
        })
          .catch(error => console.log(error))

  }, []);

  const modalWindowHandler = (e) => {

    e.preventDefault();
    e.stopPropagation();

    setShowState( !isShown);

    setUserState( {

      name: '',
      username: '',
      email: '',
      phone: ''

    });

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

    setUserPageInfo({
      userToBeRendered: selectedUser[0],
      posts: selectedUserPosts,

    });

    setSelectedId(activeUserId);

  };

  const clearRedirection = () => {

    setRedirect(false);

  };

  const onNameChange = (e) => {

    setUserState( { ...newUser, [e.target.name]: e.target.value });

  };

  const cardClass = isShown? 'modalOverlay showModal' : 'modalOverlay';

  return (
    <UsersContext.Provider value = { {

      listOfUsers,
      listOfPosts,
      selectedId,
      redirect,
      UserPageInfo,
      cardClass,
      newUser,
      onNameChange, 
      modalWindowHandler,
      addRemoveUserHandler,
      extractUserPosts,
      clearRedirection

    }} >
      {props.children}
    </UsersContext.Provider>
  )

};

export {UsersProvider, UsersContext};