// app/componentes/Pergunta.tsx
import React from "react";
import Alternativa from "./Alternativa";

interface PerguntaProps {
 pergunta: {
  id: number;
  texto: string;
  alternativas: { letra: string; texto: string; area: { nome: string } }[];
 };
 onRespostaChange: (id: number, area: { nome: string }) => void;
 respostas: Record<number, { nome: string }>;
}

const Pergunta: React.FC<PerguntaProps> = ({
 pergunta,
 onRespostaChange,
 respostas,
}) => (
 <div className="w-full mb-6 min-h-[250px] max-w-3xl bg-gray-50 rounded-lg shadow-sm flex flex-col p-6">
  <div className="flex items-center space-x-4 mb-4">
   <h3 className="text-xl font-semibold text-gray-800">{pergunta.id}.</h3>
   <p className="text-lg text-gray-600">{pergunta.texto}</p>
  </div>
  <fieldset className="flex flex-col space-y-3 flex-grow">
   {pergunta.alternativas.map((alt) => (
    <Alternativa
     key={alt.letra}
     alternativa={alt}
     perguntaId={pergunta.id}
     onRespostaChange={onRespostaChange}
     isChecked={respostas[pergunta.id]?.nome === alt.area.nome}
    />
   ))}
  </fieldset>
 </div>
);

export default Pergunta;
