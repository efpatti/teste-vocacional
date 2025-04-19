import { useState } from "react";

export function usePagination<T>(items: T[], itensPorPagina: number) {
 const [paginaAtual, setPaginaAtual] = useState(0);

 const totalPaginas = Math.ceil(items.length / itensPorPagina);

 const irParaProximaPagina = () => {
  if (paginaAtual < totalPaginas - 1) setPaginaAtual((prev) => prev + 1);
 };

 const irParaPaginaAnterior = () => {
  if (paginaAtual > 0) setPaginaAtual((prev) => prev - 1);
 };

 const irParaPagina = (pagina: number) => {
  if (pagina >= 0 && pagina < totalPaginas) setPaginaAtual(pagina);
 };

 const itensVisiveis = items.slice(
  paginaAtual * itensPorPagina,
  paginaAtual * itensPorPagina + itensPorPagina
 );

 return {
  paginaAtual,
  totalPaginas,
  itensVisiveis,
  irParaProximaPagina,
  irParaPaginaAnterior,
  irParaPagina,
 };
}
