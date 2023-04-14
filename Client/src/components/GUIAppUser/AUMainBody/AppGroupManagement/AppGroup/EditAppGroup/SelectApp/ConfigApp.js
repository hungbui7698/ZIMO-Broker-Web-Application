import React from "react";

const ConfigApp = (props) => {
  return (
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
                  <td className="col-9">Latency</td>
                  <td className="col-3">
                    <select
                      id={"Latency-" + props.app._id}
                      defaultValue={`${
                        props.app.qos ? props.app.qos.latency : "3"
                      }`}
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                  </td>
                </tr>
                <tr className="row g-0">
                  <td className="col-9">Throughput</td>
                  <td className="col-3">
                    <select
                      id={"Throughput-" + props.app._id}
                      defaultValue={`${
                        props.app.qos ? props.app.qos.throughput : "3"
                      }`}
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                  </td>
                </tr>
                <tr className="row g-0">
                  <td className="col-9">Jitter</td>
                  <td className="col-3">
                    <select
                      id={"Jitter-" + props.app._id}
                      defaultValue={`${
                        props.app.qos ? props.app.qos.jitter : "3"
                      }`}
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                  </td>
                </tr>
                <tr className="row g-0">
                  <td className="col-9">Error rate</td>
                  <td className="col-3">
                    <select
                      id={"Error-" + props.app._id}
                      defaultValue={`${
                        props.app.qos ? props.app.qos.error : "3"
                      }`}
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>

          <td className="col">
            <table className="table table-striped table-hover">
              <tbody>
                <tr className="row g-0">
                  <td className="col-9">Reliability</td>
                  <td className="col-3">
                    <select
                      id={"Reliability-" + props.app._id}
                      defaultValue={`${
                        props.app.nonFunctional
                          ? props.app.nonFunctional.reliability
                          : "3"
                      }`}
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                  </td>
                </tr>
                <tr className="row g-0">
                  <td className="col-9">Availability </td>
                  <td className="col-3">
                    <select
                      id={"Availability-" + props.app._id}
                      defaultValue={`${
                        props.app.nonFunctional
                          ? props.app.nonFunctional.availability
                          : "3"
                      }`}
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                  </td>
                </tr>
                <tr className="row g-0">
                  <td className="col-9">Portability </td>
                  <td className="col-3">
                    <select
                      id={"Portability-" + props.app._id}
                      defaultValue={`${
                        props.app.nonFunctional
                          ? props.app.nonFunctional.portability
                          : "3"
                      }`}
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                  </td>
                </tr>
                <tr className="row g-0">
                  <td className="col-9">Security </td>
                  <td className="col-3">
                    <select
                      id={"Security-" + props.app._id}
                      defaultValue={`${
                        props.app.nonFunctional
                          ? props.app.nonFunctional.security
                          : "3"
                      }`}
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                  </td>
                </tr>
                <tr className="row g-0">
                  <td className="col-9">Usability </td>
                  <td className="col-3">
                    <select
                      id={"Usability-" + props.app._id}
                      defaultValue={`${
                        props.app.nonFunctional
                          ? props.app.nonFunctional.usability
                          : "3"
                      }`}
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                  </td>
                </tr>
                <tr className="row g-0">
                  <td className="col-9">Cost </td>
                  <td className="col-3">
                    <select
                      id={"Cost-" + props.app._id}
                      defaultValue={`${
                        props.app.nonFunctional
                          ? props.app.nonFunctional.cost
                          : "3"
                      }`}
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
          <td className="col">
            <table className="table table-striped table-hover">
              <tbody>
                <tr className="row g-0">
                  <td className="col-6">#Users</td>
                  <td className="col-6">
                    <input
                      id={"#Users-" + props.app._id}
                      type="number"
                      className="userInput"
                      defaultValue={`${
                        props.app.functional
                          ? props.app.functional.numberOfUser
                          : "10"
                      }`}
                    ></input>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default ConfigApp;
