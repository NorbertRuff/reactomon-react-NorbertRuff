import React from "react";
import "../static/css/PokeTypes.css";
import { Badges, H4, PokeTypeCard } from "./Style/TypeElements";

const TypeCard = (props) => {
  return (
    <PokeTypeCard id={props.type.name}>
      <H4> {props.type.name}</H4>
      <Badges id={props.type.name + "_badge"}> </Badges>
    </PokeTypeCard>
  );
};

export default TypeCard;
