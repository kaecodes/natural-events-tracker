import React from "react";
import GoogleMapReact from "google-map-react";

const Map = ({ center, zoom }) => {
  return (
    <div className="w-screen h-screen">
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY }}
        defaultCenter={center}
        defaultZoom={zoom}
      ></GoogleMapReact>
    </div>
  );
};

Map.defaultProps = {
  center: {
    lat: 33.680984,
    lng: -117.170700,
  }, 
  zoom: 6, 
}; 

export default Map;
