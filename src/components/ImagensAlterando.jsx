import primeiraImagem from "./img/primeiraImagem.png";
import segundaImagem from "./img/segundaImagem.png";
import terceiraImagem from "./img/terceiraImagem.png";
import quartaImagem from "./img/quartaImagem.png";
import ImagemFixa from "./img/ImagemFixa.png";

import "./imagensAlterando.css"
import { useState } from "react";

function ImagensAlterando() {
  let image = [
    <img src={primeiraImagem} alt="primeiraImagem" />,
    <img src={segundaImagem} alt="segundaImagem" />,
    <img src={terceiraImagem} alt="terceiraImagem" />,
    <img src={quartaImagem} alt="quartaImagem" />,
  ];

  let [Count, setCount] = useState(0);
  let time = 2000;
  let max = image.length - 1;

  setTimeout(function start() {
    if (Count < max) {
      setCount(Count + 1);
    } else {
      setCount(0);
    }
  }, time);

  return (
    <div className="Imagems-container">
        <div className="ImagemFixa">
          <img src={ImagemFixa} alt="ImagemFixa" />
        </div>
        <div className="ImagemsAlterando">  
         {image[Count]}
        </div>
    </div>
  );
}

export default ImagensAlterando;
