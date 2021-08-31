import React from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";
import {
  HeaderDiv,
  ThemeChangeButton,
  ThemeChangeDiv,
} from "./Style/PageElements";

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

export default Header;
