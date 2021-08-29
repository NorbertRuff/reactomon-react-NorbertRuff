import React, { useEffect, useState } from "react";
import AbilityCard from "./AbilityCard";
import axios from "axios";
import { AbilityCardContainer } from "./Style/AbilitieElements";
import { Error } from "./Style/Error";

const Abilities = (props) => {
  const url = "https://pokeapi.co/api/v2/ability?limit=15";

  const [abilities, setAbilities] = useState([]);
  const [error, setError] = useState("");
  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setAbilities(res.data.results);
      })
      .catch((error) => {
        setError(error.message);
        console.error(
          `The request was made and the server responded
          with a status code that falls out of the range of 2xx` + error.message
        );
      });
  }, []);

  return (
    <React.Fragment>
      {error ? (
        <Error>
          An error occured while fetching the astronauts information. Please try
          again later!
        </Error>
      ) : (
        <AbilityCardContainer>
          {abilities.map((ability) => (
            <AbilityCard
              key={ability.name}
              ability={ability}
              theme={props.theme}
            />
          ))}
        </AbilityCardContainer>
      )}
    </React.Fragment>
  );
};

export default Abilities;
