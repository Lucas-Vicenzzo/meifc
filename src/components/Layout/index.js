import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Data from '../../assets/data.json';

import Header from "../header";
import Search from "../search";

import Routes from "../../Routes";

export default function Layout() {
  return (
    <BrowserRouter>
      <Header />
      <Routes />
    </BrowserRouter>
  );
};
