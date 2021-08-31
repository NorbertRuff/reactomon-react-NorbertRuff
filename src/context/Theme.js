import { createGlobalStyle } from "styled-components";
import DarkBackgound from "../static/img/background2.png";
import LightBackgound from "../static/img/background1.png";
import DarkShade from "../static/img/shade2.png";
import LightShade from "../static/img/shade1.png";
import DarkIcon from "../static/img/darkicon.png";
import LightIcon from "../static/img/lighticon.png";

export const lightTheme = {
  background: LightBackgound,
  backgroundColor: "rgba(53, 100, 173, 0.6)",
  icon: LightIcon,
  shade: LightShade,
  pokeColor: "cornflowerblue",
  body: "rgba(53, 100, 173, 0.6)",
  box: "rgb(48 167 215);",
  statsColor: "red",
  border: {
    borderBottom: "10px ridge rgba(255, 250, 11, 0.80);",
    borderRight: "10px ridge rgba(255, 250, 11, 0.80);",
    borderLeft: "10px ridge rgba(255, 250, 11, 0.80);",
  },

  pokeballColor: "red",
  fontColor: "yellow",
  textColor: "#2d4059",
  textShadow: "2px 2px 4px rgba(0, 0, 0, 1)",
  stroke: "2px black",
  boxShadow:
    "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;",
};

export const darkTheme = {
  background: DarkBackgound,
  backgroundColor: "linear-gradient(to bottom, #0f0c29, #302b63, #24243e);",
  icon: DarkIcon,
  shade: DarkShade,
  pokeColor: "yellow",
  body: "#405198",
  box: "#226089",
  statsColor: "#17b978",

  border: {
    borderBottom: "10px ridge rgba(100, 100, 100, 0.82);",
    borderRight: "10px ridge rgba(100, 100, 100, 0.82);",
    borderLeft: "10px ridge rgba(100, 100, 100, 0.82);",
  },

  pokeballColor: "#5038f8",
  fontColor: "black",
  textColor: "#2f89fc",
  textShadow: "2px 2px 4px #c03028",
  stroke: "2px #c03028",
  boxShadow:
    "rgba(100, 0, 0, 0.7) 0px -8px 14px, rgba(100, 0, 0, 0.7) 0px -8px 13px -3px, rgba(100, 0, 0, 0.7) 0px -3px 0px inset",
};

export const GlobalStyles = createGlobalStyle`
	body {
    background-image: url(${(props) => props.theme.background});
		background-color: ${(props) => props.theme.backgroundColor};
    background-repeat: repeat-x;
  background-size: contain;
  background-position: bottom;
	}

  body::after {
  content: "";
  position: absolute;
  background-color: skyblue;
  z-index: 10;
}

  * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "Luckiest Guy", cursive;


}

a {
  text-decoration: none;
  color: black;
}

`;
