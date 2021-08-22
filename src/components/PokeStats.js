import React from "react";
import styled from "styled-components";

const PokeStats = (props) => {
  return (
    <Stats>
      <div>
        <H4>
          Experience
          <span> {props.pokemon.experience}</span>
        </H4>
        <H4>
          Weight
          <span> {props.pokemon.weight}</span>
        </H4>
        <H4>
          Height
          <span> {props.pokemon.height}</span>
        </H4>
      </div>
      <div>
        {props.pokemon.stats.map((stat) => (
          <H3 key={stat.stat.name}>
            {stat.stat.name}
            <span>--> {stat.base_stat}</span>
          </H3>
        ))}
      </div>
    </Stats>
  );
};

const H4 = styled.h4`
  text-align: Left;

  font-size: 2rem;
  color: white;
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
export default PokeStats;
