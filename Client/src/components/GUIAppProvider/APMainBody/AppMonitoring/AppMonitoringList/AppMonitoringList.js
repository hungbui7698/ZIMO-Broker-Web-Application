import React, { useEffect, useState, useMemo } from "react";
import "./AppMonitoringList.css";
import DeleteIcon from "@material-ui/icons/Delete";
import SettingsTwoToneIcon from "@material-ui/icons/SettingsTwoTone";
const useSortableData = (items, config = null) => {
  const [sortConfig, setSortConfig] = useState(config);
  const sortedItems = useMemo(() => {
    let sortableItems = [...items];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        
        if (typeof(a[sortConfig.key]) ==="object"&&a[sortConfig.key].provider < b[sortConfig.key].provider) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (typeof(a[sortConfig.key]) ==="object" && a[sortConfig.key].provider > b[sortConfig.key].provider) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
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

const AppMonitoringList = (props) => {
  const { items, requestSort, sortConfig } = useSortableData(
    props.AllAppInstances
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
              elem !== "_id" && (String(item[elem]).includes(filteredString) || String(item[elem].provider).includes(filteredString) )
          )
        )
      );
    }
  }, [filteredString, items]);

  return (
    <div className="AppMonitoringList">
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
            <th className="col">
              <div
                onClick={() => requestSort("zone")}
                className={getClassNamesFor("zone")}
              >
                Zone
              </div>
            </th>
            <th className="col">
              <div
                onClick={() => requestSort("organization")}
                className={getClassNamesFor("organization")}
              >
                Organization
              </div>
            </th>
            <th className="col">
              <div
                onClick={() => requestSort("name")}
                className={getClassNamesFor("name")}
              >
                Apps[Ver]
              </div>
            </th>
            <th className="col">
              <div
                onClick={() => requestSort("deploymentType")}
                className={getClassNamesFor("deploymentType")}
              >
                Deployment Type
              </div>
            </th>
            <th className="col">
              <div
                onClick={() => requestSort("network")}
                className={getClassNamesFor("network")}
              >
                Network[Flavour]
              </div>
            </th>
            <th className="col">
              <div
                onClick={() => requestSort("cloud")}
                className={getClassNamesFor("cloud")}
              >
                Cloud[Flavour]
              </div>
            </th>
            <th className="col">
              <div
                onClick={() => requestSort("status")}
                className={getClassNamesFor("status")}
              >
                Status
              </div>
            </th>
            <th className="col">Action</th>
          </tr>
        </thead>

        <tbody className="body">
          {filteredItems.map((item) => (
            <tr
              className= {`row g-0 ${props.selectedAppInstance===item ? "active" : ""} `}
              key={item._id}
              onClick={() => {
                props.setSelectedAppInstance(item)
              }}

            >
              <td className="col">{item.zone}</td>
              <td className="col">{item.organization}</td>
              <td className="col">
                {item.name}[v{item.version}]
              </td>
              <td className="col">{item.deploymentType}</td>
              <td className="col">{item.network&&item.network.provider} [{item.networkflavour}]</td>
              <td className="col">{item.cloud.provider}[{item.cloudflavour}]</td>
              <td className="col">{item.status}</td>
              <td className="col">
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

export default AppMonitoringList;
