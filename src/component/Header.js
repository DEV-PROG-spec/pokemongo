import React from "react";
import "../styles/Header.css";
const Header = () => {
  // const [pokemonName, setPokemonName] = useState("");
  return (
    <div className="HeaderCard">
      <h1 className="baseheading">Pokemon Go...</h1>
      <input
        type="text"
        className="searchbox"
        onChange={(e) => {
          console.log(e.target.value);
        }}
      />
      <button className="searchbutton">Search</button>
    </div>
  );
};

export default Header;
