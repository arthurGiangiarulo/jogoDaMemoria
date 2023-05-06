import React from "react";
import logo from "../../assets/relimpiadas.png";
import "./style.css";
import Play from "../play";

function Menu() {
  return (
    <div id="menu">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>

      <Play />
    </div>
  );
}

export default Menu;
