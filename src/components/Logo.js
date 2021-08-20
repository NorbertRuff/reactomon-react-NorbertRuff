import React from "react";
import PokeLogo from "../static/img/mainlogo.png";
import styled from "styled-components";

const Logo = () => {
  return <LogoImage></LogoImage>;
};

const LogoImage = styled.div`
  background-image: url(${PokeLogo});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  z-index: 10;
  width: 20vw;
  height: 20vh;
  margin: auto;
`;

export default Logo;
