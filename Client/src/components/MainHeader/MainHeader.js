import React from "react";

import "./MainHeader.css";
import Navigation from "./Navigation";

const MainHeader = (props) => {
  return (
    <header className="main-header">
      <h2 className="role">{props.userRole}</h2>
      <Navigation setLogin={()=>props.setLogin(false)} userRole={props.userRole} user={props.user}/>
    </header>
  );
};

export default MainHeader;
