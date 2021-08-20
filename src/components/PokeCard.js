import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const PokeCard = (props) => {
  const [pokemon, setPokemon] = useState({
    id: null,
    name: null,
    frontpic: null,
    backpic: null,
    dreamWorld: null,
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
        types: res.data.types,
      });
    });
  }, [props.pokemon.url]);

  return (
    <div className="PokeCard" id={props.pokemon.name}>
      <Link key={pokemon.id} to={`/pokemons/${pokemon.id}`}>
        <img src={pokemon.dreamWorld} alt="pokemon" />
        <p> {props.pokemon.name}</p>

        <div>
          Type:
          {pokemon.types.map((type) => (
            <div key={type.type.name}>
              <ul>
                <li>{type.type.name}</li>
              </ul>
            </div>
          ))}
        </div>
      </Link>
    </div>
  );
};

export default PokeCard;
