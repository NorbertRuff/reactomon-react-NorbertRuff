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
    </PokeBar>
  );
};

const PokeBar = styled.div`
  z-index: 10;
  width: 30vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
`;

export default Navbar;
