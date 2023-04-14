import React from "react";
import "./IPMainBody.css";
import IPMonitoring from "./IPMonitoring/IPMonitoring";
import Overview from "./Overview/Overview";

function IPMainBody(props) {
  return (
    <div className="IPMainBody">
      {props.menu === "Overview" && <Overview user={props.user} />}
      {props.menu === "IPMonitoring" && <IPMonitoring user={props.user} />}
    </div>
  );
}

export default IPMainBody;
