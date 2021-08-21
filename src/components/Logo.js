import React from "react";
import PokeLogo from "../static/img/pokelogo5.png";
import styled from "styled-components";

const Logo = () => {
  return <LogoImage> </LogoImage>;
};

const LogoImage = styled.div`
  filter: drop-shadow(3px 3px 0.3rem rgba(0, 0, 0, 0.95));
  grid-area: logo;
  content: "";
  background-image: url(${PokeLogo});
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  height: auto;
  z-index: 10;
  margin: 0;
`;

export default Logo;
