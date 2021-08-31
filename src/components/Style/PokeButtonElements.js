import styled, { keyframes } from "styled-components";

export const PokeballConatiner = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px 20px;
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

export const PokeBall = styled.div`
  box-shadow: ${(props) => props.theme.boxShadow};
  /* box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
  rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset; */
  position: relative;
  width: 100px;
  height: 100px;
  background: #fff;
  border: 5px solid #000;
  border-radius: 50%;
  overflow: hidden;

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
    background: ${(props) => props.theme.pokeballColor};
    width: 100%;
    height: 50%;
  }
  :hover {
    animation: ${Shake} 1.25s cubic-bezier(0.36, 0.07, 0.19, 0.97) 3;
  }
`;

export const PokeballButton = styled.div`
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

export const Label = styled.label`
  display: inherit;
  font-weight: bold;
  text-transform: uppercase;
  margin: auto;
  font-size: 25px;
  text-align: center;
  list-style: none;
  color: ${(props) => props.theme.fontColor};
  text-shadow: ${(props) => props.theme.textShadow};
  -webkit-text-stroke: ${(props) => props.theme.stroke};
`;
