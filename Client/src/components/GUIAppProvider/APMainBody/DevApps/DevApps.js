import React, { useState, useEffect, useCallback } from "react";
import "./DevApps.css";
import RefreshIcon from "@material-ui/icons/Refresh";
import AddApp from "./AddApp/AddApp";
import DevAppsList from "./DevAppsList/DevAppsList";
import { serverurl } from "../../../../logik/logik";
export default function DevApps(props) {
  const deleteApp = (id) => {
    fetch(`${serverurl}/app?id=${id}`, {
      method: "DELETE",
    }).then(refresh);
  };
  const [apps, setApps] = useState([]);
  const refresh = useCallback(() => {
    try {
      fetch(`${serverurl}/app?organization=${props.user}`)
        .then((response) => response.json())
        .then((data) => {
          setApps(data);
        });
    } catch (error) {
      console.log("error!");
    }
  }, [props.user]);
  useEffect(() => {
    refresh();
  }, [refresh]);
  return (
    <div className="DevApps">
      <h2>
        Apps
        <RefreshIcon
          type="button"
          className="refreshButton"
          onClick={() => refresh()}
        />
        <AddApp refresh={refresh} user={props.user} />
      </h2>

      <DevAppsList AppsList={apps} deleteApp={deleteApp} refresh={refresh}/>
    </div>
  );
}
