import React, { useState, useContext } from "react";
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../assets/styles/global';
import defaultTheme from '../assets/styles/themes/default';

import Mapa from '../components/map';
import Search from '../components/search';
import Header from '../components/header';

import Data from '../assets/data.json';

import { Container } from './style';

// const SearchContext = React.createContext({ value: "", })

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Container>
        <Search placeholder="Onde Gostaria de Ir?" data={Data} />
        <Mapa />
        <Header />
      </Container>
    </ThemeProvider>
  );
};

export default App;
