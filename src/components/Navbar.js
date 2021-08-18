import React from "react";
import { Link } from "react-router-dom";

export class Navbar extends React.Component {
  render() {
    return (
      <div className="pokebar">
        <Link to="/" className="pokeballcontainer">
          <div className="pokeball">
            <div className="pokeball_button"></div>
          </div>
          <label>Home</label>
        </Link>
        <Link to="/pokemons" className="pokeballcontainer">
          <div className="pokeball">
            <div className="pokeball_button"></div>
          </div>
          <label>Pokemons</label>
        </Link>
        <Link to="/types" className="pokeballcontainer">
          <div className="pokeball">
            <div className="pokeball_button"></div>
          </div>
          <label>Types</label>
        </Link>
      </div>
    );
  }
}

export default Navbar;
