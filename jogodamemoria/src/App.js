
import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import logo from "./assets/relimpiadas.png";
import Card from "./components/card";
import play from "./assets/play.png";


function App() {

  const [cards, setCards] = useState([]);
  
  function renderCards (cards) {
    if (cards % 2 === 0) {
      console.log("É par");
    } else {
      console.log("Não é par");
    }
  }

  return (
    <div id="app">

      <div id="menu">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>

        <div className="play">
          <img src={play} alt="play" />
        </div>
      </div>

      
      <div id="gameScreen">
      <div>
        <input placeholder="Qts de cards" onChange={ e => setCards(e.target.value)}/>
        <button onClick={renderCards()}>Enter</button>
      </div>
      <Card/> 

      </div>
    </div>
  );
}

export default App;
