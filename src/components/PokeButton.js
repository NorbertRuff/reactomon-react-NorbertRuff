import React from "react";
import {
  Label,
  PokeBall,
  PokeballButton,
  PokeballConatiner,
} from "./Style/PokeButtonElements";

export const PokeButton = (props) => {
  return (
    <PokeballConatiner>
      <PokeBall>
        <PokeballButton></PokeballButton>
      </PokeBall>
      <Label>{props.title}</Label>
    </PokeballConatiner>
  );
};
