import React from "react";
import PokemonCard from "./PokemonCard";
//import PokemonCard from "./PokemonCard";
import "../styles/PokemonArea.css";

const PokemonArea = () => {
  return (
    <div className="area">
      <PokemonCard />
      <PokemonCard />
      <PokemonCard />
      <PokemonCard />
      <PokemonCard />
      <PokemonCard />
      <PokemonCard />
      <PokemonCard />
      <PokemonCard />
      <PokemonCard />
    </div>
  );
};

export default PokemonArea;
