import "./static/css/App.css";
import Logo from "./components/Logo";
import Navbar from "./components/Navbar";
import PokemonDetail from "./components/PokemonDetail";
import PokemonList from "./components/PokemonList";
import TypeList from "./components/TypeList";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Logo />
      <Navbar />
      <PokemonDetail />
      <PokemonList />
      <TypeList />
    </Router>
  );
}

export default App;
