import { useState } from 'react';
import { useHistory, withRouter } from 'react-router-dom';
import { Container, SearchInputs } from './style';

import Dropdown from '../dropdown';
import icon from '../../assets/imgs/searchIcon.svg';

function Search({ placeholder, data }) {
  const [value, setValue] = useState("");
  const history = useHistory();
  const onChange = (event) => {
    setValue(event.target.value);
  };

  // formata o termo buscado e interpola na url
  const onSearch = (searchTerm) => {
    setValue(searchTerm);
    const formatedTerm = searchTerm.toLowerCase().replace(/ /g, '-');
    history.push(`/search:${formatedTerm}`);
  };

  return (
    <Container>
      <SearchInputs>
        <input type="text" placeholder={placeholder} value={value} onChange={onChange} />
        <button onClick={() => onSearch(value)} type="submit"><i><img src={icon} alt="search icon" /></i></button>
      </SearchInputs>
      <Dropdown data={data} value={value} />
    </Container>

  );
};
export default withRouter(Search);
