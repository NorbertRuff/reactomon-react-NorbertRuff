import React from "react";
import styled from "styled-components";
import "../static/css/PokeTypes.css";

const TypeCard = (props) => {
  return (
    <PokeTypeCard id={props.type.name}>
      <p> {props.type.name}</p>
    </PokeTypeCard>
  );
};

const PokeTypeCard = styled.div`
  margin: 20px;
  padding: 20px;
  text-align: center;
  color: black;
  font-size: 20px;
  background-color: rgba(0, 0, 0, 0.4);
  border: 1px solid black;
  border-radius: 20px;
  width: 100px;
  height: 100px;
`;

export default TypeCard;
