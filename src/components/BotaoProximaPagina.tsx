// app/componentes/BotaoProximaPagina.tsx
import React from "react";

interface BotaoProximaPaginaProps {
 paginaAtual: number;
 totalPaginas: number;
 onClick: () => void;
 calcular: () => void;
}

const BotaoProximaPagina: React.FC<BotaoProximaPaginaProps> = ({
 paginaAtual,
 totalPaginas,
 onClick,
 calcular,
}) =>
 paginaAtual < totalPaginas - 1 ? (
  <button
   onClick={onClick}
   className="px-6 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition duration-200"
  >
   Próxima
  </button>
 ) : (
  <button
   onClick={calcular}
   className="px-6 py-2 rounded-md bg-green-500 text-white hover:bg-green-600 transition duration-200"
  >
   Ver Resultado
  </button>
 );

export default BotaoProximaPagina;
