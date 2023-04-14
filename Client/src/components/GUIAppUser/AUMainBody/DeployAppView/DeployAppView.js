import React, { useState } from "react";
import "./DeployAppView.css";
import RefreshIcon from "@material-ui/icons/Refresh";

import Map from "./Map/Map";
import DeployAppList from "./DeployAppList/DeployAppList";
var AllAppGroupList = [
  {
    _id: 1,
    position: { lat: 52.51508505568695, lng: 13.34599385192873 },
    name: "Emergency in TierGarten",
    begin:"5:20, 1.12.2021",
    end:"5:20, 31.12.2021",
    apps: [
      {
        _id: "1",
        name: "E-Health",
        version:"2",
        organization: "Dai-Labor",
        network: { _id: "1", provider: "Private 5G" },
        cloud: { _id: "1", provider: "Private Edge" },
      },
      {
        _id: "2",
        name: "Fal_Detection",
        version:"2",
        organization: "Dai-Labor",
        network: { _id: "1", provider: "Private 5G" },
        cloud: { _id: "1", provider: "Private Edge" },
      },
    ],
    radius: 2,
    status:"deployed",
  },
  {
    _id: 2,
    position: { lat: 52.516860924211116, lng: 13.375347947387715 },
    name: "Ambulance in TierGarten",
    begin:"5:20, 15.12.2021",
    end:"5:20, 31.12.2021",
    apps: [
      {
        _id: "1",
        name: "Emergency VideoConf",
        version:"2",
        organization: "Dai-Labor",
        network: { _id: "1", provider: "Telekom" },
        cloud: { _id: "1", provider: "Amazon" },
      },
      {
        _id: "2",
        name: "Fal_Detection",
        version:"2",
        organization: "Dai-Labor",
        network: { _id: "1", provider: "Telekom" },
        cloud: { _id: "1", provider: "Amazon" },
      },
    ],
    radius: 2,
    organization: "Dai-Labor",
    status:"pending"
  },
];
const DeployAppView = () => {
  const [selectedAppGroup, setSelectedAppGroup] = useState(null);

  return (
    <div className="DeployAppView">
      <h2>
        Deployment/Deployed App
        <RefreshIcon type="button" className="refreshButton" />
      </h2>
      <div className="MapContainer">
        <Map
          AllAppGroupList={AllAppGroupList}
          setSelectedAppGroup={(infra) => {
            setSelectedAppGroup(infra);
          }}
          selectedAppGroup={selectedAppGroup}
        />
      </div>
      <div>
        <DeployAppList
          AllAppGroupList={AllAppGroupList}
          setSelectedAppGroup={(elem) => setSelectedAppGroup(elem)}
          selectedAppGroup={selectedAppGroup}
        />
      </div>
    </div>
  );
};

export default DeployAppView;
