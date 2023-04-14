import React from "react";

import "./Navigation.css";

const Navigation = (props) => {
  return (
    <nav className="nav">
      <ul>
        <li >
          {props.userRole === "App Provider" && (
            <img src="developer.png" alt="logo"></img>
          )}
          {props.userRole === "App User" && (
            <img src="user.png" alt="logo"></img>
          )}
          {props.userRole === "Infrastructure Provider" && (
            <img src="provider.png" alt="logo"></img>
          )}
        </li>
      
        <li className="user">{props.user}</li>
        <li>
          <div onClick={() => props.setLogin(false)}>Logout</div>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
