import React, { useEffect, useState } from "react";
import PokeCard from "./PokeCard";
import axios from "axios";

const PokemonList = () => {
  const url = "https://pokeapi.co/api/v2/pokemon";

  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    axios.get(url).then((res) => {
      setPokemons(res.data.results);
    });
  }, []);

  return (
    <div className="cardContainer">
      {pokemons.map((pokemon) => (
        <PokeCard key={pokemon.name} pokemon={pokemon}></PokeCard>
      ))}
    </div>
  );
};

export default PokemonList;
