import React, {useContext} from 'react';

import './UserPage.css';

import {UsersContext} from '../../AppContext';
import UserInfo from '../UserInfo/UserInfo';
import Post from '../Post/Post';


const UserPage = () => {

  const userToRenderContext = useContext(UsersContext);

  const {UserPageInfo} = userToRenderContext;

  const posts = UserPageInfo.posts.map(post => {
    post['name'] = UserPageInfo.userToBeRendered.name;
    return post;
  });

  return (

    <div className = "UserPage">
      <UserInfo user = {UserPageInfo.userToBeRendered} />
      <div className = "UserPagePosts">
        {posts.map( post => (
          <Post
            {...post}
            key = {`post-${Symbol(post.id).toString()}`} />
        ))}
      </div>
    </div>
    
  )
};

export default UserPage;