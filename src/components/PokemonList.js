import React, { useEffect, useState } from "react";
import PokeCard from "./PokeCard";
import axios from "axios";
import {
  CardContainer,
  MainContainer,
  NavButton,
  PageNav,
} from "./Style/PokemonListElements";
import { Error } from "./Style/Error";
import NextButtonImg from "../static/img/next.png";
import PrevButtonImg from "../static/img/prev.png";

const PokemonList = (props) => {
  const url = "https://pokeapi.co/api/v2/pokemon?limit=15";

  const [pokemons, setPokemons] = useState([]);
  const [next, setNext] = useState([]);
  const [prev, setPrev] = useState([]);
  const [error, setError] = useState("");
  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setPokemons(res.data.results);
        setNext(res.data.next);
        setPrev(res.data.previous);
      })
      .catch((error) => {
        setError(error.message);
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
    <React.Fragment>
      {error ? (
        <Error>
          An error occured while fetching the astronauts information. Please try
          again later!
        </Error>
      ) : (
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
              <PokeCard
                key={pokemon.name}
                pokemon={pokemon}
                theme={props.theme}
              ></PokeCard>
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
      )}
    </React.Fragment>
  );
};

export default PokemonList;
