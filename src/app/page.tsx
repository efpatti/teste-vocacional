"use client";

import { useState } from "react";
import { AreaProfissional } from "../model/AreaProfissional";
import { Alternativa } from "../model/Alternativa";
import { Pergunta } from "../model/Pergunta";
import { TesteVocacional } from "../model/TesteVocacional";

export default function Home() {
 const [resultado, setResultado] = useState<AreaProfissional | null>(null);
 const [respostas, setRespostas] = useState<{ [id: number]: AreaProfissional }>(
  {}
 );

 const exatas = new AreaProfissional("Exatas", [
  "Engenheiro de Software",
  "Cientista de Dados",
  "Analista de Sistemas",
 ]);
 const humanas = new AreaProfissional("Humanas", [
  "Advogado Criminalista",
  "Jornalista Investigativo",
  "Professor de Filosofia",
 ]);
 const biologicas = new AreaProfissional("Biológicas", [
  "Médico Veterinário",
  "Biólogo Marinho",
  "Pesquisador Biomédico",
 ]);
 const artes = new AreaProfissional("Artes", [
  "Designer Gráfico",
  "Ilustrador Digital",
  "Ator de Teatro",
 ]);

 const perguntas: Pergunta[] = [
  new Pergunta(1, "O que você prefere fazer no tempo livre?", [
   new Alternativa("A", "Resolver quebra-cabeças ou jogos de lógica", exatas),
   new Alternativa("B", "Ler livros ou escrever", humanas),
   new Alternativa(
    "C",
    "Assistir documentários sobre natureza ou saúde",
    biologicas
   ),
   new Alternativa("D", "Desenhar, tocar instrumentos ou dançar", artes),
  ]),
  new Pergunta(2, "Qual matéria você mais gostava na escola?", [
   new Alternativa("A", "Matemática ou Física", exatas),
   new Alternativa("B", "História ou Filosofia", humanas),
   new Alternativa("C", "Biologia ou Química", biologicas),
   new Alternativa("D", "Educação artística ou Música", artes),
  ]),
  new Pergunta(3, "Que tipo de profissão te atrai mais?", [
   new Alternativa("A", "Engenheiro, programador, cientista de dados", exatas),
   new Alternativa("B", "Professor, advogado, jornalista", humanas),
   new Alternativa("C", "Médico, biólogo, nutricionista", biologicas),
   new Alternativa("D", "Designer, músico, ator", artes),
  ]),
 ];

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

 return (
  <main className="p-10 max-w-3xl mx-auto">
   <h1 className="text-3xl font-bold mb-8 text-center">
    Teste Vocacional Avançado
   </h1>
   {perguntas.map((p) => (
    <div key={p.id} className="bg-white shadow p-4 mb-6 rounded">
     <p className="font-semibold mb-2">{p.texto}</p>
     {p.alternativas.map((alt: any) => (
      <label key={alt.letra} className="block mb-1">
       <input
        type="radio"
        name={`pergunta-${p.id}`}
        onChange={() => handleResposta(p.id, alt.area)}
        checked={respostas[p.id]?.nome === alt.area.nome}
        className="mr-2"
       />
       {alt.letra}) {alt.texto}
      </label>
     ))}
    </div>
   ))}

   <div className="text-center">
    <button
     onClick={calcular}
     className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
    >
     Ver Resultado
    </button>

    {resultado && (
     <div className="mt-6 bg-green-100 p-4 rounded text-lg">
      <p>
       <strong>Área mais compatível:</strong> {resultado.nome}
      </p>
      <p>{resultado.getDescricao()}</p>
     </div>
    )}
   </div>
  </main>
 );
}
