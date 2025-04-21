// components/Resultado.tsx
import { AreaProfissional } from "@/model/AreaProfissional";

interface ResultadoProps {
 resultado: AreaProfissional;
}

export default function Resultado({ resultado }: ResultadoProps) {
 return (
  <div className="mt-8 bg-green-50 p-6 rounded-lg text-lg font-medium text-green-700 shadow-md">
   <p>
    <strong>Área mais compatível:</strong> {resultado.nome}
   </p>
   <p className="text-sm">{resultado.getDescricao()}</p>
  </div>
 );
}
