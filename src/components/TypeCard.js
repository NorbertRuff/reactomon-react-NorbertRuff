import React from "react";
import styled from "styled-components";
import "../static/css/PokeTypes.css";

const TypeCard = (props) => {
  return (
    <PokeTypeCard id={props.type.name}>
      <H4> {props.type.name}</H4>
      <Badges id={props.type.name + "_badge"}> </Badges>
    </PokeTypeCard>
  );
};

const Badges = styled.div`
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  width: inherit;
  height: 70%;
  margin: auto;
`;

const H4 = styled.div`
  color: ${(props) => props.theme.fontColor};
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  text-align: center;
  padding: 0 10px;
  margin: auto;
  text-transform: capitalize;
  font-size: 26px;
`;

const PokeTypeCard = styled.div`
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  text-align: center;
  margin: auto;
  color: black;
  font-size: 20px;
  background-color: rgba(0, 0, 0, 0.4);
  border: 1px solid black;
  border-radius: 20px;
  width: 150px;
  height: 150px;
`;

export default TypeCard;
