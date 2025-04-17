import { Alternativa } from "./Alternativa";

export class Pergunta {
 id: number;
 texto: string;
 alternativas: Alternativa[];

 constructor(id: number, texto: string, alternativas: Alternativa[]) {
  this.id = id;
  this.texto = texto;
  this.alternativas = alternativas;
 }
}
