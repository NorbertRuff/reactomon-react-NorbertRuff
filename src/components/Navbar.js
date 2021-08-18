import React from "react";

export class Navbar extends React.Component {
  render() {
    return (
      <div className="pokebar">
        <div className="pokeballcontainer">
          <div className="pokeball">
            <div className="pokeball_button"></div>
          </div>
          <label>Home</label>
        </div>
        <div className="pokeballcontainer">
          <div className="pokeball">
            <div className="pokeball_button"></div>
          </div>
          <label>Pokemons</label>
        </div>
        <div className="pokeballcontainer">
          <div className="pokeball">
            <div className="pokeball_button"></div>
          </div>
          <label>Types</label>
        </div>
      </div>
    );
  }
}

export default Navbar;
