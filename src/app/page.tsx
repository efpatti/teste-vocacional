"use client";
import { useState } from "react";
import { usePagination } from "@/hooks/usePagination";
import { TesteVocacional } from "@/model/TesteVocacional";
import { AreaProfissional } from "@/model/AreaProfissional";
import { perguntas } from "@/data/perguntas";
import Pergunta from "@/components/Pergunta";
import Navegacao from "@/components/Navegacao";
import Resultado from "@/components/Resultado";

export default function Home() {
 const [resultado, setResultado] = useState<AreaProfissional | null>(null);
 const [respostas, setRespostas] = useState<{ [id: number]: AreaProfissional }>(
  {}
 );

 const teste = new TesteVocacional(perguntas);

 const handleResposta = (id: number, area: AreaProfissional) => {
  setRespostas((prev) => ({ ...prev, [id]: area }));
 };

 const calcular = () => {
  Object.entries(respostas).forEach(([id, area]) => {
   teste.responder(Number(id), area);
  });
  const res = teste.calcularResultado();
  setResultado(res);
 };

 const perguntasPorPagina = 1;
 const {
  paginaAtual,
  totalPaginas,
  itensVisiveis: perguntasVisiveis,
  irParaProximaPagina,
  irParaPaginaAnterior,
 } = usePagination(perguntas, perguntasPorPagina);

 return (
  <main className="p-8 md:p-12 max-w-4xl mx-auto flex flex-col min-h-screen items-center justify-center bg-gray-50">
   <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-8">
    Teste Vocacional
   </h1>
   <div className="flex flex-col items-center w-full bg-white rounded-lg shadow-lg p-8">
    {perguntasVisiveis.map((p) => (
     <Pergunta
      key={p.id}
      id={p.id}
      texto={p.texto}
      alternativas={p.alternativas}
      respostaSelecionada={respostas[p.id]}
      onResposta={(area) => handleResposta(p.id, area)}
     />
    ))}
    <Navegacao
     paginaAtual={paginaAtual}
     totalPaginas={totalPaginas}
     irParaProximaPagina={irParaProximaPagina}
     irParaPaginaAnterior={irParaPaginaAnterior}
     calcularResultado={calcular}
    />
    {resultado && <Resultado resultado={resultado} />}
   </div>
  </main>
 );
}
