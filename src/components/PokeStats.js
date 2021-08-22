import React from "react";
import styled from "styled-components";

const PokeStats = (props) => {
  return (
    <Stats>
      <div>
        <H4>
          Experience
          <Span> {props.pokemon.experience}</Span>
        </H4>
        <H4>
          Weight
          <Span> {props.pokemon.weight}</Span>
        </H4>
        <H4>
          Height
          <Span> {props.pokemon.height}</Span>
        </H4>
      </div>
      <div>
        {props.pokemon.stats.map((stat) => (
          <H3 key={stat.stat.name}>
            {stat.stat.name}
            <Span> --> {stat.base_stat}</Span>
          </H3>
        ))}
      </div>
    </Stats>
  );
};

const H4 = styled.h4`
  text-align: Left;

  font-size: 2rem;
  color: ${(props) => props.theme.pokeballColor};
  text-shadow: ${(props) => props.theme.textShadow};
  -webkit-text-stroke: ${(props) => props.theme.stroke};
  z-index: 10;
`;

const H3 = styled.h4`
  text-align: Left;
  font-size: 1.5rem;
  color: white;
  z-index: 10;
`;
const Stats = styled.div`
  display: grid;
  grid-area: stats;
  align-items: center;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  background-color: rgb(48 167 215);
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  border: 1px solid black;
  border-radius: 20px;
  font-size: 2rem;
  padding: 20px;
  margin: 10px;
  justify-content: space-around;
`;

const Span = styled.span`
  color: ${(props) => props.theme.pokeballColor};
  text-shadow: ${(props) => props.theme.textShadow};
  -webkit-text-stroke: ${(props) => props.theme.stroke};
`;

export default PokeStats;
