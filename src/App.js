import React, { useState } from "react";
import PokemonArea from "./component/PokemonArea";
import "./App.css";
import Header from "./component/Header";
import Axios from "axios";
import PokemonSearch from "./component/PokemonSearch";
import { Routes, Route } from "react-router-dom";

const App = () => {
  const [state, setState] = useState(null);

  const func = (name) => {
    if (name) {
      Axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`).then(
        (response) => {
          setState(response);
        }
      );
    } else {
      setState(null);
    }
  };
  return (
    <div>
      <Header func={func} />
      <Routes>
        <Route exact path="/" element={<PokemonArea />} />
        <Route exact path="/search" element={<PokemonSearch state={state} />} />
      </Routes>
    </div>
  );
};

export default App;
