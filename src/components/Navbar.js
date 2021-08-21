import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { PokeButton } from "./PokeButton";

const Navbar = () => {
  return (
    <PokeBar>
      <Link to="/" className="pokeballcontainer">
        <PokeButton title="Home" />
      </Link>
      <Link to="/pokemons" className="pokeballcontainer">
        <PokeButton title="Pokemons" />
      </Link>
      <Link to="/types" className="pokeballcontainer">
        <PokeButton title="Types" />
      </Link>
      <Link to="/abilities" className="pokeballcontainer">
        <PokeButton title="Abilities" />
      </Link>
      <Link to="/items" className="pokeballcontainer">
        <PokeButton title="Items" />
      </Link>
      <Link to="/pokemons" className="pokeballcontainer">
        <PokeButton title="Pokemons" />
      </Link>
    </PokeBar>
  );
};

const PokeBar = styled.div`
  grid-area: navbar;
  z-index: 10;
  width: 40vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default Navbar;
