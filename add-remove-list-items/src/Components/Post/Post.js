import React from 'react';

import './Post.css';


const Post = (props) => {

  const {userId, name, title, body} = props;

  return (

    <div className = "Post">
      <h6 className = "postName">id: {userId} Author: {name}</h6>
      <h5 className = "postTitle">{title}</h5>
      <div className = "postBody">{body}</div>
    </div>
    
  )
}

export default Post;