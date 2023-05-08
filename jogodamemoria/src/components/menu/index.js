import React from "react";
import logo from "../../assets/relimpiadas.png";
import "./style.css";
import Play from "../play";
import GameSetup from "../gameSetup";

function Menu() {
  return (
    <div id="menu">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>

      <GameSetup />
      <Play />
      
    </div>
  );
}

export default Menu;
