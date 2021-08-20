import React, { useEffect, useState } from "react";
import axios from "axios";

const PokemonDetail = (props) => {
  const id = props.match.params.id;
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const [pokemon, setPokemon] = useState({
    id: null,
    experience: null,
    height: null,
    weight: null,
    abilities: [],
    name: null,
    sprites: {},
    dreamWorld: null,
    artWork: null,
    types: [],
    stats: [],
  });

  // const capitalize = (str) => {
  //   return str.charAt(0).toUpperCase() + str.slice(1);
  // };

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        // console.log(res);
        setPokemon({
          id: res.data.id,
          experience: res.data.base_experience,
          height: res.data.height,
          weight: res.data.weight,
          abilities: res.data.abilities,
          name: res.data.name,
          sprites: res.data.sprites,
          dreamWorld: res.data.sprites.other.dream_world.front_default,
          artWork: res.data.sprites.other["official-artwork"].front_default,
          types: res.data.types,
          stats: res.data.stats,
        });
      })
      .catch(function (error) {
        if (error.response) {
          console.error(
            `The request was made and the server responded
         with a status code that falls out of the range of 2xx"error.response.data` +
              error.response
          );
        } else if (error.request) {
          console.error(
            `The request was made but no response was received` + error.request
          );
        } else {
          console.error("Error!", error.message);
        }
      });
  }, [url]);

  return (
    <div className="pokemon_details">
      <img src={pokemon.sprites.front_shiny} alt="pokemon_front" />
      <img src={pokemon.sprites.back_shiny} alt="pokemon_back" />
      <img src={pokemon.dreamWorld} alt="pokemon_back" />
      <img src={pokemon.artWork} alt="pokemon_back" />
      {/* <img
        src={pokemon.sprites.other.dream_world.front_default}
        alt="pokemon_back"
      /> */}
      <h2>{pokemon.name}</h2>
      <h4>Experience: {pokemon.experience}</h4>
      <h4>Weight: {pokemon.weight}</h4>
      <h4>Height: {pokemon.height}</h4>
      <div>
        Abilities:
        {pokemon.abilities.map((ability) => (
          <div>
            <ul>
              <li>{ability.ability.name}</li>
            </ul>
          </div>
        ))}
      </div>
      <div>
        Type:
        {pokemon.types.map((type) => (
          <div>
            <ul>
              <li>{type.type.name}</li>
            </ul>
          </div>
        ))}
      </div>
      <div>
        Stats:
        {pokemon.stats.map((stat) => (
          <div>
            <ul>
              <li>
                {stat.stat.name}: {stat.base_stat}
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PokemonDetail;
