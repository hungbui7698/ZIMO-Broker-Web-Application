import React, { useState, useEffect, useCallback, useRef } from "react";
import "./Overview.css";
import RefreshIcon from "@material-ui/icons/Refresh";
import Map from "./Map/Map";
import Search from "./Map/Search";
import InfrastructureList from "./InfrastructureList/InfrastructureList";
import { serverurl } from "../../../../logik/logik";
import InfrastructureInformation from "./InfrastructureInformation/InfrastructureInformation";
import AddInfrastructure from "./AddInfrastructure/AddInfrastructure";
export default function Overview(props) {
  const [edit, setEdit] = useState(false);
  const [showModalAddInra, setShowModalAddInfra] = useState(false);
  const modalAddInfraClose = () => setShowModalAddInfra(false);
  const modalAddInfraShow = () => setShowModalAddInfra(true);

  const [selectedLat, setSelectedLat] = useState();
  const [selectedLng, setSelectedLng] = useState();
  const changeLat = (lat) => setSelectedLat(lat);
  const changeLng = (lng) => setSelectedLng(lng);

  const mapRef = useRef();
  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);
  const onMapClick = useCallback((event) => {
    changeLat(event.latLng.lat());
    changeLng(event.latLng.lng());

    modalAddInfraShow();
  }, []);
  const panTo = ({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
  };
  const [selectedInfra, setSelectedInfra] = useState(null);
  const [searchedLocation, setSearchedLocation] = useState(null);
  const [infrasList, setInfrasList] = useState([]);
  const refresh = useCallback(() => {
    try {
      fetch(`${serverurl}/Infrastructure?organization=${props.user}`)
        .then((response) => response.json())
        .then((data) => {
          setInfrasList(data);
          console.log(data);
        });
    } catch (error) {
      console.log("error!");
    }
  }, [props.user]);
  useEffect(() => {
    refresh();
  }, [refresh]);
  return (
    <div className="Overview">
      <div className="leftContainer">
        <h2>
          Overview
          <RefreshIcon
            type="button"
            className="refreshButton"
            onClick={refresh}
          />
          <AddInfrastructure
            refresh={() => refresh()}
            handleClose={modalAddInfraClose}
            handleShow={modalAddInfraShow}
            show={showModalAddInra}
            selectedLat={selectedLat}
            selectedLng={selectedLng}
            setSelectedLat={changeLat}
            setSelectedLng={changeLng}
            user={props.user}
          />
        </h2>

        <InfrastructureList
          infrasList={infrasList}
          setSelectedInfra={(infra) => {
            setSelectedInfra(infra);
          }}
          selectedInfra={selectedInfra}
          setEdit={(infra) => {
            setEdit(infra);
          }}
        />
      </div>
      <div className="middleContainer">
        <InfrastructureInformation
          refresh={() => refresh()}
          setSelectedInfra={(infra) => {
            setSelectedInfra(infra);
          }}
          selectedInfra={selectedInfra}
          edit={edit}
          setEdit={(infra) => {
            setEdit(infra);
          }}
        />
      </div>

      <div className="rightContainer">
        <Search
          panTo={panTo}
          setCenter={(location) => setSearchedLocation(location)}
        />
        <Map
          filteredInfrasList={infrasList}
          onMapClick={onMapClick}
          onMapLoad={onMapLoad}
          searchedLocation={searchedLocation}
          setSelectedInfra={(infra) => {
            setSelectedInfra(infra);
          }}
          selectedInfra={selectedInfra}
          setEdit={(infra) => {
            setEdit(infra);
          }}
        />
      </div>
    </div>
  );
}
