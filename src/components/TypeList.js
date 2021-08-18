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
    return <div>{this.state.types}</div>;
  }
}

export default TypeList;
