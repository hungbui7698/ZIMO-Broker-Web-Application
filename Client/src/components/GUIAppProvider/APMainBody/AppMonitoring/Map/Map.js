import React, { useState } from "react";
import { GoogleMap, Marker, Circle, InfoWindow } from "@react-google-maps/api";
import "./Map.css";
import MapStyle from "./MapStyle";
const mapContainerStyle = {
  width: "100%",
  height: "49vh",
  float: "left",
};
const center = {
  lat: 52.51651,
  lng: 13.33578,
};

const options = {
  styles: MapStyle,
};

const Map = (props) => {
  const [showCircle, setShowCircle] = useState(true);
  return (
    <div className="GoogleMapAppInstance">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={12}
        center={center}
        options={options}
        onLoad={props.onMapLoad}
        onClick={props.onMapClick}
      >
        {props.AppInstanceList.map((appInstance) => (
          <div key={appInstance._id}>
            <Marker
              position={appInstance.cloud.position}
              icon={{
                url: "/Cloud.png",
                scaledSize: new window.google.maps.Size(30, 30),
                origin: new window.google.maps.Point(0, 0),
                anchor: new window.google.maps.Point(15, 15),
              }}
              onClick={() => {
                props.setSelectedAppInstance(appInstance);
              }}
            />

            {(appInstance.status==="scheduled"||appInstance.status==="running")&&showCircle && (
              <Circle
                center={appInstance.network.position}
                radius={appInstance.network.radius * 1000}
                options={{}}
              />
            )}
          </div>
        ))}
        {props.selectedAppInstance ? (
          <InfoWindow
            position={props.selectedAppInstance.cloud.position}
            onCloseClick={() => {
              props.setSelectedAppInstance(null);
            }}
          >
            <div>
              <h2>{props.selectedAppInstance.name}</h2>
              <p>{props.selectedAppInstance.organization}</p>
            </div>
          </InfoWindow>
        ) : null}
        <button
          className="button"
          variant="primary"
          onClick={() => setShowCircle(!showCircle)}
        >
          Coverage
        </button>
      </GoogleMap>
    </div>
  );
};
export default Map;
