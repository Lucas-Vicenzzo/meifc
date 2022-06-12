import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { Container } from './style';

export default function Dropdown({ data, value }) {
  const setValue = useState(value);
  const history = useHistory();

  // formata o termo buscado e interpola na url
  const onSearch = (searchTerm) => {
    setValue(searchTerm);
    const formatedTerm = searchTerm.toLowerCase().replace(/ /g, '-');
    history.push(`/search:${formatedTerm}`);
    console.log("search", searchTerm);
  };
  return (
    <Container>
      {data.filter((item) => {
        const searchTerm = value.toLowerCase();
        const title = item.title.toLowerCase();
        return (
          searchTerm && title.startsWith(searchTerm) && title !== searchTerm
        );
      }).slice(0, 6).map((item) => (
        <div onClick={() => onSearch(item.title)} key={item.id}>
          {item.title}
        </div>
      ))}
    </Container>
  );
};
