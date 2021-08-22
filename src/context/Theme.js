import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  pokeColor: "cornflowerblue",
  body: "rgba(53, 100, 173, 0.6)",
  gradfrom: "rgba(53, 100, 173, 0.6)",
  gradto: "#c2e9fb",
  pokeballColor: "red",
  fontColor: "yellow",
  textShadow: "2px 2px 4px rgba(0, 0, 0, 1)",
  stroke: "2px black",
  boxShadow:
    "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;",
};

export const darkTheme = {
  pokeColor: "yellow",
  body: "#705898",
  gradfrom: "rgba(53, 100, 173, 0.8)",
  gradto: "#000",
  pokeballColor: "#7038f8",
  fontColor: "white",
  textShadow: "2px 2px 4px #c03028",
  stroke: "2px #c03028",
  boxShadow:
    "rgba(100, 0, 0, 0.7) 0px -8px 14px, rgba(100, 0, 0, 0.7) 0px -8px 13px -3px, rgba(100, 0, 0, 0.7) 0px -3px 0px inset",
};

export const GlobalStyles = createGlobalStyle`
	body {
		background-color: ${(props) => props.theme.body};
	}
  * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "Luckiest Guy", cursive;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 1);
  -webkit-text-stroke: 2px black;
  color: yellow;
}

a {
  text-decoration: none;
  color: black;
}

`;
