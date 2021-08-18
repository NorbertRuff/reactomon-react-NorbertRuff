import React, { Component } from "react";
import PropTypes from "prop-types";
import "../static/css/PokeTypes.css";

export class TypeCard extends Component {
  render() {
    return (
      <div className="typeCard" id={this.props.types.name}>
        <p> {this.props.types.name}</p>
      </div>
    );
  }
}

TypeCard.propTypes = {
  types: PropTypes.object.isRequired,
};

export default TypeCard;
