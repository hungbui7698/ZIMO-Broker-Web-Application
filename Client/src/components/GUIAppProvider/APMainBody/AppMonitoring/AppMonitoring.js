import React from "react";
import "./AppMonitoring.css";
import Map from "./Map/Map";
import RefreshIcon from "@material-ui/icons/Refresh";
import { useState, useCallback, useRef } from "react";
import AppMonitoringList from "./AppMonitoringList/AppMonitoringList";

import ChartCPU from "./Chart/ChartCPU";
import ChartMemory from "./Chart/ChartMemory";

import ChartNetwork from "./Chart/ChartNetworkSent";
import ChartNetworkRecieve from "./Chart/ChartNetworkRecieve";
import ChartDiskUsage from "./Chart/ChartDiskUsage";

var AllAppInstances = [
  {
    _id: 1,
    zone: "Berlin",
    organization: "DAI-Labor",
    networkflavour:"S",
    cloudflavour:"M",
    network: {
      _id: 1,
      provider: "Telekom",
      position: { lat: 52.54449352240251, lng: 13.404101228027363 },
      radius: 4,
    },
    
    cloud: {
      _id: 1,
      provider: "Amazon",
      position: { lat: 52.51265020817675, lng: 13.385330469182657 },
      radius: 10,
    },
    name: "Fall Detection",
    deploymentType: "Docker",
    version: 2,
    status: "running",
  },
  {
    _id: 2,
    zone: "Berlin",
    organization: "DAI-Labor",
    networkflavour:"M",
    cloudflavour:"M",
    network: {
      _id: 1,
      provider: "Private 5G",
      position: { lat: 52.50967969606449, lng: 13.2472143187743 },
      radius: 4,
    },
    cloud: {
      _id: 1,
      provider: "Private Edge",
      position: { lat: 52.50443284905346, lng: 13.296309472582895 },
      radius: 10,
    },
    name: "E-Health",
    deploymentType: "Kubernetes",
    version: 2,
    status: "scheduled",
  },
  {
    _id: 3,
    zone: "Berlin",
    organization: "DAI-Labor",
    networkflavour:"S",
    cloudflavour:"S",
    network: {
      _id: 1,
      provider: "Private 5G",
      position: { lat: 52.500126065177, lng: 13.35577855041505 },
      radius: 2,
    },
    cloud: {
      _id: 1,
      provider: "Private Edge",
      position: { lat: 52.500126065177334, lng: 13.355778550415058 },
      radius: 10,
    },
    name: "Health-Check",
    deploymentType: "Kubernetes",
    version: 2,
    status: "scheduled",
  },
];
export default function AppMonitoring() {
  const mapRef = useRef();
  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  const [selectedAppInstance, setSelectedAppInstance] = useState(null);

  return (
    <div className="AppMonitoring">
      <h2>
        App Monitoring
        <RefreshIcon type="button" className="refreshButton" />
      </h2>
      <div className="MapContainer">
        <Map
          AppInstanceList={AllAppInstances}
          onMapLoad={onMapLoad}
          setSelectedAppInstance={(appInstance) => {
            setSelectedAppInstance(appInstance);
          }}
          selectedAppInstance={selectedAppInstance}
        />
      
        <div className="charts">
          <ChartCPU />
          <ChartMemory/>
          <ChartDiskUsage />
          
        </div>
        <div className="charts">
          <ChartNetwork />
          <ChartNetworkRecieve />
        </div>
      </div>
      <div className="table-App-Instances">
        <AppMonitoringList
          AllAppInstances={AllAppInstances}
          setSelectedAppInstance={(elem) => setSelectedAppInstance(elem)}
          selectedAppInstance={selectedAppInstance}
        />
      </div>
    </div>
  );
}
