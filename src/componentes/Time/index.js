import React from "react";
import "./Time.css";
import Jogador from "../Jogador";
const Time = (props) => {
  const css = { backgroundColor: props.corFundo };
  return (
    (props.jogadores.length > 0) ? <section className="time" style={css}>    
      <h3 style={{ borderColor: props.corTexto }}>{props.nome}</h3>
      <div className="jogadores">
        {props.jogadores.map((jogador) => (
          <Jogador
            nome={jogador.nome}
            camiseta={jogador.camiseta}
            imagem={jogador.imagem}
            posicao={jogador.posicao}
            key={jogador.nome}
            corDestaque={props.corTexto}
          />
        ))}
      </div>
    </section>
    : ''
  );
};

export default Time;
