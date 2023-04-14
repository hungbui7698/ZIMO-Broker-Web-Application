import React, { useEffect, useState, useMemo } from "react";
import "./DevAppsList.css";
import DeleteIcon from "@material-ui/icons/Delete";
import EditApp from "./EditApp/EditApp";
const useSortableData = (items, config = null) => {
  const [sortConfig, setSortConfig] = useState(config);
  const sortedItems = useMemo(() => {
    let sortableItems = [...items];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        /*if (
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
        }*/
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

const DevAppsList = (props) => {
  const { items, requestSort, sortConfig } = useSortableData(props.AppsList);
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
                String(item[elem].provider).includes(filteredString))
          )
        )
      );
    }
  }, [filteredString, items]);

  return (
    <div className="DevAppsList">
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
            <th className="col-1">
              <div
                onClick={() => requestSort("region")}
                className={getClassNamesFor("region")}
              >
                Region
              </div>
            </th>
            <th className="col-2">
              <div
                onClick={() => requestSort("organization")}
                className={getClassNamesFor("organization")}
              >
                Organization
              </div>
            </th>
            <th className="col-2">
              <div
                onClick={() => requestSort("name")}
                className={getClassNamesFor("name")}
              >
                Name
              </div>
            </th>
            <th className="col-1">
              <div
                onClick={() => requestSort("version")}
                className={getClassNamesFor("version")}
              >
                Version
              </div>
            </th>
            <th className="col">
              <div
                onClick={() => requestSort("flavour")}
                className={getClassNamesFor("flavour")}
              >
                Dflt. Network Flavour
              </div>
            </th>

            <th className="col">
              <div
                onClick={() => requestSort("name")}
                className={getClassNamesFor("name")}
              >
                Dflt. Cloud Flavour
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
              <td className="col-1">{item.region}</td>
              <td className="col-2">{item.organization}</td>
              <td className="col-2">{item.name}</td>
              <td className="col-1">{item.version}</td>
              <td className="col">{item.cloudflavour}</td>
              <td className="col">{item.networkflavour}</td>
              <td className="col">{item.deploymentType}</td>
              <td className="col-1">
                <EditApp app={item} refresh={props.refresh}/>
                <DeleteIcon
                  className="button"
                  type="button"
                  onClick={() => props.deleteApp(item._id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DevAppsList;
