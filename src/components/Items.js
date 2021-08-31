import React, { useEffect, useState } from "react";
import axios from "axios";
import { Error } from "./Style/Error";
import ItemCard from "./ItemCard";
import { TypeCardContainer } from "./Style/TypeElements";

const Items = (props) => {
  const url = "https://pokeapi.co/api/v2/item";

  const [items, setItems] = useState([]);
  const [error, setError] = useState("");
  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setItems(res.data.results);
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
          {items.map((item) => (
            <ItemCard key={item.name} item={item} theme={props.theme} />
          ))}
        </TypeCardContainer>
      )}
    </React.Fragment>
  );
};

export default Items;
