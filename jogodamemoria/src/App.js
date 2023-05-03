// import logo from './logo.svg';
import "./App.css";
import logo from "./assets/relimpiadas.png";
import cartaVerso from "./assets/carta.png";
import cartaFrente from "./assets/cartaFrente.png";
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

      <div id="cartas" className="">
        
        <div id="cartaFrente" className="carta">
          <img src={cartaFrente} alt="carta" />
          <p>1</p>
        </div>
        
        <div id="cartaVerso" className="carta">
          <img src={cartaVerso} alt="carta" />
        </div>

      </div>

      </div>
    </div>
  );
}

export default App;
