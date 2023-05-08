import { useState, useEffect } from "react";
import GameScreen from "./components/gameScreen";
import Menu from "./components/menu";
import React from "react";
import "./App.css";

function App() { 
  return (
    
    <div id="app">

      <Menu/>
      <GameScreen/>
      
    </div>
  );
}

export default App;
