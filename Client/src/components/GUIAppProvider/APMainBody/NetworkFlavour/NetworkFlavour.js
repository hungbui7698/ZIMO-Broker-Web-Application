import React, { useState, useEffect, useCallback } from "react";
import "./NetworkFlavour.css";
import RefreshIcon from "@material-ui/icons/Refresh";
import NetworkFlavourList from "./NetworkFlavourList/NetworkFlavourList";
import { serverurl } from "../../../../logik/logik";
import NetworkFlavourInformation from "./NetworkFlavourInformation/NetworkFlavourInformation";
import AddNetworkFlavour from "./AddNetworkFlavour/AddNetworkFlavour";
export default function NetworkFlavour(props) {
  const [edit, setEdit] = useState(false);
  const [selectedFlavour, setSelectedFlavour] = useState(null);
  const [flavours, setFlavours] = useState([]);
  const refresh = useCallback(() => {
    try {
      fetch(`${serverurl}/networkflavour?organization=${props.user}`)
        .then((response) => response.json())
        .then((data) => setFlavours(data));
    } catch (error) {
      console.log("error!");
    }
  },[props.user]);
  useEffect(() => {
    refresh();
  }, [refresh]);
  return (
    <div className="NetworkFlavour">
      <div className="leftContainer">
        <h2>
          Network Flavour
          <RefreshIcon type="button" className="refreshButton" onClick={refresh}/>
          <AddNetworkFlavour refresh={()=>refresh()} user={props.user} />
        </h2>

        <NetworkFlavourList
          AllNetworkFlavour={flavours}
          setSelectedFlavour={(flavour) => {
            setSelectedFlavour(flavour);
          }}
          selectedFlavour={selectedFlavour}
          setEdit={(infra) => {
            setEdit(infra);
          }}
        />
      </div>
      <div className="rightContainer">
        <NetworkFlavourInformation
        refresh={()=>refresh()}
          setSelectedFlavour={(flavour) => {
            setSelectedFlavour(flavour);
          }}
          selectedFlavour={selectedFlavour}
          edit={edit}
          setEdit={(infra) => {
            setEdit(infra);
          }}
        />
      </div>
    </div>
  );
}
