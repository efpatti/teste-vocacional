import { AreaProfissional } from "./AreaProfissional";

export class Alternativa {
 letra: string;
 texto: string;
 area: AreaProfissional;

 constructor(letra: string, texto: string, area: AreaProfissional) {
  this.letra = letra;
  this.texto = texto;
  this.area = area;
 }
}
