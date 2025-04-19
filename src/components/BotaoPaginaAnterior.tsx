// app/componentes/BotaoPaginaAnterior.tsx
import React from "react";

interface BotaoPaginaAnteriorProps {
 disabled: boolean;
 onClick: () => void;
}

const BotaoPaginaAnterior: React.FC<BotaoPaginaAnteriorProps> = ({
 disabled,
 onClick,
}) => (
 <button
  disabled={disabled}
  onClick={onClick}
  className="px-6 py-2 rounded-md bg-gray-300 hover:bg-gray-400 disabled:opacity-50 text-gray-800 font-medium transition duration-200"
 >
  Anterior
 </button>
);

export default BotaoPaginaAnterior;
