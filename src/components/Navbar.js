import React from "react";
import { Link } from "react-router-dom";
import { PokeButton } from "./PokeButton";
import { PokeBar } from "./Style/PageElements";

const Navbar = (props) => {
  return (
    <PokeBar>
      <Link to="/" className="pokeballcontainer">
        <PokeButton title="Home" theme={props.theme} />
      </Link>
      <Link to="/pokemons" className="pokeballcontainer">
        <PokeButton title="Pokemons" theme={props.theme} />
      </Link>
      <Link to="/types" className="pokeballcontainer">
        <PokeButton title="Types" theme={props.theme} />
      </Link>
      <Link to="/abilities" className="pokeballcontainer">
        <PokeButton title="Abilities" theme={props.theme} />
      </Link>
      <Link to="/items" className="pokeballcontainer">
        <PokeButton title="Items" theme={props.theme} />
      </Link>
    </PokeBar>
  );
};

export default Navbar;
