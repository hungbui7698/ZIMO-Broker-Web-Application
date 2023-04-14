import React, { useEffect, useState, useMemo } from "react";
import "./InfrastructureList.css";

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

const NetworkFlavourList = (props) => {
  const { items, requestSort, sortConfig } = useSortableData(
    props.infrasList
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
                String(item[elem].provider).includes(filteredString))
          )
        )
      );
    }
  }, [filteredString, items]);

  return (
    <div className="InfrastructureList">
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
                onClick={() => requestSort("name")}
                className={getClassNamesFor("name")}
              >
                Name
              </div>
            </th>
            <th className="col">
              <div
                onClick={() => requestSort("type")}
                className={getClassNamesFor("type")}
              >
                Type
              </div>
            </th>
          </tr>
        </thead>

        <tbody className="body">
          {filteredItems.map((item) => (
            <tr className={`"row g-0" ${
              props.selectedInfra && props.selectedInfra._id === item._id
                ? "active"
                : ""
            }`} key={item._id} onClick={() => {
              props.setSelectedInfra(item);
              props.setEdit(false);

            }}>
              <td className="col">{item.name}</td>
              <td className="col">{item.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NetworkFlavourList;
