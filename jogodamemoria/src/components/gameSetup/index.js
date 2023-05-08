import React from "react";
import "./style.css";

function GameSetup() {
    
    return (
        <div id="gameSetup">
            <div id="cards" className="dialogBox">
                <label className="label">Olá</label>
              <div className="input"> 
                <input></input>
                <button>Enter</button>
              </div>           
            </div>
            <div id="pairs" className="dialogBox">
                <label className="label">Olá</label>
                <div className="input"> 
                <input></input>
                <button>Enter</button>
              </div>
            </div>
        </div>
    );
}

export default GameSetup;
