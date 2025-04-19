import { Profissao } from "./Profissao";

export class AreaProfissional {
 nome: string;
 profissoes: Profissao[];

 constructor(nome: string, profissoes: Profissao[]) {
  this.nome = nome;
  this.profissoes = profissoes;
 }

 getDescricao(): string {
  return `Área de ${this.nome}: ${this.profissoes
   .map((p) => p.nome)
   .join(", ")}.`;
 }
}
