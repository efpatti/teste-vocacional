// app/componentes/Resultado.tsx
import React from "react";

interface ResultadoProps {
 resultado: { nome: string; getDescricao: () => string };
}

const Resultado: React.FC<ResultadoProps> = ({ resultado }) => (
 <div className="mt-8 bg-green-50 p-6 rounded-lg text-lg font-medium text-green-700 shadow-md">
  <p>
   <strong>Área mais compatível:</strong> {resultado.nome}
  </p>
  <p className="text-sm">{resultado.getDescricao()}</p>
 </div>
);

export default Resultado;
