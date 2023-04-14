import React, { useState, useCallback } from "react";
import { Button, Modal } from "react-bootstrap";
import Launch from "@material-ui/icons/Launch";
import "./OrderApp.css";
import moment from "moment";
import Map from "./Map/Map";
import DeploymentOptions from "./DeploymentOptions/DeploymentOptions";
import { serverurl } from "../../../../../../logik/logik";
 
const OrderApp = (props) => {
  const [options, setOptions] = useState([]);

  const [selectedLat, setSelectedLat] = useState(0);
  const [selectedLng, setSelectedLng] = useState(0);
  const changeLat = (lat) => setSelectedLat(lat);
  const changeLng = (lng) => setSelectedLng(lng);

  const [radius, setRadius] = useState(0);

  const onMapClick = useCallback((event) => {
    changeLat(event.latLng.lat());
    changeLng(event.latLng.lng());
  }, []);
  const [show, setShow] = useState(false);
  const closeModal = () => {
    setShow(false);
  };

  const [showOptions, setShowOption] = useState(false);
  const closeShowOptions = () => {
    setShowOption(false);
  };

  const getData = () => {
    var begin = document.getElementById("begin").value;
    var end = document.getElementById("end").value;
    var data = {
      appGroup: props.appGroup,
      position: {
        lat: selectedLat,
        lng: selectedLng,
      },
      radius: radius,
      begin: begin,
      end: end,
    };

    return data;
  };

  const moveToOptions = async () => {
    try {
      fetch(`${serverurl}/getoptions`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(getData()),
      })
        .then((response) => response.json())
        .then((data) => {
          setOptions(data);
          closeModal();

          setShowOption(true);
        });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Launch type="button" className="button" onClick={() => setShow(true)} />
      <Modal
        className="OrderAppGroup"
        size="xl"
        scrollable={true}
        show={show}
        onHide={closeModal}
      >
        <Modal.Header closeButton>
          <Modal.Title>Deploy App Group: {props.appGroup.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Select Area to deploy</h4>
          <div className="MapContainer">
            <Map
              radius={radius}
              selectedLat={selectedLat}
              selectedLng={selectedLng}
              onMapClick={onMapClick}
            />
          </div>
          <div className="InputContainer">
            <div className="AreaInfo">
              Latitude:
              <input
                className="input"
                value={selectedLat}
                type="number"
                onChange={(e) => {
                  changeLat(e.target.value);
                }}
                placeholder="Latitude"
              />
            </div>
            <div className="AreaInfo">
              Longtitude:
              <input
                className="input"
                value={selectedLng}
                type="number"
                onChange={(e) => {
                  changeLng(e.target.value);
                }}
                placeholder="Longtitude"
              />
            </div>
            <div className="AreaInfo">
              Radius:
              <input
                className="input"
                value={radius}
                type="number"
                onChange={(e) => {
                  setRadius(e.target.value);
                }}
                placeholder="Radius"
              />
            </div>
          </div>
          <div className="InputContainer">
            <div className="AreaInfo">
              From:
              <input
                id="begin"
                className="input"
                type="datetime-local"
                defaultValue={moment().format("YYYY-MM-DDTHH:mm")}
              />
            </div>
            <div className="AreaInfo">
              Until:
              <input
                id="end"
                className="input"
                type="datetime-local"
                defaultValue={moment()
                  .add(1, "days")
                  .format("YYYY-MM-DDTHH:mm")}
              />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
          <Button variant="primary" onClick={moveToOptions}>
            Deploy
          </Button>
        </Modal.Footer>
      </Modal>
      <DeploymentOptions
        showOptions={showOptions}
        closeShowOptions={closeShowOptions}
        options={options}
        appGroup={props.appGroup}
      />
    </>
  );
};

export default OrderApp;
