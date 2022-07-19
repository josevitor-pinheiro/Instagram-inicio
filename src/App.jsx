import "./App.css";
import "./components/Button.css";

import AppleButton from "../src/components/img/apple-button.png";
import GoogleButton from "../src/components/img/googleplay-button.png";

import ImagensAlterando from "./components/ImagensAlterando";
import Login from "./components/Login";
import Cadastro from "./components/Cadastro";
import Fotter from "./components/Fotter";

function App() {
  return (
    <div className="App">
      <div className="Main">
        <article>
          <div className="Images">
            <ImagensAlterando />
          </div>
          <div className="Cadastro">
            <Login></Login>
            <Cadastro></Cadastro>
            <div className="mini-container">
              <span>Obtenha o aplicativo</span>
              <div>

              <img src={AppleButton} alt="AppleButton" className="app-button" />
              <img
                src={GoogleButton}
                alt="GoogleButton"
                className="app-button"
              />
              </div>
            </div>
          </div>
        </article>
        <Fotter />
      </div>
      <div></div>
    </div>
  );
}

export default App;
