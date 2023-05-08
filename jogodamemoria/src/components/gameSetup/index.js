import React from "react";
import "./style.css";

function GameSetup() {
    
    return (
        <div id="gameSetup">
            <div id="cards" className="dialogBox">
                <label className="label">Digite o número de cartas</label>
              <div className="input"> 
                <input type="number" min="4" max="28" maxlength="2" ></input>
                <button>Enter</button>
              </div>           
            </div>
            <div id="pairs" className="dialogBox">
                <label className="label">Digite o nome da dupla</label>
                <div className="input"> 
                <input></input>
                <button>Enter</button>
              </div>
            </div>
        </div>
    );
}

export default GameSetup;
