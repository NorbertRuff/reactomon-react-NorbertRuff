import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

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
            <span>{type.type.name}</span>
          </div>
        ))}
      </Type>
      <Stats>
        <div>
          <H4>
            Experience
            <span> {pokemon.experience}</span>
          </H4>
          <H4>
            Weight
            <span> {pokemon.weight}</span>
          </H4>
          <H4>
            Height
            <span> {pokemon.height}</span>
          </H4>
        </div>
        <div>
          {pokemon.stats.map((stat) => (
            <H3 key={stat.stat.name}>
              {stat.stat.name}
              <span>--> {stat.base_stat}</span>
            </H3>
          ))}
        </div>
      </Stats>
      <Abilities>
        Abilities:
        {pokemon.abilities.map((ability) => (
          <div key={ability.ability.name}>
            <span>{ability.ability.name}</span>
          </div>
        ))}
      </Abilities>
    </PokemonDetails>
  );
};

const PokemonDetails = styled.div`
  grid-area: content;
  display: grid;
  grid-template-columns: 40% 60%;
  grid-template-rows: 10% 20% 30% 10% 10% 5%;
  gap: 10px;
  padding: 0 10px;
  justify-content: center;
  justify-items: center;
  align-items: center;
  grid-template-areas:
    "title title"
    "picture description"
    "picture stats"
    "picture type"
    "gallery ."
    "footer footer";
`;
const Title = styled.h2`
  text-align: center;
  grid-area: title;
  font-size: 45px;
  background-color: rgb(100, 100, 100);
  border-bottom: 10px ridge rgba(255, 250, 11, 0.82);
  border-radius: 0px 0px 30px 30px;
  width: 100%;
  color: white;
  z-index: 10;
  margin-bottom: 10px;
`;

const H4 = styled.h4`
  text-align: Left;

  font-size: 2rem;
  color: white;
  z-index: 10;
`;

const H3 = styled.h4`
  text-align: Left;
  font-size: 1.5rem;
  color: white;
  z-index: 10;
`;
const Thumbnail = styled.img`
  width: 150px;
  height: auto;
`;

const Gallery = styled.div`
  display: flex;
  justify-content: space-between;
  grid-area: gallery;
`;
const Stats = styled.div`
  display: grid;
  grid-area: stats;
  align-items: center;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  background-color: rgb(48 167 215);
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  border: 1px solid black;
  border-radius: 20px;
  font-size: 2rem;
  padding: 20px;
  margin: 10px;
  justify-content: space-around;
`;

const PokePicture = styled.div`
  grid-area: picture;
  background-color: rgb(48 167 215);
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  border: 1px solid black;
  border-radius: 20px;
`;

const Type = styled.div`
  font-size: 2rem;
  grid-area: type;
  width: 80%;
  display: flex;
  flex: 1;
  justify-content: space-evenly;
  gap: 10px;
  color: white;
`;
const Description = styled.div`
  color: cornflowerblue;
  grid-area: description;
  font-size: 4rem;
`;
const Abilities = styled.div`
  font-size: 30px;
  color: white;
  display: flex;
  gap: 20px;
  justify-content: space-around;
`;

export default PokemonDetail;
