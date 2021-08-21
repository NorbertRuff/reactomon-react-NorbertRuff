import React, { useEffect, useState } from "react";
import TypeCard from "./TypeCard";

import axios from "axios";
import styled from "styled-components";

const TypeList = () => {
  const url = "https://pokeapi.co/api/v2/type";

  const [types, setTypes] = useState([]);

  useEffect(() => {
    axios.get(url).then((res) => {
      setTypes(res.data.results);
    });
  }, []);

  return (
    <TypeCardContainer>
      {types.map((type) => (
        <TypeCard key={type.name} type={type} />
      ))}
    </TypeCardContainer>
  );
};

const TypeCardContainer = styled.div`
  grid-area: content;
  display: flex;
  flex: 1;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;
  width: 90%;
  margin: auto;
`;

export default TypeList;
