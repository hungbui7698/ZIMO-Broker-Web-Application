import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "./AddApp.css";
import AddCircleOutlineTwoToneIcon from "@material-ui/icons/AddCircleOutlineTwoTone";
import { serverurl } from "../../../../../logik/logik";
const AddApp = (props) => {
  const [show, setShow] = useState(false);
  const [deploymentType,setDeploymentType]=useState("Docker");
  const sendInfoToServer = async() => {
    const importData = getAllData();
  
    try {
      fetch(`${serverurl}/app`, {
        method: "POST",
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
    var Region = document.getElementById("Region").value;
    var Organization = props.user;
    var CloudFlavour = document.getElementById("CloudFlavour").value;
    var NetworkFlavour = document.getElementById("NetworkFlavour").value;
    var Name = document.getElementById("Name").value;
    var Version = document.getElementById("Version").value;
    var DeploymentType = document.getElementById("DeploymentType").value;
    //var ImageType = document.getElementById("ImageType").value;
    var Path = document.getElementById("Path").value;
    var data = {
      Region: Region,
      Organization: Organization,
      CloudFlavour: CloudFlavour,
      NetworkFlavour: NetworkFlavour,
      Name: Name,
      Version: Version,
      DeploymentType: DeploymentType,
      //ImageType: ImageType,
      Path: Path,
    };

    return data;
  };
  return (
    <div className="AddApp">
      <AddCircleOutlineTwoToneIcon
        type="button"
        className="AddButton"
        onClick={() => setShow(true)}
      />

      <Modal scrollable={true} show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>App's information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <table className="table">
            <tbody>
              <tr>
                <td>Region</td>
                <td>
                  <select id="Region">
                    <option value="EU">EU</option>
                    <option value="US">US</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>Organization</td>
                <td>{props.user}</td>
              </tr>
              <tr>
                <td>App Name</td>
                <td>
                  <input id="Name" type="text" />
                </td>
              </tr>
              <tr>
                <td>App Version</td>
                <td>
                  <input id="Version" type="number" />
                </td>
              </tr>
              <tr>
                <td>Deployment type</td>
                <td>
                  <select id="DeploymentType" onChange={(e) => {
                  setDeploymentType(e.target.value);
                }} defaultValue="Docker">
                    <option value="Docker">Docker</option>
                    <option value="K8s">Kubernetes</option>
                    <option value="VM">VM</option>
                    <option value="Helm">Helm</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>Image type</td>

                <td>
                {deploymentType}
                </td>
              </tr>
              <tr>
                <td>Default Cloud Flavour</td>

                <td>
                  <select id="CloudFlavour">
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>Default Network Flavour</td>

                <td>
                  <select id="NetworkFlavour">
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>Path</td>
                <td>
                  <input id="Path" type="text" />
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
            Create
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddApp;
