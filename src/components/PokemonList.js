import React, { useEffect, useState } from "react";
import PokeCard from "./PokeCard";
import axios from "axios";
import styled from "styled-components";

const PokemonList = () => {
  const url = "https://pokeapi.co/api/v2/pokemon?limit=100";

  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    axios.get(url).then((res) => {
      setPokemons(res.data.results);
    });
  }, []);

  return (
    <CardContainer>
      {pokemons.map((pokemon) => (
        <PokeCard key={pokemon.name} pokemon={pokemon}></PokeCard>
      ))}
    </CardContainer>
  );
};

const CardContainer = styled.div`
  grid-area: content;
  display: flex;
  flex: 1;
  gap: 10px;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: auto;
`;

export default PokemonList;
