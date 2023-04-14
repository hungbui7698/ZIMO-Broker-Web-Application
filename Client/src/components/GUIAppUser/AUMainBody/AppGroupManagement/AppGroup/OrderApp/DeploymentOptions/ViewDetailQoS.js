import React, { useState } from "react";
import "./ViewDetail.css";
import CheckIcon from "@material-ui/icons/Check";
import ClearIcon from "@material-ui/icons/Clear";
import { setStar } from "../../../../../../../logik/logik";

const ViewDetailQoS = (props) => {
  const [showDetail, setShowDetail] = useState(false);
  const compareAppQOS = (reqAppGroup, res) => {
    var app = reqAppGroup.find((elem) => elem._id === res._id);
    return (
      app.qos.latency <= res.qos.latency &&
      app.qos.throughput <= res.qos.throughput &&
      app.qos.jitter <= res.qos.jitter
    );
  };
  return (
    <>
      {compareAppQOS(props.reqApps, props.resApp) && <CheckIcon onMouseOver={() => setShowDetail(true)}
          onMouseOut={() => setShowDetail(false)}/>}

      {!compareAppQOS(props.reqApps, props.resApp) && (
        <ClearIcon
          onMouseOver={() => setShowDetail(true)}
          onMouseOut={() => setShowDetail(false)}
        />
      )}
      {showDetail&& (
        <table className="ontop">
     
            <thead>
                <tr>
                <th>Config</th>  
                <th>required</th>
                <th>offer</th>
                </tr>
            </thead>
          <tbody>
            <tr className="row g-0">
              <td className="col">Latency</td>
              <td className="col-4 ">{setStar(props.reqApps.find((elem) => elem._id === props.resApp._id).qos.latency)}</td>
              <td className="col-4 ">{setStar(props.resApp.qos.latency)}</td>
            </tr>
            <tr className="row g-0">
              <td className="col">throughput </td>
              <td className="col-4 ">{setStar(props.reqApps.find((elem) => elem._id === props.resApp._id).qos.throughput)}</td>
              <td className="col-4">{setStar(props.resApp.qos.throughput)}</td>
            </tr>
            <tr className="row g-0">
              <td className="col">Jitter </td>
              <td className="col-4 ">{setStar(props.reqApps.find((elem) => elem._id === props.resApp._id).qos.jitter)}</td>
              <td className="col-4">{setStar(props.resApp.qos.jitter)}</td>
            </tr>
          </tbody>
        </table>
      )}
    </>
  );
};

export default ViewDetailQoS;
