import React, { useEffect, useState, useMemo } from "react";
import "./AppInstanceList.css";
import DeleteIcon from "@material-ui/icons/Delete";
import EditAppInstance from "./EditAppInstance/EditAppInstance";
const useSortableData = (items, config = null) => {
  const [sortConfig, setSortConfig] = useState(config);
  const sortedItems = useMemo(() => {
    let sortableItems = [...items];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (
          typeof a[sortConfig.key] === "object" &&
          a[sortConfig.key].name < b[sortConfig.key].name
        ) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (
          typeof a[sortConfig.key] === "object" &&
          a[sortConfig.key].name > b[sortConfig.key].name
        ) {
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

const AppInstanceList = (props) => {
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
              elem !== "_id" &&
              (String(item[elem]).includes(filteredString) ||
                String(item[elem].name).includes(filteredString)||String(item[elem].name).includes(filteredString))
          )
        )
      );
    }
  }, [filteredString, items]);

  return (
    <div className="AppInstanceList">
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
                onClick={() => requestSort("app")}
                className={getClassNamesFor("app")}
              >
                Apps[Ver]
              </div>
            </th>

            <th className="col">
              <div
                onClick={() => requestSort("networkflavour")}
                className={getClassNamesFor("networkflavour")}
              >
                Network Flavour
              </div>
            </th>
            <th className="col">
              <div
                onClick={() => requestSort("cloudflavour")}
                className={getClassNamesFor("cloudflavour")}
              >
                Cloud Flavour
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

            <th className="col-1">Action</th>
          </tr>
        </thead>

        <tbody className="body">
          {filteredItems.map((item) => (
            <tr
              className={`row g-0 ${
                props.selectedAppInstance === item ? "active" : ""
              } `}
              key={item._id}
      
            >
              <td className="col">{item.zone}</td>
              <td className="col">{item.app.organization}</td>
              <td className="col">
                {item.app.name}[v{item.app.version}]
              </td>

              <td className="col">{item.networkflavour.name}</td>
              <td className="col">{item.cloudflavour.name}</td>
              <td className="col">{item.app.deploymentType}</td>
              <td className="col-1">
                <EditAppInstance appInstance={item} refresh={props.refresh}/>
                <DeleteIcon className="button" type="button" onClick={() => props.deleteApp(item._id)}/>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AppInstanceList;
