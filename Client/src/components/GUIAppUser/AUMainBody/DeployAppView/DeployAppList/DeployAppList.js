import React, { useEffect, useState, useMemo } from "react";
import "./DeployAppList.css";
import DeleteIcon from "@material-ui/icons/Delete";
import SettingsTwoToneIcon from "@material-ui/icons/SettingsTwoTone";
const useSortableData = (items, config = null) => {
  const [sortConfig, setSortConfig] = useState(config);
  const sortedItems = useMemo(() => {
    let sortableItems = [...items];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }

        return 0;
      });
    }
    return sortableItems;
  }, [items, sortConfig]);

  const requestSort = (key) => {
    let direction = "ascending";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "ascending"
    ) {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  return { items: sortedItems, requestSort, sortConfig };
};

const DeployAppList = (props) => {
  const { items, requestSort, sortConfig } = useSortableData(
    props.AllAppGroupList
  );
  const [filteredString, setFilteredString] = useState("");
  const [filteredItems, setFilteredItems] = useState(items);
  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };
  useEffect(() => {
    if (filteredString === "") {
      setFilteredItems(items);
    } else {
      setFilteredItems(
        items.filter((item) =>
          Object.keys(item).some(
            (elem) =>
              elem !== "_id" && String(item[elem]).includes(filteredString)
          )
        )
      );
    }
  }, [filteredString, items]);

  return (
    <div className="DeployAppList">
      <div className="filter">
        <input
          className="inputfilter"
          value={filteredString}
          onChange={(e) => {
            setFilteredString(e.target.value);
          }}
          placeholder="Filter"
        />
      </div>
      <table className="table table-striped table-hover">
        <thead>
          <tr className="row g-0">
            <th className="col-2">
              <div
                onClick={() => requestSort("name")}
                className={getClassNamesFor("name")}
              >
                App Group
              </div>
            </th>
            <th className="col">
              <div>App Group Information</div>
            </th>
            <th className="col-1">
              <div>From</div>
            </th>
            <th className="col-1">
              <div>Until</div>
            </th>

            <th className="col-1">
              <div
                onClick={() => requestSort("status")}
                className={getClassNamesFor("status")}
              >
                Status
              </div>
            </th>
            <th className="col-1">Action</th>
          </tr>
        </thead>

        <tbody className="body">
          {filteredItems.map((appGroup) => (
            <tr
              className={`row g-0 ${
                props.selectedAppGroup&&props.selectedAppGroup._id === appGroup._id ? "active" : ""
              } `}
              key={appGroup._id}
              onClick={() => {
                props.setSelectedAppGroup(appGroup);   
              }} 
            >
              <td className="col-2">{appGroup.name}</td>
              <td className="col">
                {props.selectedAppGroup &&
                  props.selectedAppGroup._id === appGroup._id && (
                    <table className="table table-striped table-hover">
                      <thead>
                        <tr className="row g-0">
                          <th className="col">Apps</th>
                          <th className="col">Network</th>
                          <th className="col">Cloud</th>
                        </tr>
                      </thead>
                      <tbody>
                        {appGroup.apps.map((app) => (
                          <tr className="row g-0" key={app._id}>
                            <td className="col">{app.name}[v{app.version}]</td>
                            <td className="col">{app.network.provider}</td>
                            <td className="col">{app.cloud.provider}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}
              </td>
              <td className="col-1">{appGroup.begin}</td>
              <td className="col-1">{appGroup.end}</td>
              <td className="col-1">{appGroup.status}</td>
              <td className="col-1">
                <SettingsTwoToneIcon className="button" type="button" />
                <DeleteIcon className="button" type="button" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DeployAppList;
