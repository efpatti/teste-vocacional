// components/Pergunta.tsx
import { AreaProfissional } from "@/model/AreaProfissional";

interface PerguntaProps {
 id: number;
 texto: string;
 alternativas: { letra: string; texto: string; area: AreaProfissional }[];
 respostaSelecionada: AreaProfissional | undefined;
 onResposta: (area: AreaProfissional) => void;
}

export default function Pergunta({
 id,
 texto,
 alternativas,
 respostaSelecionada,
 onResposta,
}: PerguntaProps) {
 return (
  <div className="w-full mb-6 min-h-[200px] max-w-3xl bg-gray-50 rounded-lg shadow-sm flex flex-col p-6">
   <div className="flex items-center space-x-4 mb-4">
    <h3 className="text-xl font-semibold text-gray-800">{id}.</h3>
    <p className="text-lg text-gray-600">{texto}</p>
   </div>
   <div className="flex flex-col space-y-3 h-full justify-between">
    {alternativas.map((alt) => (
     <label key={alt.letra} className="flex items-center text-gray-700 text-sm">
      <input
       type="radio"
       name={`pergunta-${id}`}
       onChange={() => onResposta(alt.area)}
       checked={respostaSelecionada?.nome === alt.area.nome}
       className="mr-3 text-blue-600 focus:ring-2 focus:ring-blue-400"
      />
      {alt.letra}) {alt.texto}
     </label>
    ))}
   </div>
  </div>
 );
}
