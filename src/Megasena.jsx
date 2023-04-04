import React, { useState } from 'react';

function App() {
  const [quantidadeNumeros, setQuantidadeNumeros] = useState(6);
  const [numerosGerados, setNumerosGerados] = useState([]);

  function gerarNumeros(event) {
    event.preventDefault();

    const numeros = Array.from({ length: quantidadeNumeros }, () => Math.floor(Math.random() * 60) + 1);
    const numerosOrdenados = numeros.sort((a, b) => a - b);
    const numerosSemRepeticao = [...new Set(numerosOrdenados)];

    setNumerosGerados(numerosSemRepeticao);
  }

  return (
    <div>
      <form>
        <label>
          Quantidade de números:
          <input
            type="number"
            value={quantidadeNumeros}
            onChange={(event) => setQuantidadeNumeros(event.target.value)}
            min="6"
            max="15"
          />
        </label>
        <button onClick={gerarNumeros}>Gerar Números</button>
      </form>
      <ul>
        {numerosGerados.map((numero) => (
          <li key={numero}>{numero}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
