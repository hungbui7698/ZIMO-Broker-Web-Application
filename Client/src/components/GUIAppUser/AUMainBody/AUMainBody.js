import React from "react";
import "./AUMainBody.css";
import AppGroupManagement from "./AppGroupManagement/AppGroupManagement";
import DeployAppView from "./DeployAppView/DeployAppView";

function AUMainBody(props) {
  return (
    <div className="AUMainBody">
      {props.menu === "AppGroupManagement" && <AppGroupManagement user={props.user} />}
      {props.menu === "OrderApp" && <DeployAppView user={props.user} />}
    </div>
    
  );
}

export default AUMainBody;
