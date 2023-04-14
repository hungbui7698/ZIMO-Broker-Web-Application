import React, { useState } from "react";
import { GoogleMap, Marker, Circle, InfoWindow } from "@react-google-maps/api";
import "./Map.css";
import MapStyle from "./MapStyle";
const mapContainerStyle = {
  width: "100%",
  height: "85vh",
  float: "right",
};
const center = {
  lat: 52.51651,
  lng: 13.33578,
};

const options = {
  styles: MapStyle,
}

const Map = (props) => {
  const [showCircle,setShowCircle]=useState(true);
  return (
    <div className="GoogleMap">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={13}
        center={center}
        options={options}
        onLoad={props.onMapLoad}
        onClick={props.onMapClick}
      >
        <Marker position={props.searchedLocation} />
        {props.filteredInfrasList.map((infra) => (
          <div key={infra._id}>
            {infra.type === "Network"&&
            <Marker
              position={{lat: +infra.GSTAttributes.areaOfService.lat, lng: +infra.GSTAttributes.areaOfService.lng}}
              icon={
                ({
                  url: "/Atenne.png",
                  scaledSize: new window.google.maps.Size(30, 30),
                  origin: new window.google.maps.Point(0, 0),
                  anchor: new window.google.maps.Point(15, 15),
                })
              }
              onClick={() => {
                props.setSelectedInfra(infra);
                props.setEdit(false);
              }}
            />
            }
            {infra.type === "Cloud"&&
            <Marker
              position={{lat: +infra.areaOfService.lat, lng: +infra.areaOfService.lng}}
              icon={
                ( {
                  url: "/Cloud.png",
                  scaledSize: new window.google.maps.Size(30, 30),
                  origin: new window.google.maps.Point(0, 0),
                  anchor: new window.google.maps.Point(15, 15),
                })
              }
              onClick={() => {
                props.setSelectedInfra(infra);
                props.setEdit(false);
              }}
            />
            }
            {infra.type === "Cloud" && showCircle && <Circle
              center={{lat:+infra.areaOfService.lat,lng:+infra.areaOfService.lng}}
              radius={infra.areaOfService.radius * 1000}
              options={
                 {
                  strokeColor: "#68b9f2",
                  fillColor: "#2a5777",
                }
              }
            />}
            {infra.type === "Network" && showCircle && <Circle
              center={{lat:+infra.GSTAttributes.areaOfService.lat,lng:+infra.GSTAttributes.areaOfService.lng}}
              radius={infra.GSTAttributes.areaOfService.radius * 1000}
            />}
          </div>
        ))}
        {props.selectedInfra && props.selectedInfra.type==="Network" ? (
          <InfoWindow
            position={{lat:+props.selectedInfra.GSTAttributes.areaOfService.lat,lng:+props.selectedInfra.GSTAttributes.areaOfService.lng}}
            onCloseClick={() => {
              props.setSelectedInfra(null);
              props.setEdit(false);
            }}
          >
            <div>
              <h2 className="Intra_Title">{props.selectedInfra.name}</h2>
              <p>{props.selectedInfra.type}</p>
            </div>
          </InfoWindow>
        ) : null}
        {props.selectedInfra && props.selectedInfra.type==="Cloud" ? (
          <InfoWindow
            position={{lat:+props.selectedInfra.areaOfService.lat,lng:+props.selectedInfra.areaOfService.lng}}
            onCloseClick={() => {
              props.setSelectedInfra(null);
              props.setEdit(false);
            }}
          >
            <div>
              <h2 className="Intra_Title">{props.selectedInfra.name}</h2>
              <p>{props.selectedInfra.type}</p>
            </div>
          </InfoWindow>
        ) : null}
        <button className="button" onClick={()=>setShowCircle(!showCircle)}>Coverage</button>
      </GoogleMap>
    </div>
  );
};
export default Map;
