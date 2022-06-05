import {
  Container, UserIcon, MapPointerIcon, HomeIcon,
} from "./style";

import userIcon from '../../assets/imgs/user.svg';
import mapPointerIcon from '../../assets/imgs/map-pointer.svg';
import homeIcon from '../../assets/imgs/home.svg';

export default function Header() {
  return (
    <Container>
      <UserIcon>
        <img src={userIcon} alt="" />
      </UserIcon>
      <MapPointerIcon>
        <img src={mapPointerIcon} alt="" />
      </MapPointerIcon>
      <HomeIcon>
        <img src={homeIcon} alt="" />
      </HomeIcon>
    </Container>
  );
};
