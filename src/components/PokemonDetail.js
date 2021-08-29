import React, { useEffect, useState } from "react";
import axios from "axios";
import PokeStats from "./PokeStats";
import {
  PokemonDetails,
  Title,
  Thumbnail,
  Description,
  Gallery,
  PokePicture,
  Type,
  Abilities,
  Span,
} from "./Style/PokemonDetailsElements";
import { Error } from "./Style/Error";

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
    firstType: null,
    stats: [],
  });
  const [error, setError] = useState("");

  const [description, setDescription] = useState();

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
          firstType: res.data.types[0].type.name,
          stats: res.data.stats,
        });
      })
      .catch((error) => {
        setError(error.message);
        console.error(
          `The request was made and the server responded
        with a status code that falls out of the range of 2xx` + error.message
        );
      });

    axios
      .get(`https://pokeapi.co/api/v2/characteristic/${id}`)
      .then((res) => {
        setDescription(res.data.descriptions[2].description);
      })
      .catch((error) => {
        console.error(
          `The request was made and the server responded
        with a status code that falls out of the range of 2xx` + error.message
        );
      });
  }, [id, url]);

  return (
    <React.Fragment>
      {error ? (
        <Error>
          An error occured while fetching the astronauts information. Please try
          again later!
        </Error>
      ) : (
        <PokemonDetails id={pokemon.firstType}>
          <Title>
            {pokemon.name} #{"0".repeat(2) + pokemon.id}
          </Title>
          <Description>{description}</Description>
          <PokePicture>
            <img src={pokemon.artWork} alt="pokemon_back" />
          </PokePicture>
          <Gallery>
            <Thumbnail src={pokemon.sprites.front_shiny} alt="pokemon_front" />
            <Thumbnail src={pokemon.sprites.back_shiny} alt="pokemon_back" />
            <Thumbnail src={pokemon.dreamWorld} alt="pokemon_back" />
          </Gallery>
          <Type>
            Type:
            {pokemon.types.map((type) => (
              <div key={type.type.name}>
                <Span>{type.type.name}</Span>
              </div>
            ))}
          </Type>
          <PokeStats theme={props.them} pokemon={pokemon} />
          <Abilities>
            Abilities:
            {pokemon.abilities.map((ability) => (
              <div key={ability.ability.name}>
                <Span>{ability.ability.name}</Span>
              </div>
            ))}
          </Abilities>
        </PokemonDetails>
      )}
    </React.Fragment>
  );
};
export default PokemonDetail;
