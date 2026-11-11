import { useState } from 'react';
import { Magic } from './Magic';
import './App.css';

export function App() {
  const [g1, setG1] = useState<string[]>(['@', '$', '@']);
  const [g2, setG2] = useState<string[]>(['$', '@', '$']);
  const [g3, setG3] = useState<string[]>([]);

  const mover = (de: number, para: number) => {
    const garrafas = [g1, g2, g3];
    const orig = garrafas[de - 1];
    const dest = garrafas[para - 1];

    if (orig.length === 0 || dest.length >= 3) return;

    const novaOrigem = [...orig];
    const item = novaOrigem.pop();

    if (item) {
      const novoDestino = [...dest, item];

      if (de === 1) setG1(novaOrigem);
      if (de === 2) setG2(novaOrigem);
      if (de === 3) setG3(novaOrigem);

      if (para === 1) setG1(novoDestino);
      if (para === 2) setG2(novoDestino);
      if (para === 3) setG3(novoDestino);
    }
  };

  return (
    <div className="app">
      <h2>Jogo dos Símbolos</h2>

      <div className="painel">
        <Magic numero={1} simbolos={g1} />
        <Magic numero={2} simbolos={g2} />
        <Magic numero={3} simbolos={g3} />
      </div>

      <div className="botoes">
        <button onClick={() => mover(1, 2)}>1 ➔ 2</button>
        <button onClick={() => mover(1, 3)}>1 ➔ 3</button>
        <button onClick={() => mover(2, 1)}>2 ➔ 1</button>
        <button onClick={() => mover(2, 3)}>2 ➔ 3</button>
        <button onClick={() => mover(3, 1)}>3 ➔ 1</button>
        <button onClick={() => mover(3, 2)}>3 ➔ 2</button>
      </div>
    </div>
  );
}

export default App;