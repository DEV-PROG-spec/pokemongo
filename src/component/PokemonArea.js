import React, { useEffect, useState } from "react";
//import PokemonCard from "./PokemonCard";
import "../styles/PokemonArea.css";
//import PokemonCard from "./PokemonCard";
import Axios from "axios";
import PokemonCard from "./PokemonCard";
//import PokemonCard from "./PokemonCard";
import "../styles/Buttons.css";

const PokemonArea = (props) => {
  const [object, setObject] = useState([]);

  const [next, setNext] = useState({
    next: null,
    prev: null,
  });

  const [details, setDetails] = useState([]);

  //For fetching data from API.
  useEffect(() => {
    Axios.get("https://pokeapi.co/api/v2/pokemon?limit=12&offset=0").then(
      (response) => {
        var arr = [];
        setNext({
          next: response.data.next,
          prev: response.data.previous,
        });
        response.data.results.map((element) => {
          Axios.get(`https://pokeapi.co/api/v2/pokemon/${element.name}`).then(
            (response) => {
              // console.log(response);
              setObject({ ...object, response });
              let obj = {
                name: element.name,
                img: response.data.sprites.front_default,
                hp: response.data.stats[0].base_stat,
                power: response.data.stats[1].base_stat,
                type: response.data.stats[0].base_stat,
              };

              arr.push(obj);

              // console.log(details);
            }
          );
        });
        setDetails(arr);
        // console.log(next);
      }
    );
    //object.map((e) => console.log(e.name));
    // console.log(object);
    // console.log(next);
  }, []);

  //For next and previous functionality..
  const clickHandler = (where) => {
    if (where === "next") {
      Axios.get(`${next.next}`).then((response) => {
        var arr = [];
        setNext({
          next: response.data.next,
          prev: response.data.previous,
        });
        response.data.results.map((element) => {
          Axios.get(`https://pokeapi.co/api/v2/pokemon/${element.name}`).then(
            (response) => {
              // console.log(response);
              setObject({ ...object, response });
              let obj = {
                name: element.name,
                img: response.data.sprites.front_default,
                hp: response.data.stats[0].base_stat,
                power: response.data.stats[1].base_stat,
                type: response.data.stats[0].base_stat,
              };

              arr.push(obj);

              // console.log(details);
            }
          );
        });
        setDetails(arr);
        // console.log(next);
      });
    } else {
      Axios.get(`${next.prev}`).then((response) => {
        var arr = [];
        setNext({
          next: response.data.next,
          prev: response.data.previous,
        });
        response.data.results.map((element) => {
          Axios.get(`https://pokeapi.co/api/v2/pokemon/${element.name}`).then(
            (response) => {
              // console.log(response);
              setObject({ ...object, response });
              let obj = {
                name: element.name,
                img: response.data.sprites.front_default,
                hp: response.data.stats[0].base_stat,
                power: response.data.stats[1].base_stat,
                type: response.data.stats[0].base_stat,
              };

              arr.push(obj);

              // console.log(details);
            }
          );
        });
        setDetails(arr);
        // console.log(next);
      });
    }
  };

  return (
    <div>
      <div className="area">
        {details.length === 0 ? (
          <h1>Loading...</h1>
        ) : (
          details.map((element) => (
            <PokemonCard
              name={element.name}
              img={element.img}
              hp={element.hp}
              power={element.power}
              type={element.type}
            />
          ))
        )}
      </div>
      <div className="buttons">
        <button
          disabled={next.prev === null ? true : false}
          type="button"
          onClick={() => clickHandler("prev")}
          className="prev"
        >
          &laquo; prev
        </button>

        <button
          className="next"
          disabled={next.next === null ? true : false}
          type="button"
          onClick={() => clickHandler("next")}
        >
          next &raquo;
        </button>
      </div>
    </div>
  );
};

export default PokemonArea;
