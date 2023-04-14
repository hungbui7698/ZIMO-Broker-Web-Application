import React, { useState, useEffect } from "react";
import "./CloudFlavour.css";
import ProductTable from "../../../UI/ProductTable";
import RefreshIcon from "@material-ui/icons/Refresh";
import { serverurl } from "../../../../logik/logik";
export default function CloudFlavour() {
  const [flavours, setFlavours] = useState([]);
  const refresh = () => {
    try {
      fetch(`${serverurl}/cloudflavour`)
        .then((response) => response.json())
        .then((data) => {
          let flavours = data.map(
            ({ _id, name, user, CPU, RAM, storage, nwMbps }) => ({
              _id,
              name,
              CPU,
              RAM,
              storage,
            })
          );
          setFlavours(flavours);
        });
    } catch (error) {
      console.log("error!");
    }
  };
  useEffect(() => {
    refresh()
  }, []);
  
  return (
    <div className="Flavour">
      <h2>
        Cloud Flavour
        <RefreshIcon
          type="button"
          className="refreshButton"
          onClick={() => refresh()}
        />
      </h2>
      <ProductTable
        columns={[
          { label: "Name", API: "name" },
          { label: "CPU", API: "CPU" },
          { label: "RAM", API: "RAM" },
          { label: "Storage", API: "storage" },
        ]}
        rows={flavours}
      />
    </div>
  );
}
