import React from "react";
import { useState } from "react";
import styled from "styled-components";
import UiButton from "./Componentes/UiButton";

const Fundo = styled.div`
  text-align: center;
  height: 590px;
  border: 5px solid;
  background-image: linear-gradient(to right, red, green, yellow, blue);
  background-position: center;
`;

function App() {
  //Crio duas variáveis , a primeira é o valor que eu quero guardar e a segunda
  // é a função que atualiza o valor guardado
  const [numero, setNumero] = useState(0);

  //primeiramente criei a função soma que recebe a função set dentro dela , na qual
  // o numero que é o meu valor guardado, ao ser clicado, será somado +1
  function somar() {
    setNumero(numero + 1);

    console.log ("Função somar")

  }

  //depois criei a função subtrair que recebe a função set dentro dela , na qual
  // o numero que é o meu valor guardado, ao ser clicado, será subtraído -1
  function diminuir() {
    //Não permitir que o número fique negativo
    //Se o valor for 0 não subtraia mais.

    if (numero === 0) {
      return;
    }
    setNumero(numero - 1);
  }




  return (
    <Fundo>
      <h1>Contador</h1>
      {/* // abaixo eu coloquei a variável número, que é o meu o meu valor inicial. */}
      <p>{numero}</p>
      {/* //abaixo eu criei dois botões que irão fazer a lógica descrita acima */}
      <UiButton onClick={somar}>Somar</UiButton>
      <UiButton onClick={diminuir}>Subtrair</UiButton> 
      <UiButton onClick={() => console.log("Ronaldo")}>ronaldo</UiButton>

 
    </Fundo>
  );
  
}

export default App;
