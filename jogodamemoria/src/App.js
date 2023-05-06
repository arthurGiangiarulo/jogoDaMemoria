
import { useState, useEffect } from "react";
import Card from "./components/card";
import Menu from "./components/menu";
import React from "react";
import "./App.css";

function App() {

  const [cards, setCards] = useState([]);
  
  function renderCards (cards) {
    if (cards % 2 === 0) {
      console.log("É par");
    } else {
      console.log("Não é par");
    }
    
  }  return (
    
    <div id="app">

      <Menu/>


      
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
