import React from "react";
import { Route } from "react-router-dom";

import Mapa from "./components/map";
import SearchResults from "./pages/searchResults";

export default function Routes() {
  return (
    <>
      <Route exact path="/" component={Mapa} />
      <Route path="/meifc" component={Mapa} />
      <Route path="/search:name" component={SearchResults} />
    </>
  );
};
