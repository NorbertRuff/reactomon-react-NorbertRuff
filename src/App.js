import "./static/css/App.css";
import Logo from "./components/Logo";
import Navbar from "./components/Navbar";
import PokemonDetail from "./components/PokemonDetail";
import PokemonList from "./components/PokemonList";
import TypeList from "./components/TypeList";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import styled from "styled-components";

function App() {
  return (
    <BrowserRouter>
      <Header>
        <Logo />
        <Navbar />
      </Header>
      <Switch>
        <Route path="/" exact />
        <Route path="/pokemons" component={PokemonList} exact />
        <Route path="/pokemons/:id" component={PokemonDetail} exact />
        <Route path="/types" component={TypeList} exact />
      </Switch>
    </BrowserRouter>
  );
}

const Header = styled.div`
  display: grid;
  grid-template-areas: "logo navbar user";
  grid-template-columns: 25% 50% 25%;
  justify-items: center;
  grid-area: header;
  border-bottom: 10px ridge rgba(255, 250, 11, 0.82);
  border-right: 10px ridge rgba(255, 250, 11, 0.82);
  border-left: 10px ridge rgba(255, 250, 11, 0.82);
  border-radius: 0px 0px 50px 50px;

  background-color: rgba(53, 100, 173, 0.6);
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
`;

export default App;
