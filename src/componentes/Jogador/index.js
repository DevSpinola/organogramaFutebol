import React from "react";
import "./Jogador.css";
import { TbShirt } from "react-icons/tb";
import { IconContext } from "react-icons";
const Jogador = ({ nome, imagem, camiseta, corDestaque, posicao }) => {
  return (
    <div className="jogador">
      <div className="cabecalho" style={{ backgroundColor: corDestaque }}>
        <img src={imagem} alt={nome} />
      </div>
      <div className="rodape">
        <h4>{nome}</h4>
        <IconContext.Provider
          value={{ size: '140px', }}
        >
          <div className="containerCamiseta">
            <h2 className="numCamiseta">{camiseta}</h2>
            <TbShirt className="camiseta"/>
          </div>
        </IconContext.Provider>
        <h5>{posicao}</h5>
      </div>
    </div>
  );
};
export default Jogador;
