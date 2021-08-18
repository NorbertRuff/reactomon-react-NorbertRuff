import "./static/css/App.css";
import Logo from "./components/Logo";
import Navbar from "./components/Navbar";
import PokemonDetail from "./components/PokemonDetail";
import PokemonList from "./components/PokemonList";
import TypeList from "./components/TypeList";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Logo />
      <Navbar />
      <Switch>
        <Route path="/" exact />
        <Route path="/pokemons" component={PokemonList} exact />
        <Route path="/pokemons/:id" component={PokemonDetail} exact />
        <Route path="/types" component={TypeList} exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
