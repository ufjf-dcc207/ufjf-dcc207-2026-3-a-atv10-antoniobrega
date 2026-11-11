import './App.css';

interface MagicProps {
  simbolos: string[];
  numero: number;
}

export function Magic({ simbolos, numero }: MagicProps) {
  return (
    <div className="garrafa">
      <h3>Garrafa {numero}</h3>
      {simbolos.length === 0 ? (
        <p>(vazia)</p>
      ) : (
        simbolos.slice().reverse().map((simbolo, index) => (
          <div key={index} className="simbolo">{simbolo}</div>
        ))
      )}
    </div>
  );
}