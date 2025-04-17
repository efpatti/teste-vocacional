import { Pergunta } from "./Pergunta";
import { AreaProfissional } from "./AreaProfissional";

export class TesteVocacional {
 perguntas: Pergunta[];
 respostas: Map<number, AreaProfissional> = new Map();

 constructor(perguntas: Pergunta[]) {
  this.perguntas = perguntas;
 }

 responder(perguntaId: number, area: AreaProfissional) {
  this.respostas.set(perguntaId, area);
 }

 calcularResultado(): AreaProfissional | null {
  const contagem = new Map<string, number>();

  this.respostas.forEach((area) => {
   contagem.set(area.nome, (contagem.get(area.nome) || 0) + 1);
  });

  let maisFrequente: [string, number] = ["", 0];

  contagem.forEach((valor, chave) => {
   if (valor > maisFrequente[1]) {
    maisFrequente = [chave, valor];
   }
  });

  return (
   Array.from(this.respostas.values()).find(
    (a) => a.nome === maisFrequente[0]
   ) || null
  );
 }
}
