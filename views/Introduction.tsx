
import React from 'react';

const Introduction: React.FC = () => {
  return (
    <div className="p-6 space-y-8">
      <section>
        <h3 className="text-xl font-bold text-gray-800 border-b-2 border-red-600 pb-1 mb-4">Composição do Sistema</h3>
        <ul className="space-y-3">
          {[
            { label: 'QTA', value: 'Quadro de transferência automática In. 4000A' },
            { label: 'Módulo ATS', value: 'Controlador de transferência (gerenciamento de tensão)' },
            { label: 'Moto Gerador', value: '550Kva 202vca (3 máquinas em configuração de usina)' },
            { label: 'USCA', value: 'Unidade de supervisão e corrente alternada' },
          ].map((item, idx) => (
            <li key={idx} className="flex flex-col bg-gray-50 p-3 rounded-lg border border-gray-100">
              <span className="text-[10px] font-bold text-red-600 uppercase tracking-wider">{item.label}</span>
              <span className="text-sm text-gray-700">{item.value}</span>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-bold text-gray-800 border-b-2 border-red-600 pb-1 mb-4">Sistema Elétrico Geral</h3>
        <ul className="space-y-2">
          {[
            "Cabine primária: 1 disjuntor média tensão a vácuo Schneider 600 A 15kv",
            "Proteção: Rele PEXTRON URP-1439 PU",
            "2 Transformadores de 750Kva 13,8/0,22Kv iz 4,5% In: 1.960 A",
            "Monitoramento de temperatura Função 49ANSI",
            "Transformadores em paralelo 1.5Mva 13,8/0,22Kv iz 4,5% In:3.937",
            "Painel de entrada e paralelismo: 2 disjuntores ABB SACE Emax-2 4.000 A",
            "Rele EKIP Touch \"última geração\"",
          ].map((item, idx) => (
            <li key={idx} className="flex items-start gap-3 text-sm text-gray-600">
              <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-600 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-gray-800 text-white p-6 rounded-2xl shadow-inner">
        <h3 className="text-lg font-bold mb-4">Especificações da Usina</h3>
        <div className="grid grid-cols-1 gap-4">
          {[
            { label: "Gerador Individual", value: "550kva 220vca In1.440 A" },
            { label: "Usina Total (3x)", value: "3x 550Kva 220vca In 4.3220 A" },
            { label: "Motor", value: "Scânia DC13" },
            { label: "Gerador", value: "WEG" },
          ].map((item, idx) => (
            <div key={idx} className="flex justify-between items-center py-2 border-b border-gray-700 last:border-0">
              <span className="text-xs text-gray-400 font-medium uppercase">{item.label}</span>
              <span className="text-sm font-bold">{item.value}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Introduction;
