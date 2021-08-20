import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import "../static/css/PokeTypes.css";

const PokeCard = (props) => {
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
    axios.get(props.pokemon.url).then((res) => {
      setPokemon({
        id: res.data.id,
        name: res.data.name,
        frontpic: res.data.sprites.front_default,
        backpic: res.data.sprites.back_default,
        dreamWorld: res.data.sprites.other.dream_world.front_default,
        firstType: res.data.types[0].type.name,
        types: res.data.types,
      });
    });
  }, [props.pokemon.url]);

  return (
    <PokeCardDiv id={pokemon.firstType} className="pokeCardDiv">
      <Link key={pokemon.id} to={`/pokemons/${pokemon.id}`}>
        <PokeThumbnail backgroundImage={pokemon.dreamWorld} alt="pokemon" />
        <H4> {props.pokemon.name}</H4>

        <PokeStyles>
          Type:
          {pokemon.types.map((type) => (
            <div key={type.type.name}>
              <ul>
                <li>{type.type.name}</li>
              </ul>
            </div>
          ))}
        </PokeStyles>
      </Link>
    </PokeCardDiv>
  );
};

const PokeThumbnail = styled.div`
  background-image: url(${(props) => props.backgroundImage});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 20vh;
  height: 20vh;
`;

const PokeCardDiv = styled.div`
  border: 10px;
`;

const H4 = styled.h4`
  text-align: center;
  padding: 10px;
  text-transform: capitalize;
`;
const PokeStyles = styled.div`
  text-align: center;
  text-transform: capitalize;
`;

export default PokeCard;
