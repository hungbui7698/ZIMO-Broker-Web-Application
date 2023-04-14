import React, { useState } from "react";
import "./AppGroup.css";
import {setStar} from "../../../../../logik/logik"
import DeleteIcon from "@material-ui/icons/Delete";

import EditAppGroup from "./EditAppGroup/EditAppGroup";
import OrderApp from "./OrderApp/OrderApp";
const AppGroup = (props) => {
  const [selectedApp, setSelectedApp] = useState();
  
  
  return (
    <tr className="row g-0 AppGroup">
      <td className="col">{props.appGroup.name}</td>
      <td className="col">
        {props.appGroup.apps.map((elem) => (
          <div
            type="button"
            key={elem._id}
            onClick={() => setSelectedApp(elem)}
            className={`${
              selectedApp && selectedApp._id === elem._id ? "active" : ""
            } `}
          >
            {elem.name}[v{elem.version}]
          </div>
        ))}
      </td>
      <td className="col-7">
      {!selectedApp && <h4> select an app to see config</h4>}
        {selectedApp && (
          <>
            <h4>Organization: {selectedApp.organization}</h4>
            <table className="table table-striped table-hover">
              <thead>
                <tr className="row g-0">
                  <th className="col">Qualitiy of Service </th>
                  <th className="col">Non-functional</th>
                  <th className="col">Functional</th>
                </tr>
              </thead>
              <tbody>
                <tr className="row g-0">
                  <td className="col">
                    <table className="table table-striped table-hover">
                      <tbody>
                        <tr className="row g-0">
                          <td className="col">Latency</td>
                          <td className="col-7 text-end">
                            {setStar(selectedApp.qos.latency)}
                          </td>
                        </tr>
                        <tr className="row g-0">
                          <td className="col">Throughput</td>
                          <td className="col-7 text-end">
                            {setStar(selectedApp.qos.throughput)}
                          </td>
                        </tr>
                        <tr className="row g-0">
                          <td className="col">Jitter</td>
                          <td className="col-7 text-end">
                            {setStar(selectedApp.qos.jitter)}
                          </td>
                        </tr>
                        <tr className="row g-0">
                          <td className="col">Error rate</td>
                          <td className="col-7 text-end">
                            {setStar(selectedApp.qos.error)}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>

                  <td className="col">
                    <table className="table table-striped table-hover">
                      <tbody>
                        <tr className="row g-0">
                          <td className="col">reliability</td>
                          <td className="col-7 text-end">
                            {setStar(selectedApp.nonFunctional.reliability)}
                          </td>
                        </tr>
                        <tr className="row g-0">
                          <td className="col">availability </td>
                          <td className="col-7 text-end">
                            {setStar(selectedApp.nonFunctional.availability)}
                          </td>
                        </tr>
                        <tr className="row g-0">
                          <td className="col">portability </td>
                          <td className="col-7 text-end">
                            {setStar(selectedApp.nonFunctional.portability)}
                          </td>
                        </tr>
                        <tr className="row g-0">
                          <td className="col">security </td>
                          <td className="col-7 text-end">
                            {setStar(selectedApp.nonFunctional.security)}
                          </td>
                        </tr>
                        {/*<tr className="row g-0">
                          <td className="col">usability </td>
                          <td className="col-7 text-end">
                            {setStar(selectedApp.nonFunctional.usability)}
                          </td>
                        </tr>*/}
                        <tr className="row g-0">
                          <td className="col">cost </td>
                          <td className="col-7 text-end">
                            {setStar(selectedApp.nonFunctional.cost)}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td className="col">
                    <table className="table table-striped table-hover">
                      <tbody>
                        <tr className="row g-0">
                          <td className="col">#Users</td>
                          <td className="col-7">
                            {selectedApp.functional.numberOfUser}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </>
        )}
      </td>
      <td className="col">
        <OrderApp appGroup={props.appGroup} />
        <EditAppGroup
          appGroup={props.appGroup}
          setSelectedApp={(elem) => setSelectedApp(elem)}
          refresh={props.refresh}
        />
        <DeleteIcon
          className="button"
          type="button"
          onClick={() => props.deleteApp(props.appGroup._id)}
        />
      </td>
    </tr>
  );
};

export default AppGroup;
