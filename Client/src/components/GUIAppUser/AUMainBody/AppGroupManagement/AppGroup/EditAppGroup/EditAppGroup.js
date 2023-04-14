import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "./EditAppGroup.css";
import SettingsTwoToneIcon from "@material-ui/icons/SettingsTwoTone";
import SelectApp from "./SelectApp/SelectApp";
import { serverurl } from "../../../../../../logik/logik";
const EditAppGroup = (props) => {
  const [show, setShow] = useState(false);
  const closeModal = () => {
    setShow(false);
  };

  const openModal = () => {
    setShow(true);
    setSelected(props.appGroup.apps);
  };
  const [appGroupData, setAppGroupData] = useState();
  const [selected, setSelected] = useState();

  const getAppConfigData = (app) => {
    var Latency = document.getElementById("Latency-" + app._id).value;
    var Throughput = document.getElementById("Throughput-" + app._id).value;
    var Jitter = document.getElementById("Jitter-" + app._id).value;
    var Error = document.getElementById("Error-" + app._id).value;
    var Reliability = document.getElementById("Reliability-" + app._id).value;
    var Availability = document.getElementById("Availability-" + app._id).value;
    var Portability = document.getElementById("Portability-" + app._id).value;
    var Security = document.getElementById("Security-" + app._id).value;
    var Usability = document.getElementById("Usability-" + app._id).value;
    var Cost = document.getElementById("Cost-" + app._id).value;
    var Users = document.getElementById("#Users-" + app._id).value;

    var data;
    data = {
      _id: app._id,
      name: app.name,
      version: app.version,
      organization: app.organization,
      qos: { latency: Latency, throughput: Throughput, jitter: Jitter, error:Error },
      nonFunctional: {
        reliability: Reliability,
        availability: Availability,
        portability: Portability,
        security: Security,
        usability: Usability,
        cost: Cost,
      },
      functional: { numberOfUser: Users },
    };

    return data;
  };
  const getAllData = () => {
    var name = document.getElementById("EditAppGroup").value;
    var i = 0;
    var apps = [];
    for (i; i < selected.length; i++) {
      apps.push(getAppConfigData(selected[i]));
    }
    var AppGroup = {
      user: props.user,
      name: name,
      apps: apps,
    };
    return AppGroup;
  };

  const sendInfoToServer = async () => {
    const importData = getAllData();
    try {
      fetch(`${serverurl}/appgroup?id=${props.appGroup._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(importData),
      }).then(() => {
        props.refresh();
        props.setSelectedApp();
        closeModal();
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="EditAppGroup">
      <SettingsTwoToneIcon
        type="button"
        className="button"
        onClick={() => openModal()}
      />

      <Modal size="xl" scrollable={true} show={show} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit AppGroup's Information <input
            id="EditAppGroup"
            placeholder="App Group Name"
            defaultValue={props.appGroup.name}
          /></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
          <SelectApp
            appGroupData={appGroupData}
            setAppGroupData={(elem) => setAppGroupData(elem)}
            selected={selected}
            setSelected={(elem) => setSelected(elem)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
          <Button variant="primary" onClick={sendInfoToServer}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default EditAppGroup;
