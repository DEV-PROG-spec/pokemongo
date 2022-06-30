import React from "react";
import PokemonCard from "./PokemonCard";
import "../styles/PokemonSearch.css";

const PokemonSearch = (props) => {
  return (
    <div className="searchArea">
      {!props.state ? (
        <h1>No Pokemon searched</h1>
      ) : (
        <PokemonCard
          img={props.state.data.sprites.front_default}
          name={props.state.data.species.name}
          hp={props.state.data.stats[0].base_stat}
          power={props.state.data.stats[1].base_stat}
          type={props.state.data.stats[0].base_stat}
        />
      )}
    </div>
  );
};

export default PokemonSearch;
