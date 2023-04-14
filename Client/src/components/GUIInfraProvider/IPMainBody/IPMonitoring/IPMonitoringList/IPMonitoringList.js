import React, { useEffect, useState, useMemo } from "react";
import "./IPMonitoringList.css";
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

const IPMonitoringList = (props) => {
  const { items, requestSort, sortConfig } = useSortableData(
    props.AllInfraInstances
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
    <div className="IPMonitoringList">
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
                onClick={() => requestSort("_id")}
                className={getClassNamesFor("_id")}
              >
                _id
              </div>
            </th>
            <th className="col">
              <div
                onClick={() => requestSort("provider")}
                className={getClassNamesFor("provider")}
              >
                Provider
              </div>
            </th>
            <th className="col">
              <div
                onClick={() => requestSort("delayTolerance")}
                className={getClassNamesFor("delayTolerance")}
              >
                Delay Tolerance
              </div>
            </th>
            <th className="col">
              <div
                onClick={() => requestSort("Downlink")}
                className={getClassNamesFor("Downlink")}
              >
                Downlink
              </div>
            </th>
            <th className="col">
              <div
                onClick={() => requestSort("Uplink")}
                className={getClassNamesFor("Uplink")}
              >
                Uplink
              </div>
            </th>
           
            <th className="col">Action</th>
          </tr>
        </thead>

        <tbody className="body">
          {filteredItems.map((item) => (
            <tr
              className= {`row g-0 ${props.selectedInfraInstance===item ? "active" : ""} `}
              key={item._id}
              onClick={() => {
                props.setSelectedInfraInstance(item)
              }}

            >
              <td className="col">{item._id}</td>
              <td className="col">{item.provider}</td>
              <td className="col">{item.delayTolerance.toString()}</td>
              <td className="col">{item.Downlink}</td>
              <td className="col">{item.Uplink}</td>
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

export default IPMonitoringList;
