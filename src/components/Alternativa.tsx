// app/componentes/Alternativa.tsx
import React from "react";

interface AlternativaProps {
 alternativa: {
  letra: string;
  texto: string;
  area: { nome: string };
 };
 perguntaId: number;
 onRespostaChange: (id: number, area: { nome: string }) => void;
 isChecked: boolean;
}

const Alternativa: React.FC<AlternativaProps> = ({
 alternativa,
 perguntaId,
 onRespostaChange,
 isChecked,
}) => (
 <label className="flex items-center text-gray-700 text-sm">
  <input
   type="radio"
   name={`pergunta-${perguntaId}`}
   onChange={() => onRespostaChange(perguntaId, alternativa.area)}
   checked={isChecked}
   className="mr-3 text-blue-600 focus:ring-2 focus:ring-blue-400"
   aria-labelledby={`pergunta-${perguntaId}-alt-${alternativa.letra}`}
  />
  {alternativa.letra}) {alternativa.texto}
 </label>
);

export default Alternativa;
