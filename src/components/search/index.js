import { useState } from 'react';
import { Container, SearchInputs } from './style';

import icon from '../../assets/imgs/searchIcon.svg';

export default function Search({ placeholder, data }) {
  const [value, setValue] = useState("");

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const onSearch = (searchTerm) => {
    setValue(searchTerm);
    // função para usar a pesquisa
    console.log("search", searchTerm);
  };

  return (
    <Container>
      <SearchInputs>
        <input type="text" placeholder={placeholder} value={value} onChange={onChange} />
        <button onClick={() => onSearch(value)} type="submit"><i><img src={icon} alt="search icon" /></i></button>
      </SearchInputs>
      <div className="dropdown">
        {data
        .filter((item) => {
          const searchTerm = value.toLowerCase();
          const title = item.title.toLowerCase();

          return (
            searchTerm && title.startsWith(searchTerm) && title !== searchTerm
          );
        })
        .slice(0, 5)
        .map((item) => (
          <div
            onClick={() => onSearch(item.title)}
            className="dropdonw-row"
            key={item.loc}
          >
            {item.title}
          </div>
        ))}
      </div>
    </Container>

  );
};
