import React from "react";
import "../styles/PokemonCard.css";

const PokemonCard = () => {
  return (
    <>
      <div className="card">
        <div className="card__body">
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/4.png"
            alt=""
            className="image"
          />
          <h2 className="name"> CHARMANDER </h2>
          <p className="para"> hp : 50</p>
          <p className="para"> power : 67</p>
          <p className="para"> type : fire</p>

          <button className="button">View More</button>
        </div>
      </div>
    </>
  );
};

export default PokemonCard;
