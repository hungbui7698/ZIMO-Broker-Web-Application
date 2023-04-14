import React, { useEffect, useState, useMemo } from "react";
import "./ProductTable.css";
import DeleteIcon from '@material-ui/icons/Delete';
import SettingsTwoToneIcon from '@material-ui/icons/SettingsTwoTone';
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

const ProductTable = (props) => {
  const { items, requestSort, sortConfig } = useSortableData(props.rows);
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
              String(item[elem]).includes(filteredString)
          )
        )
      );
    }
  }, [filteredString, items]);

  return (
    <div className="ProductTable">
      <div className="filter">
        <input className="inputfilter"
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
            {props.columns.map((column) => (
              <th className="col" key={column.label}>
                <div
                  onClick={() => requestSort(column.API)}
                  className={getClassNamesFor(column.API)}
                >
                  {column.label}
                </div>
              </th>
            ))}
            {props.action === true && <th className="col">Action</th>}
          </tr>
        </thead>

        <tbody className="body">
          {filteredItems.map((item) => (
            <tr className="row g-0" key={item._id}>
              {Object.keys(item).map(
                (elem, i) =>
                  elem !== "_id" && (
                    <td key={i} className="col">
                      {item[elem]}
                    </td>
                  )
              )}
              {props.action === true && (
                <td className="col">
                  <SettingsTwoToneIcon className="button" type="button" onClick={() => console.log(item)}/>
                  <DeleteIcon className="button" type="button" onClick={()=>props.delete(item._id)}/>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
