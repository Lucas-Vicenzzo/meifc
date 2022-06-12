import Data from '../../assets/data.json';

import Search from '../search';

import { Container, GreetingsHeader, Greetings } from "./style";

import mapPointerIcon from '../../assets/imgs/map-pointer.svg';
import homeIcon from '../../assets/imgs/home.svg';

export default function Header() {
  return (
    <Container>
      <GreetingsHeader>
        <Greetings>
          <welcome>Bem-vindo(a) ao</welcome>
          <h1>meifc</h1>
        </Greetings>
        <div>
          <img src={mapPointerIcon} alt="" />
          <img src={homeIcon} alt="" />
        </div>
      </GreetingsHeader>
      <Search placeholder="Onde Gostaria de Ir?" data={Data} />
    </Container>
  );
};
