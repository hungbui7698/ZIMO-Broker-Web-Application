import React from "react";
import AppInstances from "./AppInstances/AppInstances";
import DevApps from "./DevApps/DevApps";
import CloudFlavour from "./CloudFlavour/CloudFlavour";
import "./APMainBody.css"
import NetworkFlavour from "./NetworkFlavour/NetworkFlavour";
import AppMonitoring from "./AppMonitoring/AppMonitoring";
function APMainBody(props) {
  return (
    <div className="APMainBody">
      {props.menu === "CloudFlavour" && <CloudFlavour user={props.user} />}
      {props.menu === "NetworkFlavour" && <NetworkFlavour user={props.user} />}
      {props.menu === "DevApps" && <DevApps user={props.user} />}
      {props.menu === "AppInstances" && <AppInstances user={props.user} />}
      {props.menu === "AppMonitoring" && <AppMonitoring user={props.user} />}
    </div>
  );
}

export default APMainBody;
