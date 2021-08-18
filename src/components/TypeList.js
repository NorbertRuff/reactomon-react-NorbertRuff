import React, { Component } from "react";
import TypeCard from "./TypeCard";
import PropTypes from "prop-types";

import axios from "axios";

const url = "https://pokeapi.co/api/v2/type";
export class TypeList extends Component {
  state = {
    types: [],
  };

  componentDidMount() {
    axios.get(url).then((res) => this.setState({ types: res.data.results }));
  }

  render() {
    return (
      <div className="cardContainer">
        {this.state.types.map((type) => (
          <TypeCard key={type.name} types={type} />
        ))}
      </div>
    );
  }
}

TypeList.propTypes = {
  types: PropTypes.array.isRequired,
};

export default TypeList;
