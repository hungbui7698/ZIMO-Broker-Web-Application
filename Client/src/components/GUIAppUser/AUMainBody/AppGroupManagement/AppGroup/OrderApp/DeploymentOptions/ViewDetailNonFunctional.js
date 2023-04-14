import React, { useState } from "react";
import "./ViewDetail.css";
import CheckIcon from "@material-ui/icons/Check";
import ClearIcon from "@material-ui/icons/Clear";
import { setStar } from "../../../../../../../logik/logik";

const ViewDetailNonFunctional = (props) => {
  const [showDetail, setShowDetail] = useState(false);
  const compareAppNonFunctional = (reqAppGroup, res) => {
    var app = reqAppGroup.find((elem) => elem._id === res._id);
    return (
      app.nonFunctional.reliability <= res.nonFunctional.reliability &&
      app.nonFunctional.availability <= res.nonFunctional.availability &&
      app.nonFunctional.portability <= res.nonFunctional.portability &&
      app.nonFunctional.security <= res.nonFunctional.security &&
      app.nonFunctional.usability <= res.nonFunctional.usability&&
      app.nonFunctional.cost <= res.nonFunctional.cost

    );
  };
  return (
    <>
      {compareAppNonFunctional(props.reqApps, props.resApp) && <CheckIcon onMouseOver={() => setShowDetail(true)}
          onMouseOut={() => setShowDetail(false)}/>}

      {!compareAppNonFunctional(props.reqApps, props.resApp) && (
        <ClearIcon
          onMouseOver={() => setShowDetail(true)}
          onMouseOut={() => setShowDetail(false)}
        />
      )}
      {showDetail&& (
        <table className="ontop ">
     
            <thead>
                <tr>
                <th>Config</th>  
                <th>required</th>
                <th>offer</th>
                </tr>
            </thead>
          <tbody>
            <tr className="row g-0">
              <td className="col">Reliability</td>
              <td className="col-4 ">{setStar(props.reqApps.find((elem) => elem._id === props.resApp._id).nonFunctional.reliability)}</td>
              <td className="col-4 ">{setStar(props.resApp.nonFunctional.reliability)}</td>
            </tr>
            <tr className="row g-0">
              <td className="col">Availability </td>
              <td className="col-4 ">{setStar(props.reqApps.find((elem) => elem._id === props.resApp._id).nonFunctional.availability )}</td>
              <td className="col-4">{setStar(props.resApp.nonFunctional.availability )}</td>
            </tr>
            <tr className="row g-0">
              <td className="col">Portability </td>
              <td className="col-4 ">{setStar(props.reqApps.find((elem) => elem._id === props.resApp._id).nonFunctional.portability)}</td>
              <td className="col-4">{setStar(props.resApp.nonFunctional.portability)}</td>
            </tr>
            <tr className="row g-0">
              <td className="col">Security </td>
              <td className="col-4 ">{setStar(props.reqApps.find((elem) => elem._id === props.resApp._id).nonFunctional.security)}</td>
              <td className="col-4">{setStar(props.resApp.nonFunctional.security)}</td>
            </tr>
            <tr className="row g-0">
              <td className="col">Usability </td>
              <td className="col-4 ">{setStar(props.reqApps.find((elem) => elem._id === props.resApp._id).nonFunctional.usability)}</td>
              <td className="col-4">{setStar(props.resApp.nonFunctional.usability)}</td>
            </tr>
            <tr className="row g-0">
              <td className="col">Cost </td>
              <td className="col-4 ">{setStar(props.reqApps.find((elem) => elem._id === props.resApp._id).nonFunctional.cost)}</td>
              <td className="col-4">{setStar(props.resApp.nonFunctional.cost)}</td>
            </tr>
          </tbody>
        </table>
      )}
    </>
  );
};

export default ViewDetailNonFunctional;
