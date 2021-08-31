import React, { useEffect, useState } from "react";
import axios from "axios";
import { Error } from "./Style/Error";
import {
  ItemThumbnail,
  ItemContainer,
  H4 as Title,
} from "./Style/TypeElements";

const ItemCard = (props) => {
  const [error, setError] = useState("");
  const [item, setItem] = useState({
    id: null,
    name: null,
    sprite: null,
    description: null,
    effect: null,
  });

  useEffect(() => {
    axios
      .get(props.item.url)
      .then((res) => {
        setItem({
          id: res.data.id,
          name: res.data.name,
          sprite: res.data.sprites.default,
          effect: res.data.effect_entries[0].effect,
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
  }, [props.item.url]);

  return (
    <React.Fragment>
      {error ? (
        <Error>
          An error occured while fetching the astronauts information. Please try
          again later!
        </Error>
      ) : (
        <ItemContainer>
          <Title>
            {item.name} #0{item.id}
          </Title>
          <ItemThumbnail picture={item.sprite}></ItemThumbnail>
        </ItemContainer>
      )}
    </React.Fragment>
  );
};

export default ItemCard;
