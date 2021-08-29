import React, { useEffect, useState } from "react";
import TypeCard from "./TypeCard";
import { TypeCardContainer } from "./Style/TypeElements";
import { Error } from "./Style/Error";

import axios from "axios";

const TypeList = (props) => {
  const url = "https://pokeapi.co/api/v2/type";

  const [types, setTypes] = useState([]);
  const [error, setError] = useState("");
  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setTypes(res.data.results);
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
        <TypeCardContainer>
          {types.map((type) => (
            <TypeCard key={type.name} type={type} theme={props.theme} />
          ))}
        </TypeCardContainer>
      )}
    </React.Fragment>
  );
};

export default TypeList;
