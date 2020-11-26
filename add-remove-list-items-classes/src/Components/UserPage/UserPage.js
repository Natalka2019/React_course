import React from 'react';

import './UserPage.css';

import UserInfo from '../UserInfo/UserInfo';
import Post from '../Post/Post';


class UserPage extends React.Component {

  render() {

    const posts = this.props.postsToBeRendered.map(post => {
      post['name'] = this.props.user.name;
      return post;
    });

    return (
      <div className = "UserPage">
        <UserInfo user = {this.props.user} />
        <div className = "UserPagePosts">
          {posts.map( post => (
            <Post
              {...post}
              key = {`post-${Symbol(post.id).toString()}`} />
          ))}
        </div>

      </div>
      
    )
  }
}

export default UserPage;