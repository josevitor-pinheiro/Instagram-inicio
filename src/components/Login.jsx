import Input from "./Input";
import Button from "./Button";

import InstagramImg from "./img/instagram-img.png";
import IconeFace from "./img/icons8-facebook-novo.svg";

import "./login.css";

function Login() {
  return (
    <div className="container">
      <img id="img-insta" src={InstagramImg} alt="InstagramImg" />
      <Input placeholder="Telefone, nome de usuario ou email"></Input>
      <Input placeholder="Senha"></Input>
      <button id="btnEntrar">Entrar</button>
      <div className="Info-Ou">Ou</div>
      <button id="button-icone-face">
        <div id="button-icone-face2"></div>
        <span>Entrar com facebook</span>
      </button>
      <button id="button-Esqueceu">Esqueceu a senha?</button>
      <a href="_" id="aSenha"></a>
    </div>
  );
}

export default Login;
