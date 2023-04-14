import React, { useState, useEffect } from "react";
import "./SelectApp.css";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import ConfigApp from "./ConfigApp";
import { serverurl } from "../../../../../../../logik/logik";
const SelectApp = (props) => {
  const [filteredString, setFilteredString] = useState("");
  const [filteredApps, setFilteredApps] = useState([]);
  const [unSelected, setUnSelected] = useState([]);
  useEffect(() => {
    try {
      fetch(`${serverurl}/app`)
        .then((response) => response.json())
        .then((data) =>
          setUnSelected(
            data.filter(
              (elem) =>
                !props.selected.some(
                  (selectedApps) => selectedApps._id === elem._id
                )
            )
          )
        );
    } catch (error) {
      console.log("error!");
    }
  }, [props.selected]);
  useEffect(() => {
    if (filteredString === "") {
      setFilteredApps(unSelected);
    } else {
      setFilteredApps(
        unSelected.filter((item) =>
          Object.keys(item).some(
            (elem) =>
              elem !== "_id" && String(item[elem]).includes(filteredString)
          )
        )
      );
    }
  }, [filteredString, unSelected]);

  const addApp = (id) => {
    props.setSelected([
      ...props.selected,
      unSelected.find((elem) => elem._id === id),
    ]);
    setUnSelected(unSelected.filter((elem) => elem._id !== id));
  };

  const deleteApp = (id) => {
    setUnSelected([
      ...unSelected,
      props.selected.find((elem) => elem._id === id),
    ]);
    props.setSelected(props.selected.filter((elem) => elem._id !== id));
  };

  return (
    <div className="AppGroupEdit">
      <table className="table table-striped table-hover">
        <thead>
          <tr className="row g-0">
            <th className="col-3 header">App Store</th>
            <th className="col-9 header">Selected Apps</th>
          </tr>
        </thead>
        <tbody>
          <tr className="row g-0">
            <td className="col-3">
              <table className="table table-striped table-hover">
                <thead>
                  <tr className="row g-0">
                    <th className=" header">
                      <input
                        className="searchApp"
                        onChange={(e) => {
                          setFilteredString(e.target.value);
                        }}
                        placeholder="Search app"
                      ></input>
                    </th>
                  </tr>
                </thead>
                <tbody className="fullbody">
                  {filteredApps.map((elem) => (
                    <tr className="row g-0" key={elem._id}>
                      <td className="col-10">
                        <h6>
                          {elem.name}[v{elem.version}]
                        </h6>
                        <div>Organization: {elem.organization}</div>
                      </td>

                      <td className="col-2">
                        <AddIcon
                          type="button"
                          onClick={() => addApp(elem._id)}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </td>

            <td className="col-9">
              <table className="table table-striped table-hover">
                <thead>
                  <tr className="row g-0">
                    <th className="col-3 header">Apps</th>
                    <th className="col-9 header">Config</th>
                  </tr>
                </thead>
                <tbody className="fullbody">
                  {props.selected &&
                    props.selected.map((elem) => (
                      <tr className="row g-0" key={elem._id}>
                        <td className="col-3">
                          <RemoveIcon
                            type="button"
                            onClick={() => deleteApp(elem._id)}
                          />
                          {elem.name}[v{elem.version}]
                        </td>
                        <td className="col-9">
                          <ConfigApp app={elem} />
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default SelectApp;
