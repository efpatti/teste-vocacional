// components/Navegacao.tsx
interface NavegacaoProps {
 paginaAtual: number;
 totalPaginas: number;
 irParaProximaPagina: () => void;
 irParaPaginaAnterior: () => void;
 calcularResultado: () => void;
}

export default function Navegacao({
 paginaAtual,
 totalPaginas,
 irParaProximaPagina,
 irParaPaginaAnterior,
 calcularResultado,
}: NavegacaoProps) {
 return (
  <div className="flex justify-center items-center space-x-4 mt-8 w-full">
   <button
    disabled={paginaAtual === 0}
    onClick={irParaPaginaAnterior}
    className="px-6 py-2 rounded-md bg-gray-300 hover:bg-gray-400 disabled:opacity-50 text-gray-800 font-medium transition duration-200"
   >
    Anterior
   </button>
   {paginaAtual < totalPaginas - 1 ? (
    <button
     onClick={irParaProximaPagina}
     className="px-6 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition duration-200"
    >
     Próxima
    </button>
   ) : (
    <button
     onClick={calcularResultado}
     className="px-6 py-2 rounded-md bg-green-500 text-white hover:bg-green-600 transition duration-200"
    >
     Ver Resultado
    </button>
   )}
  </div>
 );
}
