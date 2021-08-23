import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

const AbilityCard = (props) => {
  const [ability, setAbility] = useState({
    id: null,
    name: null,
    shortEffect: null,
    description: null,
  });

  useEffect(() => {
    axios
      .get(props.ability.url)
      .then((res) => {
        setAbility({
          id: res.data.id,
          name: res.data.name,
          shortEffect: res.data.effect_entries[1].short_effect,
          description: res.data.flavor_text_entries[0].flavor_text,
        });
      })

      .catch((error) => {
        console.error(
          `The request was made and the server responded
            with a status code that falls out of the range of 2xx` +
            error.message
        );
      });
  }, [props.ability.url]);

  return (
    <PokeAbilityCard>
      <H4>
        {ability.name} #0{ability.id}
      </H4>
      <H3> {ability.shortEffect}</H3>
      <H3> {ability.description}</H3>
    </PokeAbilityCard>
  );
};

const H4 = styled.div`
  color: ${(props) => props.theme.fontColor};
  text-align: center;
  margin: auto;
  text-transform: capitalize;
  font-size: 1rem;
`;

const H3 = styled.div`
  text-align: center;
  padding: 0 10px;
  margin: auto;
  text-transform: capitalize;
  font-size: 1rem;
  color: ${(props) => props.theme.box};
  text-shadow: none;
  -webkit-text-stroke: none;
`;

const PokeAbilityCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;

  background-color: ${(props) => props.theme.textColor};

  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  border: 1px solid black;
  text-align: center;
  margin: auto;
  color: ${(props) => props.theme.box};

  border-radius: 20px;
  width: 15vw;
  height: 25vh;
  overflow: hidden;
`;

export default AbilityCard;
