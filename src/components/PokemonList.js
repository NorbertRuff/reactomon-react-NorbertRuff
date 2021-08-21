import React, { useEffect, useState } from "react";
import PokeCard from "./PokeCard";
import axios from "axios";
import styled from "styled-components";
import NextButtonImg from "../static/img/next.png";
import PrevButtonImg from "../static/img/prev.png";

const PokemonList = () => {
  const url = "https://pokeapi.co/api/v2/pokemon?limit=15";

  const [pokemons, setPokemons] = useState([]);
  const [next, setNext] = useState([]);
  const [prev, setPrev] = useState([]);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setPokemons(res.data.results);
        setNext(res.data.next);
        setPrev(res.data.previous);
      })
      .catch((error) => {
        console.error(
          `The request was made and the server responded
        with a status code that falls out of the range of 2xx` + error.message
        );
      });
  }, [url]);

  const fetchNewPokemons = (newUrl) => {
    axios
      .get(newUrl)
      .then((res) => {
        setPokemons(res.data.results);
        setNext(res.data.next);
        setPrev(res.data.previous);
      })
      .catch((error) => {
        console.error(
          `The request was made and the server responded
        with a status code that falls out of the range of 2xx` + error.message
        );
      });
  };

  return (
    <MainContainer>
      <PageNav>
        {prev === null ? (
          ""
        ) : (
          <NavButton
            backgroundImage={PrevButtonImg}
            onClick={() => fetchNewPokemons(prev)}
          ></NavButton>
        )}
      </PageNav>
      <CardContainer>
        {pokemons.map((pokemon) => (
          <PokeCard key={pokemon.name} pokemon={pokemon}></PokeCard>
        ))}
      </CardContainer>
      <PageNav>
        {next === null ? (
          ""
        ) : (
          <NavButton
            backgroundImage={NextButtonImg}
            onClick={() => fetchNewPokemons(next)}
          ></NavButton>
        )}
      </PageNav>
    </MainContainer>
  );
};

const PageNav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavButton = styled.button`
  background-image: url(${(props) => props.backgroundImage}),
    linear-gradient(#63b8ee, #468ccf);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 100px;
  height: 100px;
  border: 2px solid #3866a3;
  color: #14396a;
  border-radius: 20px;
  box-shadow: inset 0px 1px 0px 0px #bee2f9;
  text-shadow: inset 0px 1px 0px #7cacde;
  :hover {
    background-image: url(${(props) => props.backgroundImage}),
      linear-gradient(#468ccf, #63b8ee);
  }
`;

const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 5% 90% 5%;
  grid-area: content;
  justify-content: center;
`;

const CardContainer = styled.div`
  display: flex;
  flex: 1;
  gap: 5px;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: auto;
`;

export default PokemonList;
