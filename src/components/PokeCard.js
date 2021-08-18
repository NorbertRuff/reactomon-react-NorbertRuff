import React, { Component } from "react";
import PropTypes from "prop-types";

export class PokeCard extends Component {
  render() {
    return (
      <div className="PokeCard" id={this.props.pokemons.name}>
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/imgbot/sprites/pokemon/40.png`}
          alt="pokemon"
        />
        <p> {this.props.pokemons.name}</p>
      </div>
    );
  }
}

PokeCard.propTypes = {
  pokemons: PropTypes.object.isRequired,
};

export default PokeCard;
