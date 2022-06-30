import React from "react";
import "../styles/PokemonCard.css";

const PokemonCard = (props) => {
  return (
    <>
      <div className="card">
        <div className="card__body">
          <img src={props.img} alt="" className="image" />
          <h2 className="name"> {props.name} </h2>
          <p className="para"> hp : {props.hp}</p>
          <p className="para"> power : {props.power}</p>
          <p className="para"> type : {props.type}</p>

          <button className="button">View More</button>
        </div>
      </div>
    </>
  );
};

export default PokemonCard;
