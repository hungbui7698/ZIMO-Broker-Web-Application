import React, { useState,useCallback, useRef } from "react";
import { GoogleMap, Marker, Circle } from "@react-google-maps/api";
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
  const [showCircle, setShowCircle] = useState(true);
  const mapRef = useRef();
  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);
  return (
    <div className="GoogleMapSelectArea">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={13}
        center={center}
        options={options}
        onLoad={onMapLoad}
        onClick={props.onMapClick}
      >
        {props.selectedLat && props.selectedLng && (
          <Marker
            position={{ lat: +props.selectedLat, lng: +props.selectedLng }}
            
          />
        )}
        {props.selectedLat && props.selectedLng && showCircle && (
          <Circle
            center={{ lat: +props.selectedLat, lng: +props.selectedLng }}
            radius={props.radius * 1000}
            options={{
              strokeColor: "#68b9f2",
              fillColor: "#2a5777",
            }}
          />
        )}
        )
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
