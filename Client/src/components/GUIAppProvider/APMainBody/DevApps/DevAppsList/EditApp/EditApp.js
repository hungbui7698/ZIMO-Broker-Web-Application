import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "./EditApp.css";
import SettingsTwoToneIcon from "@material-ui/icons/SettingsTwoTone";
import { serverurl } from "../../../../../../logik/logik";
const EditApp = (props) => {
  const [show, setShow] = useState(false);
  const [deploymentType,setDeploymentType]=useState(props.app.deploymentType);
  const sendInfoToServer = async() => {
    const importData = getAllData();
  
    try {
      fetch(`${serverurl}/app?id=${props.app._id}`, {
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
    var Region = document.getElementById("Region").value;
    var Organization = props.app.organization;
    var CloudFlavour = document.getElementById("CloudFlavour").value;
    var NetworkFlavour = document.getElementById("NetworkFlavour").value;
    var Name = props.app.name;
    var Version = props.app.version;
    var DeploymentType = document.getElementById("DeploymentType").value;
    //var ImageType = document.getElementById("ImageType").value;
    var Path = document.getElementById("Path").value;
    var data = {
      region: Region,
      organization: Organization,
      cloudflavour: CloudFlavour,
      networkflavour: NetworkFlavour,
      name: Name,
      version: Version,
      deploymentType: DeploymentType,
      //ImageType: ImageType,
      Path: Path,
    };
    return data;
  };
  return (
    <div className="EditApp">
      <SettingsTwoToneIcon
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
                  <select id="Region" defaultValue={props.app.region}>
                    <option value="EU">EU</option>
                    <option value="US">US</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>Organization</td>
                <td>{props.app.organization}</td>
              </tr>
              <tr>
                <td>App Name</td>
                <td>
                  {props.app.name}
                </td>
              </tr>
              <tr>
                <td>App Version</td>
                <td>
                  {props.app.version}
                </td>
              </tr>
              <tr>
                <td>Deployment type</td>
                <td>
                  <select id="DeploymentType" onChange={(e) => {
                  setDeploymentType(e.target.value);
                }} defaultValue={props.app.deploymentType}>
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
                  <select id="CloudFlavour" defaultValue={props.app.cloudflavour}>
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
                  <select id="NetworkFlavour" defaultValue={props.app.networkflavour}>
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
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default EditApp;
