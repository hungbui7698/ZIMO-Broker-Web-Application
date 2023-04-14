import React, { useState , useCallback, useRef} from "react";
import { GoogleMap, Marker, Circle, InfoWindow } from "@react-google-maps/api";
import "./Map.css";
import MapStyle from "./MapStyle";
const mapContainerStyle = {
  width: "100%",
  height: "49vh",
  float: "right",
};
const center = {
  lat: 52.51651,
  lng: 13.33578,
};

const options = {
  styles: MapStyle,
};

const Map = (props) => {
  const mapRef = useRef();
  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);
  const [showCircle, setShowCircle] = useState(true);
  return (
    <div className="GoogleMapAppGroupDeployment">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={13}
        center={center}
        options={options}
        onLoad={onMapLoad}
      >
        {props.AllAppGroupList.map((appGroup) => (
          <div key={appGroup._id}>
            <Marker
              position={appGroup.position}
              icon={{
                url: "/Cloud.png",
                scaledSize: new window.google.maps.Size(30, 30),
                origin: new window.google.maps.Point(0, 0),
                anchor: new window.google.maps.Point(15, 15),
              }}
              onClick={() => {
                props.setSelectedAppGroup(appGroup);
              }}
            />

            {showCircle && (
              <Circle
                center={appGroup.position}
                radius={appGroup.radius * 1000}
                options={{
                  strokeColor: "#68b9f2",
                  fillColor: "#2a5777",
                }}
              />
            )}
          </div>
        ))}
        {props.selectedAppGroup ? (
          <InfoWindow
            position={props.selectedAppGroup.position}
            onCloseClick={() => {
              props.setSelectedAppGroup(null);
            }}
          >
            <div>
              <h2>{props.selectedAppGroup.name}</h2>
              <p>{props.setSelectedAppGroup.organization}</p>
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
