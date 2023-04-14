import React,{useState,useCallback, useEffect} from "react";
import "./AppInstances.css";
import RefreshIcon from "@material-ui/icons/Refresh";
import AddAppInstance from "./AddAppInstance/AddAppInstance";
import AppInstanceList from "./AppInstanceList/AppInstanceList";
import {serverurl} from "../../../../logik/logik"
export default function AppInstances(props) {
  const [appInstances, setAppInstances] = useState([]);
  const deleteApp = (id) => {
    fetch(`${serverurl}/appinstance?id=${id}`, {
      method: "DELETE",
    }).then(refresh);
  };
  const refresh = useCallback(() => {
    try {
      fetch(`${serverurl}/appinstance?organization=${props.user}`)
        .then((response) => response.json())
        .then((data) => {
          setAppInstances(data);
        });
    } catch (error) {
      console.log("error!");
    }
  }, [props.user]);
  useEffect(() => {
    refresh();
  }, [refresh]);

  return (
    <div className="AppInstances">
      <h2>
        App Instances
        <RefreshIcon type="button" className="refreshButton" onClick={refresh}/>
        <AddAppInstance user={props.user} refresh={refresh}/>
      </h2>

      <div className="table-App-Instances">
        <AppInstanceList
          AllAppInstances={appInstances}
          deleteApp={deleteApp}
          refresh={refresh}
        />
      </div>
    </div>
  );
}
