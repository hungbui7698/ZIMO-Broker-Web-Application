import React, { useState } from "react";
import "./IPMonitoring.css";
import RefreshIcon from "@material-ui/icons/Refresh";

import IPMonitoringList from "./IPMonitoringList/IPMonitoringList";
import ChartDown from "./Chart/ChartDown";
import ChartUp from "./Chart/ChartUp";



var AllInfraInstances = [
  {
    _id: 1,
    provider: "Telekom",
    delayTolerance: true,
    Downlink: 5000,
    Uplink: 5000
  },

  {
    _id: 2,
    provider: "Private 5G",
    delayTolerance: true,
    Downlink: 5000,
    Uplink: 5000
  },

  {
    _id: 3,
    provider: "Telekom",
    delayTolerance: false,
    Downlink: 10000,
    Uplink: 10000
  }
]


export default function IPMonitoring(props) {

  const [selectedInfraInstance, setSelectedInfraInstance] = useState(null);
  return (
    <div className="IPMonitoring">
      <h2>
        IP Monitoring
        <RefreshIcon type="button" className="refreshButton" />
      </h2>
      <div className="MapContainer">
        <div className="charts">
          <ChartDown />
          <ChartUp/>
          
        </div>
      </div>
      <div className="table-Infra-Instances">
        <IPMonitoringList
        AllInfraInstances={AllInfraInstances}
        setSelectedInfraInstance={(elem)=> setSelectedInfraInstance(elem)}
        selectedInfraInstance={selectedInfraInstance} />
      </div>
      
    </div>
  );
}
