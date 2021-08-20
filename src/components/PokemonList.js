import React, { Component } from "react";
import PokeCard from "./PokeCard";
import axios from "axios";

const url = "https://pokeapi.co/api/v2/pokemon";
export class PokemonList extends Component {
  state = {
    pokemons: [{}],
  };

  componentDidMount() {
    axios.get(url).then((res) => this.setState({ pokemons: res.data.results }));
  }

  render() {
    return (
      <div className="cardContainer">
        {this.state.pokemons.map((pokemon) => (
          <PokeCard key={pokemon.id} pokemon={pokemon}></PokeCard>
        ))}
      </div>
    );
  }
}

export default PokemonList;
