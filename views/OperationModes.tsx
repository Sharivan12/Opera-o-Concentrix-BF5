
import React from 'react';
// Added Shield, Zap, and Settings to the import list to fix "Cannot find name" errors.
import { Play, Power, AlertTriangle, ArrowRight, RefreshCcw, Shield, Zap, Settings } from 'lucide-react';

const OperationModes: React.FC = () => {
  return (
    <div className="p-6 space-y-10">
      {/* Automático */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-blue-600 text-white rounded-lg shadow-md">
            <RefreshCcw size={20} />
          </div>
          <h3 className="text-xl font-bold text-blue-700">Modo Automático</h3>
        </div>
        
        <div className="space-y-3 relative before:absolute before:left-4 before:top-4 before:bottom-4 before:w-0.5 before:bg-blue-100">
          {[
            { icon: <Shield size={14} />, text: "S1 REDE OK", desc: "Monitoramento constante", status: "success" },
            { icon: <AlertTriangle size={14} />, text: "FALHA DE REDE S1", desc: "Rede concessionária cai", status: "warning" },
            { icon: <Power size={14} />, text: "DESLIGA DISJUNTOR REDE", desc: "Q3 é desativado", status: "active" },
            { icon: <Play size={14} />, text: "COMANDO PARTIDA USINA", desc: "Sinal para AGC-150 iniciar", status: "active" },
            { icon: <Zap size={14} />, text: "LIGA DISJUNTOR USINA", desc: "Q4 assume a carga quando tensão OK", status: "active" },
          ].map((step, idx) => (
            <div key={idx} className="flex items-start gap-6 ml-1">
              <div className={`mt-2 w-6 h-6 rounded-full flex items-center justify-center z-10 text-white shadow-sm shrink-0 ${
                step.status === 'success' ? 'bg-green-500' : 
                step.status === 'warning' ? 'bg-red-500' : 'bg-blue-500'
              }`}>
                {step.icon}
              </div>
              <div className="bg-white border border-gray-100 rounded-xl p-3 shadow-sm flex-1">
                <div className="font-bold text-sm text-gray-800 uppercase leading-none mb-1">{step.text}</div>
                <div className="text-xs text-gray-500">{step.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Manual */}
      <section className="space-y-4 pt-4 border-t border-gray-100">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-orange-600 text-white rounded-lg shadow-md">
            <Settings size={20} />
          </div>
          <h3 className="text-xl font-bold text-orange-700">Modo Manual</h3>
        </div>
        
        <div className="grid grid-cols-1 gap-3">
          {[
            "Na ATS acionar BOTÃO 3 MANUAL",
            "Inicia partida da Usina",
            "Aguardar LED 4 acender (Tensão Usina OK)",
            "Mudar Chave no QTA para posição MANUAL",
            "Aperte Botão 02 no QTA para DESLIGAR Rede",
            "Aperte Botão 03 no QTA para LIGAR Usina",
            "Usina assume a carga"
          ].map((step, idx) => (
            <div key={idx} className="flex items-center gap-4 p-4 bg-orange-50 border border-orange-100 rounded-xl">
              <div className="flex-none w-8 h-8 rounded-full bg-white border border-orange-200 flex items-center justify-center font-bold text-orange-600 shadow-sm">
                {idx + 1}
              </div>
              <span className="text-sm font-medium text-orange-800">{step}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Retorno de Rede */}
      <section className="bg-green-50 border border-green-100 p-5 rounded-2xl">
        <h4 className="flex items-center gap-2 font-bold text-green-700 text-lg mb-3">
          <ArrowRight size={20} /> Retorno de Rede
        </h4>
        <ul className="space-y-3">
          <li className="flex gap-2 items-center text-sm font-medium text-green-800 bg-white/50 p-2 rounded-lg">
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
            Desliga Disjuntor Usina
          </li>
          <li className="flex gap-2 items-center text-sm font-medium text-green-800 bg-white/50 p-2 rounded-lg">
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
            Liga Disjuntor de Rede
          </li>
          <li className="flex gap-2 items-center text-sm font-medium text-green-800 bg-white/50 p-2 rounded-lg">
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
            Desliga Usina (Resfriamento)
          </li>
        </ul>
      </section>
    </div>
  );
};

export default OperationModes;
