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
        <ThemeChangeButton onClick={changeTheme}></ThemeChangeButton>
      </ThemeChangeDiv>
    </HeaderDiv>
  );
};

const ThemeChangeButton = styled.button`
  margin: auto;
  padding: 20px;
  width: 6rem;
  height: 6rem;
  border-radius: 2rem;
  color: ${(props) => props.theme.fontColor};
  background-color: ${(props) => props.theme.body};
  background-image: url(${(props) => props.theme.icon});
  background-size: 80% 80%;
  background-position: center;
  background-repeat: no-repeat;
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