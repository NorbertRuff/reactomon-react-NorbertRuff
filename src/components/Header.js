import React from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";
import styled from "styled-components";

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
          Toggle theme
        </ThemeChangeButton>
      </ThemeChangeDiv>
    </HeaderDiv>
  );
};

const ThemeChangeButton = styled.button`
  margin: auto;
  padding: 10px;
  color: ${(props) => props.theme.fontColor};
  background-color: ${(props) => props.theme.body};
`;

const ThemeChangeDiv = styled.div`
  display: grid;
  justify-items: center;
`;

const HeaderDiv = styled.div`
  color: ${(props) => props.theme.fontColor};
  background-color: ${(props) => props.theme.body};
  display: grid;
  grid-template-areas: "logo navbar user";
  grid-template-columns: 25% 50% 25%;
  justify-items: center;
  grid-area: header;
  border-bottom: 10px ridge rgba(255, 250, 11, 0.82);
  border-right: 10px ridge rgba(255, 250, 11, 0.82);
  border-left: 10px ridge rgba(255, 250, 11, 0.82);
  border-radius: 0px 0px 50px 50px;

  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
`;

export default Header;
