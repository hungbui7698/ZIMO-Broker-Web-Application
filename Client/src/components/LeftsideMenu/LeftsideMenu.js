import React from "react";
import "./LeftSideMenu.css";
const LeftSideMenu = (props) => {
  return (
    <>
      <div className="sidebar-container">
        <div className="sidebar-logo">ZIMO</div>
        <ul className="sidebar-navigation">
          <li>
            <div
              onClick={() => props.setMenu("IPMonitoring")}
              className={`${props.menu==="IPMonitoring" ? "active" : ""} `}
            >
              <i className="fa fa-home" aria-hidden="true"></i> Monitoring
            </div>
          </li>
          <li>
            <div
              onClick={() => props.setMenu("Overview")}
              className={`${props.menu==="Overview" ? "active" : ""} `}
            >
              <i className="fa fa-home" aria-hidden="true"></i> Overview
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default LeftSideMenu;
