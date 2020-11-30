import React from 'react';
import PropTypes from 'prop-types';

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

Post.propTypes = {

  userId: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,

}

export default Post;