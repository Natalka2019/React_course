import React from 'react';

import './UserPage.css';

import Post from '../Post/Post';


class UserPage extends React.Component {

  render() {

    const {name, username, email, address = "-", phone, website, company = "-"} = this.props.userToBeRendered;
    const {street, suite, city, zipcode} = address;
    const {name:companyName, catchPhrase, bs} = company;

    const posts = this.props.postsToBeRendered.map(post => {
      post['name'] = name;
      return post;
    });

    return (
      <div className = "UserPage">
        <div className = "userPageInfo">
          <div className = "userPageMainInfo">
            <h3>{name? name : "-"}</h3>
            <p>user name: {username? username : "-"}</p>
            <p>email: <i>{email? <a href = {`mailto: ${email} `} >{email}</a> : "-"}</i></p>
            <p>phone: {phone? <a href = { ` tel: ${phone} `}>{phone}</a> : "-" }</p>
            <p>website: {website? <a href = {website}>{website}</a> : "-"}</p>
          </div>
          <div className = "addressCompanyContainer">
            {address !== "-" &&
              <address className = "addressContainer"><b>Address: </b>
                <p>{street}</p>
                <p>{suite}</p>
                <p>{city}</p>
                <p>{zipcode}</p>
              </address>
            }
            {company !== "-" &&
            <div className = "companyContainer"><b>Company: </b>
              <p className = "companyName"><b>{companyName}</b></p>
              <p>{catchPhrase}</p>
              <hr></hr>
              <p>{bs}</p>
            </div>
            }
          </div>
        </div>
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