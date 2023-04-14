import React, { useState,useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import "./EditAppInstance.css";
import SettingsTwoToneIcon from "@material-ui/icons/SettingsTwoTone";
import { serverurl } from "../../../../../../logik/logik";
const EditAppInstance = (props) => {
  const [show, setShow] = useState(false);
  const [cloudFlavourList, setCloudFlavourList] = useState([]);
  const [networkFlavourList, setNetworkFlavourList] = useState([]);

  const sendInfoToServer = async() => {
    const importData = getAllData();
  
    try {
      fetch(`${serverurl}/appinstance?id=${props.appInstance._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(importData),
      }).then(() => {
        setShow(false);
        props.refresh();
      });
    } catch (error) {
      console.log(error);
    }
  };
  const getAllData = () => {
    var zone = document.getElementById("Zone").value;
    var CloudFlavour = document.getElementById("CloudFlavour").value;
    var NetworkFlavour = document.getElementById("NetworkFlavour").value;
    var data = {
      
      zone: zone,
      cloudflavour: cloudFlavourList.find(elem=> elem._id===CloudFlavour),
      networkflavour: networkFlavourList.find(elem=> elem._id===NetworkFlavour),
    };

    return data;
  };
  useEffect(() => {
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
      fetch(`${serverurl}/networkflavour`)
        .then((response) => response.json())
        .then((data) => {
          setNetworkFlavourList(data);
        });
    } catch (error) {
      console.log("error!");
    }
  }, [props.user]);
  return (
    <div className="EditAppInstance">
      <SettingsTwoToneIcon
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
                  <select id="Zone" defaultValue={props.appInstance.zone}>
                    <option value="Berlin">Berlin</option>
                    <option value="Hamburg">Hamburg</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>App[Ver]</td>
                <td>
                  {props.appInstance.app.name}[v{props.appInstance.app.version}]
                </td>
              </tr>
              <tr>
                <td>Organization</td>
                <td>{props.appInstance.app.organization}</td>
              </tr>
              <tr>
                <td>Cloud Flavour</td>
                <td>
                  <select id="CloudFlavour" defaultValue={props.appInstance.cloudflavour._id}>
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
                  <select id="NetworkFlavour" defaultValue={props.appInstance.networkflavour._id}>
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
          <Button variant="primary" onClick={sendInfoToServer}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default EditAppInstance;
