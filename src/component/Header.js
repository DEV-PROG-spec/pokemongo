import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";
const Header = (props) => {
  const [pokemonName, setPokemonName] = useState("");

  const searchHandler = (name) => {
    if (name === "Home") {
      setPokemonName("");
    } else {
      setPokemonName(pokemonName);
    }
    props.func(pokemonName);
  };
  return (
    <div className="HeaderCard">
      <h1 className="baseheading">Pokemon Go...</h1>
      <input
        value={pokemonName}
        type="text"
        className="searchbox"
        onChange={(e) => {
          setPokemonName(e.target.value);
        }}
      />
      <div className="buttons">
        <button
          className="searchbutton"
          onClick={() => searchHandler("search")}
        >
          <Link to="/search">Search</Link>
        </button>
        <button className="searchbutton" onClick={() => searchHandler("Home")}>
          <Link to="/">Home</Link>
        </button>
      </div>
    </div>
  );
};

export default Header;
