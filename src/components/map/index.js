import React, { useRef, useEffect } from "react";
import L from "leaflet";
import { Map, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import { Container } from "./style";

const defaultCenter = [-27.016526114032356, -48.657304712972156];
const defaultZoom = 20;
const defaultMinZoom = 14;
const bounds = [
  [-27.030384113005965, -48.68121530743459],
  [-26.99815597827438, -48.64297243152386],
];

function Mapa() {
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
        center={defaultCenter}
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
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        // url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        url="https://supreme-carnival-v7rgppw7jwpcpwgj-5000.app.github.dev/{z}/{x}/{y}.png"
        />
      </Map>
    </Container>
  );
};

export default Mapa;
