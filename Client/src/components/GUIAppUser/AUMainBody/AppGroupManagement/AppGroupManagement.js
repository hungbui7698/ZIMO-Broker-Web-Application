import React, { useEffect, useState, useCallback } from "react";
import AppGroup from "./AppGroup/AppGroup";
import "./AppGroupManagement.css";
import AddAppGroup from "./AddAppGroup/AddAppGroup";
import RefreshIcon from "@material-ui/icons/Refresh";
import { serverurl } from "../../../../logik/logik";
const AppGroupManagement = (props) => {
  const [appGroupList, setAppGroupList] = useState([]);
  const [filteredString, setFilteredString] = useState("");
  const [filteredItems, setFilteredItems] = useState(appGroupList);
  const deleteApp=(id)=>{
    fetch(`${serverurl}/appgroup?id=${id}`, {
      method: "DELETE",
    }).then(refresh);
  }
  const refresh = useCallback(() => {
    try {
      fetch(`${serverurl}/appgroup?user=${props.user}`)
        .then((response) => response.json())
        .then((data) => setAppGroupList(data));
    } catch (error) {
      console.log("error!");
    }
  },[props.user])
  useEffect(() => {
    refresh();
  }, [refresh]);

  
  useEffect(() => {
    if (filteredString === "") {
      setFilteredItems(appGroupList);
    } else {
      
      setFilteredItems(
        appGroupList.filter((item) =>
          Object.keys(item).some(
            (elem) =>
              elem !== "_id" &&
              String(item[elem]).includes(filteredString)
          )
        )
      );
    }
  }, [filteredString, appGroupList]);
  return (
    <div className="AppGroupManagement">
      <h2>
        App Group Management
        <RefreshIcon
          type="button"
          className="refreshButton"
          onClick={() => refresh()}
        />
        <AddAppGroup user={props.user} refresh={refresh}/>
      </h2>
      <input className="inputfilter"
          value={filteredString}
          onChange={(e) => {
            setFilteredString(e.target.value);
          }}
          placeholder="Filter"
        />
      <table className="table table-striped table-hover">
        <thead>
          <tr className="row g-0">
            <th className="col">App Groups</th>
            <th className="col">Apps</th>
            <th className="col-7">Config</th>
            <th className="col">Actions</th>
          </tr>
        </thead>
        <tbody className="fullbody">
          {filteredItems.map((elem) => (
            <AppGroup key={elem._id} appGroup={elem} deleteApp={id=>deleteApp(id)} refresh={refresh}/>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default AppGroupManagement;
