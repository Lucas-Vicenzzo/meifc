import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../assets/styles/global';
import defaultTheme from '../assets/styles/themes/default';

import Mapa from '../components/map';
import Search from '../components/search';
import Header from '../components/header';

import { Container } from './style';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Container>
        <Header />
        <Mapa />
        <Search />
      </Container>
    </ThemeProvider>
  );
};

export default App;
