
import React from "react";
import "./App.css";
import logo from "./assets/relimpiadas.png";
import Card from "./components/card";
import play from "./assets/play.png";

function App() {

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

      <Card/> 

      </div>
    </div>
  );
}

export default App;
