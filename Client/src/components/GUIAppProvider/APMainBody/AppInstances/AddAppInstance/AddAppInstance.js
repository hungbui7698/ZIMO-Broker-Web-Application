import React, { useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import AddCircleOutlineTwoToneIcon from "@material-ui/icons/AddCircleOutlineTwoTone";
import "./AddAppInstance.css";
import { serverurl } from "../../../../../logik/logik";
const AddAppInstance = (props) => {
  const [appList, setAppList] = useState([]);
  const [cloudFlavourList, setCloudFlavourList] = useState([]);
  const [networkFlavourList, setNetworkFlavourList] = useState([]);

  const sendInfoToServer = async() => {
    const importData = getAllData();
    try {
      fetch(`${serverurl}/appinstance`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(importData),
      }).then(() => {
        setShow(false);
        props.refresh();
      });
    } catch (error) {
      console.log(error);
    
  };
}
  const getAllData = () => {
    var zone = document.getElementById("Zone").value;
    var app = document.getElementById("App").value;
    var organization = props.user;
    var CloudFlavour = document.getElementById("CloudFlavour").value;
    var NetworkFlavour = document.getElementById("NetworkFlavour").value;
    var data = {
      
      zone: zone,
      organization:organization,
      app: appList.find(elem=> elem._id===app),
      cloudflavour: cloudFlavourList.find(elem=> elem._id===CloudFlavour),
      networkflavour: networkFlavourList.find(elem=> elem._id===NetworkFlavour),
      
    };

    return data;
  };


  useEffect(() => {
    try {
      fetch(`${serverurl}/app?organization=${props.user}`)
        .then((response) => response.json())
        .then((data) => {
          setAppList(data);
        });
    } catch (error) {
      console.log("error!");
    }
    try {
      fetch(`${serverurl}/cloudflavour`)
        .then((response) => response.json())
        .then((data) => {
          setCloudFlavourList(data);
        });
    } catch (error) {
      console.log("error!");
    }
    try {
      fetch(`${serverurl}/networkflavour?organization=${props.user}`)
        .then((response) => response.json())
        .then((data) => {
          setNetworkFlavourList(data);
        });
    } catch (error) {
      console.log("error!");
    }
  }, [props.user]);




  const [show, setShow] = useState(false);
  return (
    <div className="AddAppInstance">
      <AddCircleOutlineTwoToneIcon
        type="button"
        className="AddButton"
        onClick={() => setShow(true)}
      />
      <Modal scrollable={true} show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>App instance's information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <table className="table">
            <tbody>
              <tr>
                <td>Zone</td>
                <td>
                  <select id="Zone">
                    <option value="Berlin">Berlin</option>
                    <option value="Hamburg">Hamburg</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>App[Ver]</td>
                <td>
                  <select id="App">
                    {appList.map((app) => (
                      <option value={app._id} key={app._id} >
                        {app.name}[v{app.version}]
                      </option>
                    ))}
                  </select>
                </td>
              </tr>
              <tr>
                <td>Organization</td>
                <td>{props.user}</td>
              </tr>
              <tr>
                <td>Cloud Flavour</td>
                <td>
                  <select id="CloudFlavour">
                    {cloudFlavourList.map((cloudflavour) => (
                      <option value={cloudflavour._id} key={cloudflavour._id}>
                        {cloudflavour.name}
                        
                      </option>
                    ))}
                  </select>
                </td>
              </tr>
              <tr>
                <td>Network Flavour</td>
                <td>
                  <select id="NetworkFlavour">
                    {networkFlavourList.map((networkflavour) => (
                      <option value={networkflavour._id} key={networkflavour._id}>
                        {networkflavour.name}
                      </option>
                    ))}
                  </select>
                </td>
              </tr>
            </tbody>
          </table>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={() => sendInfoToServer()} >Create</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddAppInstance;
