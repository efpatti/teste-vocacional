export class AreaProfissional {
 nome: string;
 profissões: string[];

 constructor(nome: string, profissões: string[]) {
  this.nome = nome;
  this.profissões = profissões;
 }

 getDescricao(): string {
  return `Área de ${this.nome}: ${this.profissões.join(", ")}.`;
 }
}
