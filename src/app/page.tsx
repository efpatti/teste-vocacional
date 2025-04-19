"use client";

import { useState } from "react";
import { usePagination } from "@/hooks/usePagination";
import { AreaProfissional } from "@/model/AreaProfissional";
import { Profissao } from "@/model/Profissao";
import { Alternativa } from "@/model/Alternativa";
import { Pergunta } from "@/model/Pergunta";
import { TesteVocacional } from "@/model/TesteVocacional";

export default function Home() {
 const [resultado, setResultado] = useState<AreaProfissional | null>(null);
 const [respostas, setRespostas] = useState<{ [id: number]: AreaProfissional }>(
  {}
 );

 const exatas = new AreaProfissional("Exatas", [
  new Profissao("Desenvolvedor de Software"),
  new Profissao("Engenheiro Civil"),
  new Profissao("Arquiteto de Sistemas"),
 ]);
 const humanas = new AreaProfissional("Humanas", [
  new Profissao("Psicólogo"),
  new Profissao("Advogado"),
  new Profissao("Professor"),
 ]);
 const biologicas = new AreaProfissional("Biológicas", [
  new Profissao("Médico"),
  new Profissao("Enfermeiro"),
  new Profissao("Biólogo"),
 ]);
 const artes = new AreaProfissional("Artes", [
  new Profissao("Designer Gráfico"),
  new Profissao("Ilustrador"),
  new Profissao("Ator"),
 ]);

 const perguntas: Pergunta[] = [
  new Pergunta(1, "O que você prefere fazer no tempo livre?", [
   new Alternativa("A", "Resolver quebra-cabeças ou jogos de lógica", exatas),
   new Alternativa("B", "Conversar sobre comportamento e emoções", humanas),
   new Alternativa(
    "C",
    "Assistir documentários sobre corpo humano",
    biologicas
   ),
   new Alternativa("D", "Criar, desenhar ou tocar instrumentos", artes),
  ]),
  new Pergunta(2, "Você gostaria de trabalhar com...", [
   new Alternativa("A", "Tecnologia ou engenharia", exatas),
   new Alternativa("B", "Pessoas e seus dilemas sociais", humanas),
   new Alternativa("C", "Saúde e bem-estar", biologicas),
   new Alternativa("D", "Arte, design ou entretenimento", artes),
  ]),
  new Pergunta(3, "Você se sente mais engajado quando...", [
   new Alternativa("A", "Resolve problemas técnicos", exatas),
   new Alternativa("B", "Ajuda alguém com conselhos ou apoio", humanas),
   new Alternativa(
    "C",
    "Cuida ou observa algo relacionado à natureza ou saúde",
    biologicas
   ),
   new Alternativa("D", "Cria algo visual ou artístico", artes),
  ]),
  new Pergunta(4, "Em qual dessas atividades você se sai melhor?", [
   new Alternativa("A", "Montar ou programar coisas", exatas),
   new Alternativa("B", "Discutir e argumentar ideias", humanas),
   new Alternativa(
    "C",
    "Entender sintomas ou ajudar na saúde de alguém",
    biologicas
   ),
   new Alternativa("D", "Produzir conteúdo criativo ou artístico", artes),
  ]),
  new Pergunta(5, "Você tem mais facilidade com...", [
   new Alternativa("A", "Números e lógica", exatas),
   new Alternativa("B", "Leitura e escrita", humanas),
   new Alternativa("C", "Ciências e práticas de saúde", biologicas),
   new Alternativa("D", "Expressão artística", artes),
  ]),
  new Pergunta(6, "Quando precisa resolver algo difícil, você...", [
   new Alternativa("A", "Faz testes e experimenta soluções", exatas),
   new Alternativa("B", "Conversa com alguém para refletir melhor", humanas),
   new Alternativa(
    "C",
    "Pesquisa sintomas, causas ou detalhes físicos",
    biologicas
   ),
   new Alternativa(
    "D",
    "Pensa em como apresentar ou comunicar isso de forma criativa",
    artes
   ),
  ]),
  new Pergunta(7, "Qual dessas frases você mais se identifica?", [
   new Alternativa("A", "Gosto de entender como as coisas funcionam", exatas),
   new Alternativa("B", "Gosto de ouvir e ajudar as pessoas", humanas),
   new Alternativa(
    "C",
    "Quero fazer a diferença na saúde das pessoas",
    biologicas
   ),
   new Alternativa("D", "Me realizo criando coisas novas", artes),
  ]),
  new Pergunta(8, "Qual desses objetivos te parece mais nobre?", [
   new Alternativa("A", "Criar soluções práticas para o dia a dia", exatas),
   new Alternativa("B", "Promover justiça ou educação", humanas),
   new Alternativa(
    "C",
    "Salvar vidas ou melhorar a saúde de alguém",
    biologicas
   ),
   new Alternativa("D", "Inspirar ou emocionar pessoas através da arte", artes),
  ]),
  new Pergunta(9, "Você se considera...", [
   new Alternativa("A", "Racional e analítico", exatas),
   new Alternativa("B", "Comunicativo e empático", humanas),
   new Alternativa("C", "Cuidadoso e observador", biologicas),
   new Alternativa("D", "Imaginativo e sensível", artes),
  ]),
  new Pergunta(10, "No trabalho em grupo, você prefere...", [
   new Alternativa("A", "Organizar o plano e executar", exatas),
   new Alternativa(
    "B",
    "Medir o clima do grupo e incentivar o diálogo",
    humanas
   ),
   new Alternativa(
    "C",
    "Ficar atento aos detalhes e bem-estar de todos",
    biologicas
   ),
   new Alternativa("D", "Cuidar da estética ou apresentação final", artes),
  ]),
  new Pergunta(11, "Você se vê trabalhando mais em...", [
   new Alternativa("A", "Ambientes tecnológicos ou laboratoriais", exatas),
   new Alternativa("B", "Escritórios, escolas ou fóruns", humanas),
   new Alternativa(
    "C",
    "Hospitais, clínicas ou ao ar livre com a natureza",
    biologicas
   ),
   new Alternativa("D", "Estúdios, agências ou palcos", artes),
  ]),
  new Pergunta(12, "Você gostaria de uma rotina...", [
   new Alternativa("A", "Mais previsível e com metas técnicas claras", exatas),
   new Alternativa("B", "Com interações humanas e questões sociais", humanas),
   new Alternativa("C", "Com desafios ligados à saúde ou biologia", biologicas),
   new Alternativa("D", "Flexível e voltada à criação", artes),
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
 const perguntasPorPagina = 2;
 const {
  paginaAtual,
  totalPaginas,
  itensVisiveis: perguntasVisiveis,
  irParaProximaPagina,
  irParaPaginaAnterior,
 } = usePagination(perguntas, perguntasPorPagina);

 return (
  <main className="p-10 max-w-3xl mx-auto">
   <h1 className="text-3xl font-bold mb-8 text-center">
    Teste Vocacional Avançado
   </h1>

   {perguntasVisiveis.map((p) => (
    <div key={p.id} className="bg-white shadow p-4 mb-6 rounded">
     <div className="flex space-4 mb-2">
      <h3 className="font-bold">{p.id}.</h3>
      <p className="font-semibold">{p.texto}</p>
     </div>
     {p.alternativas.map((alt) => (
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

   <div className="flex justify-between items-center mt-6">
    <button
     disabled={paginaAtual === 0}
     onClick={irParaPaginaAnterior}
     className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400 disabled:opacity-50"
    >
     Anterior
    </button>

    <span className="text-sm font-medium">
     Página {paginaAtual + 1} de {totalPaginas}
    </span>

    {paginaAtual < totalPaginas - 1 ? (
     <button
      onClick={irParaProximaPagina}
      className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
     >
      Próxima
     </button>
    ) : (
     <button
      onClick={calcular}
      className="px-4 py-2 rounded bg-green-600 text-white hover:bg-green-700"
     >
      Ver Resultado
     </button>
    )}
   </div>

   {resultado && (
    <div className="mt-6 bg-green-100 p-4 rounded text-lg">
     <p>
      <strong>Área mais compatível:</strong> {resultado.nome}
     </p>
     <p>{resultado.getDescricao()}</p>
    </div>
   )}
  </main>
 );
}
