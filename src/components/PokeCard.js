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
  );
};

const PokeThumbnail = styled.div`
  background-image: url(${(props) => props.backgroundImage});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: left;
  width: 14vw;
  height: 17vh;
`;

const PokeCardDiv = styled.div`
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  border: 10px;
  position: relative;
`;

const H4 = styled.h4`
  text-align: center;
  padding: 10px;
  text-transform: capitalize;
  font-size: 26px;
`;
const PokeStyles = styled.div`
  text-align: right;
  text-transform: capitalize;
  position: absolute;
  width: 5rem;
  top: 0;
  left: 76%;
  font-size: 20px;
`;

export default PokeCard;
