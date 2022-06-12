import React, { useRef, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import L from "leaflet";
import { Map, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import { Container } from "./style";

import Data from '../../assets/data.json';

const defaultCenter = [-27.016526114032356, -48.657304712972156];
const defaultZoom = 20;
const defaultMinZoom = 14;
const bounds = [
  [-27.030384113005965, -48.68121530743459],
  [-26.99815597827438, -48.64297243152386],
];

export default function MapResults() {
  const mapRef = useRef();
  useEffect(() => {
    const { current = {} } = mapRef;
    const { leafletElement: map } = current;

    // Commenting this out to avoid blocked location requests
    // when embedded on the Egghead lesson page. To give this
    // a try, simply uncomment out the function call below

    // map.locate({
    //   setView: true,
    // });

    map.on("locationfound", handleOnLocationFound);

    // Additional event handler for listening for
    // errors in finding someone's location

    map.on("locationerror", handleOnLocationError);

    return () => {
      map.off("locationfound", handleOnLocationFound);
      map.off("locationerror", handleOnLocationError);
    };
  }, []);

  const params = useParams();
  const { id } = params;
  console.log(id)


  /**
   * handleOnLocationFound
   * @param {object} event Leaflet LocationEvent object
   */

  function handleOnLocationFound(event) {
    const { current = {} } = mapRef;
    const { leafletElement: map } = current;

    const latlng = event.latlng;
    const radius = event.accuracy;
    const circle = L.circle(latlng, radius);

    circle.addTo(map);
  }

  /**
   * handleOnLocationError
   * @param {object} error Leaflet ErrorEvent object
   */

  function handleOnLocationError(error) {
    alert(`Unable to determine location: ${error.message}`);
  }

  return (
    <Container>
      <Map
        ref={mapRef}
        center={[-26.99815597827438, -48.64297243152386]}
        minZoom={defaultMinZoom}
        zoom={defaultZoom}
        maxBounds={[
          // south west
          [-27.030384113005965, -48.68121530743459],
          // north east
          [-26.99815597827438, -48.64297243152386],
        ]}
      >
        <TileLayer
          url="http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}"
          subdomains={["mt0", "mt1", "mt2", "mt3"]}
          maxZoom={21}
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
      </Map>
    </Container>
  );
};
