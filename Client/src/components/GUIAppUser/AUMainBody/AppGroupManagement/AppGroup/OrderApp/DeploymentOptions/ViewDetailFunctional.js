import React, { useState } from "react";
import "./ViewDetail.css";
import CheckIcon from "@material-ui/icons/Check";
import ClearIcon from "@material-ui/icons/Clear";


const ViewDetailFunctional = (props) => {
  const [showDetail, setShowDetail] = useState(false);
  const compareAppFunctional = (reqAppGroup, res) => {
    var app = reqAppGroup.find((elem) => elem._id === res._id);
    return (
      app.functional.numberOfUser <= res.functional.numberOfUser
    );
  };
  return (
    <>
      {compareAppFunctional(props.reqApps, props.resApp) && <CheckIcon onMouseOver={() => setShowDetail(true)}
          onMouseOut={() => setShowDetail(false)}/>}

      {!compareAppFunctional(props.reqApps, props.resApp) && (
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
              <td className="col">Users</td>
              <td className="col-4 ">{props.reqApps.find((elem) => elem._id === props.resApp._id).functional.numberOfUser}</td>
              <td className="col-4 ">{props.resApp.functional.numberOfUser}</td>
            </tr>
            
          </tbody>
        </table>
      )}
    </>
  );
};

export default ViewDetailFunctional;
