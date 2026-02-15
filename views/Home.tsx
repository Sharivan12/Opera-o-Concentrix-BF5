
import React from 'react';
import { View } from '../types';
import { Zap, Settings, Shield, Info, Phone, GitBranch } from 'lucide-react';

interface HomeProps {
  onNavigate: (view: View) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const cards = [
    { id: View.INTRO, label: 'Introdução & Sistema', icon: Info, color: 'bg-blue-50 text-blue-700', border: 'border-blue-100' },
    { id: View.MODES, label: 'Modos de Operação', icon: Zap, color: 'bg-yellow-50 text-yellow-700', border: 'border-yellow-100' },
    { id: View.FLOWCHART, label: 'Fluxograma', icon: GitBranch, color: 'bg-purple-50 text-purple-700', border: 'border-purple-100' },
    { id: View.ATS, label: 'Módulo ATS DSE 335', icon: Settings, color: 'bg-red-50 text-red-700', border: 'border-red-100' },
    { id: View.AGC, label: 'Módulo AGC-150', icon: Shield, color: 'bg-green-50 text-green-700', border: 'border-green-100' },
    { id: View.CONTACT, label: 'Suporte & Contato', icon: Phone, color: 'bg-gray-50 text-gray-700', border: 'border-gray-100' },
  ];

  return (
    <div className="flex flex-col gap-6 p-6 min-h-full">
      <div className="relative h-48 rounded-2xl overflow-hidden shadow-lg bg-[#910a17]">
        <img 
          src="https://picsum.photos/seed/factory/800/400" 
          alt="Usina" 
          className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-40"
        />
        <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
          <div className="text-xs font-bold uppercase tracking-widest mb-1 opacity-80">Manual de Operação</div>
          <h2 className="text-2xl font-bold leading-tight">Usina 1.5MVA<br/>Concentrix BF-5</h2>
          <div className="mt-2 inline-block bg-white/20 px-2 py-1 rounded text-[10px] font-medium backdrop-blur-sm">
            Versão 1.0
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {cards.map((card) => (
          <button
            key={card.id}
            onClick={() => onNavigate(card.id)}
            className={`flex flex-col items-start gap-3 p-4 rounded-xl border-2 ${card.border} ${card.color} transition-all active:scale-95 text-left`}
          >
            <div className={`p-2 rounded-lg bg-white shadow-sm`}>
              <card.icon size={20} />
            </div>
            <span className="font-bold text-sm leading-snug">{card.label}</span>
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-3">
        <div className="p-5 bg-gray-900 rounded-2xl text-white shadow-xl">
          <h3 className="text-sm font-bold uppercase tracking-wider text-red-400 mb-2">Aviso de Segurança</h3>
          <p className="text-xs leading-relaxed opacity-90">
            A operação deste sistema deve ser realizada apenas por técnicos qualificados. Use sempre EPIs adequados ao manipular painéis elétricos.
          </p>
        </div>

        <div className="text-center pb-4">
          <p className="text-[10px] text-gray-400 font-medium uppercase tracking-wider">
            Desenvolvido por: Diego Braz
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
