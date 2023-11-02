import { useState } from 'react'

import './App.css'

function App() {
  const [altura, setAltura] = useState(0);
  const [peso, setPeso] = useState(0);

  function calculaImc() {
    let imc;
    if (peso !== 0 && altura !== 0) {
      imc = peso / (altura ** 2);
      return (imc * 10000).toFixed(2);

    }
  }

  return (
    <>
      <h1>Calculadora de IMC</h1>
      <form action="">
        <label>Altura:</label>
        <input
          type="number"
          placeholder='digite sua altura em cm'
          onChange={({ target }) => setAltura(parseInt(target.value))}
        ></input>
        <label>Peso:</label>
        <input
          type="number"
          placeholder='digite seu peso'          
          onChange={({ target }) => setPeso(parseInt(target.value))}
        ></input>
        <p>IMC: {calculaImc()}</p>
      </form>
    </>
  )
}

export default App
