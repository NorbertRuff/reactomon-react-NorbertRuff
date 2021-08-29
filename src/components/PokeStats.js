import React from "react";
import { Span, H3, H4, Stats } from "./Style/StatsElements";

const PokeStats = (props) => {
  return (
    <Stats>
      <div>
        <H4>
          Experience
          <Span> --> {props.pokemon.experience}</Span>
        </H4>
        <H4>
          Weight
          <Span> --> {props.pokemon.weight}</Span>
        </H4>
        <H4>
          Height
          <Span> --> {props.pokemon.height}</Span>
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

export default PokeStats;
