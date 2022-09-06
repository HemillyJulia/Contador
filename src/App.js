import React from "react"
import {useState} from "react"
import styled from 'styled-components'
import Meubotao from "./Componentes/Meubotao"

const Fundo = styled.div `
background-color:blueviolet
`

function App() {

//Crio duas variáveis , a primeira é o valor que eu quero guardar e a segunda
// é a função que atualiza o valor guardado
const [numero, setNumero] = useState(0)

//primeiramente criei a função soma que recebe a função set dentro dela , na qual
// o numero que é o meu valor guardado, ao ser clicado, será somado +1
function somar () {
 setNumero (numero + 1)
}

//depois criei a função subtrair que recebe a função set dentro dela , na qual
// o numero que é o meu valor guardado, ao ser clicado, será subtraído -1
function diminuir () {
 setNumero (numero - 1)
}

  return (
    <Fundo >
   <h1>Contador</h1>
{/* // abaixo eu coloquei a variável número, que é o meu o meu valor inicial. */}
   <p>{numero}</p> 
{/* //abaixo eu criei dois botões que irão fazer a lógica descrita acima */}
   <Meubotao onClick={somar}>Somar</Meubotao>
   <button onClick={diminuir}>Subtrair</button>

    </Fundo>
  );
}

export default App;
