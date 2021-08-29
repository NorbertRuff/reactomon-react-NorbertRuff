import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Error } from "./Style/Error";
import axios from "axios";
import {
  H4,
  PokeCardDiv,
  PokeStyles,
  PokeThumbnail,
} from "./Style/PokeCardElements";
import "../static/css/PokeTypes.css";

const PokeCard = (props) => {
  const [error, setError] = useState("");
  const [pokemon, setPokemon] = useState({
    id: null,
    name: null,
    frontpic: null,
    backpic: null,
    dreamWorld: null,
    firstType: null,
    types: [],
  });

  useEffect(() => {
    axios
      .get(props.pokemon.url)
      .then((res) => {
        setPokemon({
          id: res.data.id,
          name: res.data.name,
          frontpic: res.data.sprites.front_default,
          backpic: res.data.sprites.back_default,
          dreamWorld: res.data.sprites.other.dream_world.front_default,
          firstType: res.data.types[0].type.name,
          types: res.data.types,
        });
      })
      .catch((error) => {
        setError(error);
        console.error(
          `The request was made and the server responded
        with a status code that falls out of the range of 2xx` + error.message
        );
      });
  }, [props.pokemon.url]);

  return (
    <React.Fragment>
      {error ? (
        <Error>
          An error occured while fetching the astronauts information. Please try
          again later!
        </Error>
      ) : (
        <PokeCardDiv id={pokemon.firstType} className="pokeCardDiv">
          <Link key={pokemon.id} to={`/pokemons/${pokemon.id}`}>
            <PokeThumbnail backgroundImage={pokemon.dreamWorld} alt="pokemon" />
            <H4> {props.pokemon.name}</H4>

            <PokeStyles>
              {pokemon.types.map((type) => (
                <div
                  key={type.type.name}
                  id={type.type.name + "_badge"}
                  className={"badge"}
                >
                  {" "}
                </div>
              ))}
            </PokeStyles>
          </Link>
        </PokeCardDiv>
      )}
    </React.Fragment>
  );
};

export default PokeCard;
