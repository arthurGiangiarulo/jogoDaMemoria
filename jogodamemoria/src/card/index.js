import React from "react";
import cartaVerso from "../assets/carta.png";
import cartaFrente from "../assets/cartaFrente.png";
import "./style.css";

export default function Card() {
    
    const card = document.getElementById("card");
    card?.addEventListener("click", function () {
        card.classList.toggle("flip");
    });

    return (
        <div id="card" className="" >
            <div id="cartaFrente" className="carta">
                <img src={cartaFrente} alt="carta" />
            </div>
        
            <div id="cartaVerso" className="carta">
                <img src={cartaVerso} alt="carta" />
            </div>
        </div>
    );
    }