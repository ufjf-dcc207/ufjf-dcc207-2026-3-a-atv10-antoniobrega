import './App.css';

interface SimboloProps {
  valor: string;
}

export function Simbolo({ valor }: SimboloProps) {
  return (
    <div className="simbolo">
      {valor}
    </div>
  );
}