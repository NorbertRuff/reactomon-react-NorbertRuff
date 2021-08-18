import "./App.css";
import Navbar from "./components/Navbar";
import PokemonDetail from "./components/PokemonDetail";
import PokemonList from "./components/PokemonList";
import TypeList from "./components/TypeList";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
    </Router>
  );
}

export default App;
