import React from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";
import styled, { keyframes } from "styled-components";

const Header = (props) => {
  const changeTheme = () => {
    if (props.theme === "light") {
      props.setTheme("dark");
    } else {
      props.setTheme("light");
    }
  };

  return (
    <HeaderDiv>
      <Logo />
      <Navbar theme={props.theme} />
      <ThemeChangeDiv>
        <ThemeChangeButton onClick={changeTheme}>
          {props.theme} mode
        </ThemeChangeButton>
      </ThemeChangeDiv>
    </HeaderDiv>
  );
};

const Scale = keyframes`
    0% {transform: rotate(0);}
  100% {transform: rotate(360deg);}
`;

const ThemeChangeButton = styled.button`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  margin: auto;
  padding: 0.5rem;
  width: 90%;
  height: 80%;
  border-radius: 30%;
  color: black;
  font-size: 1.3rem;
  text-align: center;
  -webkit-text-stroke: 1px white;
  background-color: ${(props) => props.theme.body};
  background-image: url(${(props) => props.theme.icon});
  background-size: 70% 80%;
  background-position: center;
  background-repeat: no-repeat;
  cursor: pointer;
  :hover {
    animation: ${Scale} 0.6s ease-in-out both;
  }
`;

const ThemeChangeDiv = styled.div`
  display: grid;
  justify-items: center;
`;

const HeaderDiv = styled.div`
  color: ${(props) => props.theme.fontColor};
  background: ${(props) => props.theme.backgroundColor};
  display: grid;
  grid-template-areas: "logo navbar user";
  grid-template-columns: 25% 50% 25%;
  height: 100%;
  justify-items: center;
  grid-area: header;
  border-bottom: ${(props) => props.theme.border.borderBottom};
  border-right: ${(props) => props.theme.border.borderRight};
  border-left: ${(props) => props.theme.border.borderLeft};
  border-radius: 0px 0px 50px 50px;

  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
`;

export default Header;
