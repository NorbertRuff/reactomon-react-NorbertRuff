import React from "react";
import styled from "styled-components";
import logo from "../static/img/pokelogobig.png";

const Home = (props) => {
  return (
    <MainContainer>
      <LogoContainer></LogoContainer>
      <H1>Welcome to my PokeCodex :)</H1>
    </MainContainer>
  );
};
const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  grid-area: maincontent;
  justify-content: center;
  align-items: center;
`;

const H1 = styled.h1`
  color: ${(props) => props.theme.fontColor};
  text-shadow: ${(props) => props.theme.textShadow};
  -webkit-text-stroke: ${(props) => props.theme.stroke};
  font-size: 5rem;
`;

const LogoContainer = styled.div`
  width: 40%;
  height: 80%;
  background-color: ${(props) => props.theme.backgroundColor};
  background-image: url(${logo});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  box-shadow: ${(props) => props.theme.boxShadow};
  border: ${(props) => props.theme.border.borderBottom};
  border-radius: 6rem;
`;

export default Home;
