import React, { useEffect, useState } from "react";
import TypeCard from "./TypeCard";

import axios from "axios";

const TypeList = () => {
  const url = "https://pokeapi.co/api/v2/type";

  const [types, setTypes] = useState([]);

  useEffect(() => {
    axios.get(url).then((res) => {
      setTypes(res.data.results);
    });
  }, []);

  return (
    <div className="cardContainer">
      {types.map((type) => (
        <TypeCard key={type.name} type={type} />
      ))}
    </div>
  );
};

export default TypeList;
