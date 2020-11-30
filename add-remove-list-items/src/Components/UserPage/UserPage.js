import React from 'react';

import './UserPage.css';

import UserInfo from '../UserInfo/UserInfo';
import Post from '../Post/Post';


const UserPage = (props) => {

  const posts = props.postsToBeRendered.map(post => {
    post['name'] = props.user.name;
    return post;
  });

  return (

    <div className = "UserPage">
      <UserInfo user = {props.user} />
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