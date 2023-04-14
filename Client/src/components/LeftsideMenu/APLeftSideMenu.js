import React from "react";
import "./LeftSideMenu.css";
const APLeftSideMenu = (props) => {
  return (
    <>
      <div className="sidebar-container">
        <div className="sidebar-logo">ZIMO</div>
        <ul className="sidebar-navigation">
          <li>
            <div onClick={() => props.setMenu("CloudFlavour")} className={`${props.menu==="CloudFlavour" ? "active" : ""} `}>
              <i className="fa fa-home" aria-hidden="true"></i> Cloud Flavour
            </div>
          </li>
          <li>
            <div onClick={() => props.setMenu("NetworkFlavour")} className={`${props.menu==="NetworkFlavour" ? "active" : ""} `}>
              <i className="fa fa-home" aria-hidden="true"></i> Network Flavour
            </div>
          </li>
          <li>
            <div onClick={() => props.setMenu("DevApps")} className={`${props.menu==="DevApps" ? "active" : ""} `}>
              <i className="fa fa-tachometer" aria-hidden="true"></i> App
            </div>
          </li>
          <li>
            <div onClick={() => props.setMenu("AppInstances")} className={`${props.menu==="AppInstances" ? "active" : ""} `}>
              <i className="fa fa-tachometer" aria-hidden="true"></i> App
              Instances
            </div>
          </li>
          <li>
            <div onClick={() => props.setMenu("AppMonitoring")} className={`${props.menu==="AppMonitoring" ? "active" : ""} `}>
              <i className="fa fa-tachometer" aria-hidden="true"></i> App
              Monitoring
            </div>
          </li>
        </ul>
        
      </div>
    </>
  );
};

export default APLeftSideMenu;
