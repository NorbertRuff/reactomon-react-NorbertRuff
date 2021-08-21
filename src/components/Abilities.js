import React, { useEffect, useState } from "react";
import AbilityCard from "./AbilityCard";
import styled from "styled-components";
import axios from "axios";

const Abilities = () => {
  const url = "https://pokeapi.co/api/v2/ability?limit=15";

  const [abilities, setAbilities] = useState([]);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setAbilities(res.data.results);
      })
      .catch((error) => {
        console.error(
          `The request was made and the server responded
          with a status code that falls out of the range of 2xx` + error.message
        );
      });
  }, []);

  return (
    <AbilityCardContainer>
      {abilities.map((ability) => (
        <AbilityCard key={ability.name} ability={ability} />
      ))}
    </AbilityCardContainer>
  );
};

const AbilityCardContainer = styled.div`
  grid-area: content;
  display: flex;
  flex: 1;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 5px;
  width: 90%;
  margin: auto;
`;

export default Abilities;
