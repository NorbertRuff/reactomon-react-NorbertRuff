import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const PokeCard = (props) => {
  // const pokeId = props.pokemon.url.split("/").slice(-2).slice(0, -1);
  const [pokeId, setPokeId] = useState();

  useEffect(() => {
    setPokeId(props.pokemon.url.split("/").slice(-2).slice(0, -1));
  }, [props.pokemon.url]);

  return (
    <div className="PokeCard" id={props.pokemon.name}>
      <Link key={props.pokemon.name} to={`/pokemons/${pokeId}`}>
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/imgbot/sprites/pokemon/${pokeId}.png`}
          alt="pokemon"
        />
        <p> {props.pokemon.name}</p>
      </Link>
    </div>
  );
};

export default PokeCard;
