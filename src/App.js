import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Time from "./componentes/Time";
import Rodape from "./componentes/Rodape";

function App() {
  const times = [
    {
      nome: "Goleiros",
      corPrimaria: "#57c278",
      corSecundaria: "#d9f7e9",
    },
    {
      nome: "Defensores",
      corPrimaria: "#e06b69",
      corSecundaria: "#fde7e8",
    },
    {
      nome: "Meio-Campistas",
      corPrimaria: "#FFBA05",
      corSecundaria: "#FFF5D9",
    },
    {
      nome: "Atacantes",
      corPrimaria: "#FF8A29",
      corSecundaria: "#FFEEDF",
    },
  ];

  const [jogadores, setJogadores] = useState([]);
  const aoJogadorCadastrado = (jogador) => {
    setJogadores([...jogadores, jogador]);                
  };

  return (
    <div className="App">
      <Banner />
      <Formulario
        aoJogadorCadastrado={(jogador) => aoJogadorCadastrado(jogador)}        
      />
      {times.map((time) => (
        <Time
          key={time.nome}
          nome={time.nome}
          corTexto={time.corPrimaria}
          corFundo={time.corSecundaria}
          jogadores={jogadores.filter((jogador => (jogador.time === time.nome )))}
        />        
      ))}
      <Rodape/>
    </div>
  );
}

export default App;
