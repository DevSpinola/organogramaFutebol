import { useEffect, useState } from "react";
import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";
const Formulario = (props) => {
  const [nome, setNome] = useState("");
  const [camiseta, setNum] = useState("");
  const [imagem, setImagem] = useState("");
  const [posicao, setPos] = useState("");
  const [time, setTime] = useState("");

  const posicoes = [
    "Goleiro",
    "Lateral Direito",
    "Lateral Esquerdo",
    "Zagueiro",
    "Volante",
    "Armador",
    "Meia-Atacante",
    "Centroavante",
    "Ponta Esquerda",
    "Ponta Direita",
  ];
  const handlesetTime = (posicao) => {
    switch (posicao) {
      case "Goleiro":
        setTime("Goleiros");
        break;
      case "Lateral Direito":
      case "Lateral Esquerdo":
      case "Zagueiro":
        setTime("Defensores");
        break;
      case "Volante":
      case "Armador":
      case "Meia-Atacante":
        setTime("Meio-Campistas");
        break;
      case "Centroavante":
      case "Ponta Esquerda":
      case "Ponta Direita":
        setTime("Atacantes");
        break;
      default:
        setTime("");
    }
  };
  useEffect(() => {
    handlesetTime(posicao);
  }, [posicao]);
  const aoSalvar = (evento) => {    
    evento.preventDefault();
    props.aoJogadorCadastrado({
      nome,
      camiseta,
      imagem,
      posicao,
      time,
    });
    console.log(posicao, time);
    setNome("");
    setNum("");
    setImagem("");
    setPos("");
    setTime("");
  };
  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do jogador</h2>
        <CampoTexto
          obrigatorio={true}
          label="Nome"
          placeholder="Digite seu nome"
          valor={nome}
          aoAlterado={(valor) => setNome(valor)}
        />
        <CampoTexto
          obrigatorio={true}
          label="Camiseta"
          placeholder="Digite seu numero de camiseta"
          valor={camiseta}
          aoAlterado={(valor) => setNum(valor)}
        />
        <CampoTexto
          label="Imagem"
          placeholder="Digite o endereco da imagem"
          valor={imagem}
          aoAlterado={(valor) => setImagem(valor)}
        />
        <ListaSuspensa
          obrigatorio={true}
          label="Característica"
          itens={posicoes}
          valor={posicao}
          aoAlterado={(valor) => {
            setPos(valor);
          }}
        />
        <Botao>Criar Card</Botao>
      </form>
    </section>
  );
};
export default Formulario;
