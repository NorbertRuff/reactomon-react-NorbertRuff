import React, { useEffect, useState } from "react";
import axios from "axios";
import { PokeAbilityCard, H3, H4 } from "./Style/AbilitieElements";
import { Error } from "./Style/Error";

const AbilityCard = (props) => {
  const [error, setError] = useState("");
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
        setError(error.message);
        console.error(
          `The request was made and the server responded
            with a status code that falls out of the range of 2xx` +
            error.message
        );
      });
  }, [props.ability.url]);

  return (
    <React.Fragment>
      {error ? (
        <Error>
          An error occured while fetching the astronauts information. Please try
          again later!
        </Error>
      ) : (
        <PokeAbilityCard>
          <H4>
            {ability.name} #0{ability.id}
          </H4>
          <H3> {ability.shortEffect}</H3>
          <H3> {ability.description}</H3>
        </PokeAbilityCard>
      )}
    </React.Fragment>
  );
};

export default AbilityCard;
