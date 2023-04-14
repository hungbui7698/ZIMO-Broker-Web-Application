import  { React } from "react";
import { Button, Modal } from "react-bootstrap";
import "./DeploymentOptions.css";
import {serverurl} from "../../../../../../../logik/logik" 
import ViewDetailQoS from "./ViewDetailQoS";
import ViewDetailFunctional from "./ViewDetailFunctional";
import ViewDetailNonFunctional from "./ViewDetailNonFunctional";


const DeploymentOptions = (props) => {
  
  let deployBtnHandler = (option) => {
    console.log(option.apps[0].cloud._id)
    console.log(option.apps[0].network.delay)
    console.log(option.apps[0].network.uplink)
    console.log(option.apps[0].network.downlink)
    fetch(`${serverurl}/slicerequest`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        sliceconfig: {
          client_id: 1,
          delay: option.apps[0].network.delay,
          uplink_slice: option.apps[0].network.uplink,
          downlink_slice: option.apps[0].network.downlink,
          server_id:option.apps[0].cloud._id
        }
      })
    })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      props.closeShowOptions();
    })
    .catch(err => {
      console.log(err);
    })
  }

  return (
    
    <Modal
      className="DeploymentOptions"
      size="xl"
      scrollable={true}
      show={props.showOptions}
      onHide={props.closeShowOptions}
    >
      <Modal.Header closeButton>
        <Modal.Title>Deployment Options:</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Select deployment option</h4>
        <table className="table table-striped table-hover">
          <thead>
            <tr className="row g-0">
              <th className="col-1 text-center">Options</th>
              <th className="col text-center">Deployment Information</th>
            </tr>
          </thead>
          <tbody className="DeploymentOptionsBody">
            {props.options.map((option, index) => (
              <tr className="row g-0" key={option._id}>
                <td className="col-1 text-center ButtonContainer">
                  Option {index + 1}
                  <Button
                    variant="primary"
                    className="bottom"

                    onClick={()=>deployBtnHandler(option)}
                  >
                    Deploy
                  </Button>
                </td>

                <td className="col">
                  <table className="table table-striped table-hover">
                    <thead>
                      <tr className="row g-0">
                        <th className="col-2">Apps</th>
                        <th className="col-3">Network</th>
                        <th className="col-3">Cloud</th>
                        <th className="col-4">Config</th>
                      </tr>
                    </thead>
                    <tbody>
                      {option.apps.map((app) => (
                        <tr className="row g-0" key={app._id}>
                          <td className="col-2">{app.name}</td>
                          <td className="col-3">{app.network.provider}</td>
                          <td className="col-3">{app.cloud.provider}</td>
                          <td className="col-4">
                            <table className="table table-striped table-hover">
                              <tbody>
                                <tr className="row g-0">
                                  <td className="col">Qualitiy of Service</td>
                                  <td className="col-2 windowcontainer">
                                    <ViewDetailQoS
                                      reqApps={props.appGroup.apps}
                                      resApp={app}
                                    />
                                  </td>
                                </tr>
                                <tr className="row g-0">
                                  <td className="col">Non-Functional </td>
                                  <td className="col-2 windowcontainer">
                                    <ViewDetailNonFunctional
                                      reqApps={props.appGroup.apps}
                                      resApp={app}
                                    />
                                  </td>
                                </tr>

                                <tr className="row g-0">
                                  <td className="col">Functional </td>
                                  <td className="col-2 windowcontainer">
                                    <ViewDetailFunctional
                                      reqApps={props.appGroup.apps}
                                      resApp={app}
                                    />
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Modal.Body>
    </Modal>
  );
};

export default DeploymentOptions;
