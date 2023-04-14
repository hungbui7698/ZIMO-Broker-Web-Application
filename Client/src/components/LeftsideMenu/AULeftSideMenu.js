import React from "react";
import "./LeftSideMenu.css";
const AULeftSideMenu = (props) => {
  return (
    <>
      <div className="sidebar-container">
        <div className="sidebar-logo">ZIMO</div>
        <ul className="sidebar-navigation">
          <li>
            <div onClick={() => props.setMenu("AppGroupManagement")} className={`${props.menu==="AppGroupManagement" ? "active" : ""} `}>
              <i className="fa fa-tachometer" aria-hidden="true"></i> App Group
              Management
            </div>
          </li>
          <li>
            <div onClick={() => props.setMenu("OrderApp")} className={`${props.menu==="OrderApp" ? "active" : ""} `}>
              <i className="fa fa-tachometer" aria-hidden="true"></i> Deployment/ Deployed App
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default AULeftSideMenu;
