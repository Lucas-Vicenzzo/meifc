import React from "react";

import MapResults from '../../components/mapResults';
import { Container } from "./style";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

export default function SearchResults() {
  return (
    <Container>
      <h1> DA ZAPXAP PESQUISA</h1>
      <Marker position={[40.8054, -74.0241]} draggable={true} animate={true}>
       <Popup>Hey ! I live here</Popup>
      </Marker>
      <MapResults />
    </Container>
  );
};
