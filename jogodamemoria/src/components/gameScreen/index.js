import React from "react"
import { useState, useEffect } from "react";
import Card from "../card"
import "./style.css"

export default function GameScreen() {
   
    const [cards, setCards] = useState(0);

    function renderCards () {
        if (cards > 0) {
            if (cards % 2 === 0) {
                const cardsArray = [];
                for (let i = 0; i < cards; i++) {
                    cardsArray.push(<Card key={i} />);
                }
                return cardsArray;
            } else {
                alert("Digite um número par")
            }
        } else {
            alert("Digite um número")
        }
    }

    return (
        <div id="gameScreen">
            <div className="">
                <label>Quantidade de cards</label>
                <input 
                    placeholder="Qts de cards" 
                    onChange={e => setCards(e.target.value)}
                />
                <button onClick={renderCards}>Enter</button>
            </div>
            {/* {cardsArray} */}
            <Card />
        </div>
    )
}