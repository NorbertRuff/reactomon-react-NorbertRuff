import React, { Component } from "react";
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
    console.log(this.state.types);
    return this.state.types.map((type) => <h4>{type.name}</h4>);
  }
}

export default TypeList;
