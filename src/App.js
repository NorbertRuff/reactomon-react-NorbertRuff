import "./static/css/App.css";
import PokemonDetail from "./components/PokemonDetail";
import PokemonList from "./components/PokemonList";
import Abilities from "./components/Abilities";
import TypeList from "./components/TypeList";
import Overlay from "./components/Overlay";
import Home from "./components/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./context/Theme.js";

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <PageContainer theme={theme}>
        <BrowserRouter>
          <Overlay />
          <Header theme={theme} setTheme={setTheme} />
          <Switch>
            <Route
              path="/"
              render={(props) => <Home {...props} theme={theme} />}
              exact
            />
            <Route
              path="/pokemons"
              render={(props) => <PokemonList {...props} theme={theme} />}
              exact
            />
            <Route
              path="/pokemons/:id"
              render={(props) => <PokemonDetail {...props} theme={theme} />}
              exact
            />
            <Route
              path="/abilities"
              render={(props) => <Abilities {...props} theme={theme} />}
              exact
            />
            <Route
              path="/types"
              render={(props) => <TypeList {...props} theme={theme} />}
              exact
            />
          </Switch>
        </BrowserRouter>
      </PageContainer>
    </ThemeProvider>
  );
}

const PageContainer = styled.div`
  display: grid;
  grid-template-columns: 5% 90% 5%;
  grid-template-rows: 20vh 40vh 40vh;
  grid-template-areas:
    "header header header"
    ". maincontent ."
    ". maincontent . ";
  justify-content: center;
  line-height: 1.4;
  width: 100%;
  max-height: 100%;
  color: ${(props) => props.theme.fontColor};
  text-shadow: ${(props) => props.theme.textShadow};
  -webkit-text-stroke: ${(props) => props.theme.stroke};
`;

export default App;
