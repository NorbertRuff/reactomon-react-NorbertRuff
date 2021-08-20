import React from "react";
import "../static/css/PokeTypes.css";

const TypeCard = (props) => {
  return (
    <div className="typeCard" id={props.type.name}>
      <p> {props.type.name}</p>
    </div>
  );
};

export default TypeCard;
