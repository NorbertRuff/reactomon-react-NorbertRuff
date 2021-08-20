import React from "react";
import styled, { keyframes } from "styled-components";

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

const PokeballConatiner = styled.div`
  :hover {
    cursor: pointer;
  }
`;

const Shake = keyframes`
0% {transform: translate(0, 0) rotate(0);}
20% {transform: translate(-10px, 0) rotate(-20deg);}
30% {transform: translate(10px, 0) rotate(20deg);}
50% {transform: translate(-10px, 0) rotate(-10deg);}
60% {transform: translate(10px, 0) rotate(10deg);}
100% {transform: translate(0, 0) rotate(0);}
`;

const Blink = keyframes`
0% {background-color: #eee;}
100% {background-color: #e74c3c;}
`;

const PokeBall = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  background: #fff;
  border: 5px solid #000;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: inset -5px 10px 0 5px #ccc;

  :before,
  :after {
    content: "";
    position: absolute;
  }
  :after {
    top: calc(50% - 8px);
    width: 100%;
    height: 8px;
    background: #000;
  }
  :before {
    background: red;
    width: 100%;
    height: 50%;
  }
  :hover {
    animation: ${Shake} 1.25s cubic-bezier(0.36, 0.07, 0.19, 0.97) 3;
  }
`;

const PokeballButton = styled.div`
  position: absolute;
  top: calc(50% - 10px);
  left: calc(50% - 10px);
  width: 20px;
  height: 20px;
  background: #7f8c8d;
  border: 3px solid #fff;
  border-radius: 50%;
  z-index: 10;
  box-shadow: 0 0 0 8px black;
  animation: ${Blink} 0.5s alternate infinite;
`;

const Label = styled.label`
  display: inherit;
  top: 10px;
  font-weight: bold;
  margin: auto;
  font-size: 20px;
  text-align: center;
  list-style: none;
`;
