// import logo from './logo.svg';
import "./App.css";
import logo from "./assets/relimpiadas.png";
import carta from "./assets/carta.png";
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
        <div className="carta">
          <img src={carta} alt="carta" />
        </div>
      </div>
    </div>
  );
}

export default App;
