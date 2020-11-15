import React, { useState } from 'react';
import './UserCard.css';
import Button from '../Button/Button';



const UserCard = ({name, username, email, address = "-", phone, website, company = "-", removeUser, currentIndex, eventOnClick}) => {

  const {street, suite, city, zipcode} = address;
  const {name:companyName, catchPhrase, bs} = company;

  return (
    <div className = "UserCard">
      <div className = "userInfo">
        <h3>{name? name : "-"}</h3>
        <p>user name: {username? username : "-"}</p>
        <p>email: <i>{email? <a href = {`mailto: ${email} `} >{email}</a> : "-"}</i></p>
        <p>phone: {phone? <a href = { ` tel: ${phone} `}>{phone}</a> : "-" }</p>
        <p>website: {website? <a href = {website}>{website}</a> : "-"}</p>
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
      <div className = "cardDeleteButtonContainer">
        <Button className = "deleteUserButton" title = "Delete user" eventOnClick = {() => removeUser(currentIndex)} />
      </div>
    </div>
  )
}

export default UserCard;

