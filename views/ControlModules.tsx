
import React, { useState } from 'react';

interface ModuleProps {
  type: 'ATS' | 'AGC';
}

const FaceplateAGC: React.FC<{ activeId: number | null }> = ({ activeId }) => (
  <svg viewBox="0 0 450 340" className="w-full h-auto drop-shadow-2xl">
    {/* Corpo Principal */}
    <rect x="10" y="10" width="430" height="320" rx="4" fill="#1a1c1e" />
    
    {/* Seção Superior (Painel de Visor e Nav) */}
    <rect x="10" y="10" width="430" height="180" fill="#5c666f" rx="4" />
    <rect x="75" y="45" width="165" height="95" fill="white" rx="2" stroke="#333" />
    {/* Texto do Visor */}
    <text x="80" y="60" fill="black" className="text-[7px] font-mono font-bold">FIXED POWER    SEMI</text>
    <text x="80" y="75" fill="black" className="text-[7px] font-mono italic text-opacity-70">BB L1 50.00Hz   400V</text>
    <text x="80" y="90" fill="black" className="text-[7px] font-mono italic">G      1.00PF   449kW</text>
    
    {/* Logo DEIF */}
    <rect x="25" y="25" width="35" height="15" fill="white" rx="2" />
    <text x="42" y="36" textAnchor="middle" fill="#004a87" className="text-[8px] font-black italic">DEIF</text>

    {/* 1. Teclas de Navegação AGC */}
    <g transform="translate(330, 95)">
      <circle r="60" fill="#3a444d" opacity="0.5" />
      {/* Botão Cima */}
      <circle cx="0" cy="-35" r="14" fill={activeId === 1 ? "#fbbf24" : "#2a333a"} stroke="white" strokeWidth="0.5" />
      <path d="M-4 -33 L0 -39 L4 -33" fill="none" stroke="white" strokeWidth="1.5" />
      {/* Botão Baixo */}
      <circle cx="0" cy="35" r="14" fill={activeId === 1 ? "#fbbf24" : "#2a333a"} stroke="white" strokeWidth="0.5" />
      <path d="M-4 33 L0 39 L4 33" fill="none" stroke="white" strokeWidth="1.5" />
      {/* Botão Esq */}
      <circle cx="-45" cy="0" r="14" fill={activeId === 1 ? "#fbbf24" : "#2a333a"} stroke="white" strokeWidth="0.5" />
      <path d="M-43 -4 L-49 0 L-43 4" fill="none" stroke="white" strokeWidth="1.5" />
      {/* Botão Dir */}
      <circle cx="25" cy="0" r="14" fill={activeId === 1 ? "#fbbf24" : "#2a333a"} stroke="white" strokeWidth="0.5" />
      <path d="M23 -4 L29 0 L23 4" fill="none" stroke="white" strokeWidth="1.5" />
      {/* Botão OK */}
      <circle cx="-10" cy="0" r="14" fill={activeId === 1 ? "#fbbf24" : "#2a333a"} stroke="white" strokeWidth="0.5" />
      <text x="-10" y="3" textAnchor="middle" fill="white" className="text-[7px] font-bold">OK</text>
      {/* Botão Back */}
      <circle cx="25" cy="35" r="14" fill={activeId === 1 ? "#fbbf24" : "#2a333a"} stroke="white" strokeWidth="0.5" />
      <path d="M21 35 L29 35 M22 35 L25 32 M22 35 L25 38" fill="none" stroke="white" strokeWidth="1" />
    </g>

    {/* Seção Inferior (Sinótico) */}
    {/* 2. Start / 3. Stop */}
    <circle cx="45" cy="225" r="15" fill="none" stroke={activeId === 2 ? "#fbbf24" : "#22c55e"} strokeWidth="2" />
    <text x="45" y="230" textAnchor="middle" fill="#22c55e" className="text-[12px] font-bold">I</text>
    
    <circle cx="45" cy="285" r="15" fill="none" stroke={activeId === 3 ? "#fbbf24" : "#ef4444"} strokeWidth="2" />
    <circle cx="45" cy="285" r="8" fill="none" stroke="#ef4444" strokeWidth="2" />

    {/* Linha Mimic Verde */}
    <path d="M140 250 L290 250" stroke="#22c55e" strokeWidth="4" strokeDasharray="10 5" />
    <path d="M205 250 L205 220" stroke="#22c55e" strokeWidth="4" />
    <path d="M201 225 L205 215 L209 225" fill="none" stroke="#22c55e" strokeWidth="2" />

    {/* 4. LED Gerador */}
    <rect x="110" y="240" width="20" height="20" fill="none" stroke={activeId === 4 ? "#fbbf24" : "#22c55e"} strokeWidth="2" />
    <path d="M112 255 Q115 245 120 250 T128 245" fill="none" stroke="#22c55e" strokeWidth="1" />

    {/* 5 / 8 Status Barra (Círculos Superiores) */}
    <circle cx="185" cy="235" r="12" fill="none" stroke={activeId === 5 || activeId === 8 ? "#fbbf24" : "#22c55e"} strokeWidth="2" />
    <line x1="178" y1="235" x2="192" y2="235" stroke="#22c55e" strokeWidth="2" />
    
    <circle cx="265" cy="235" r="12" fill="none" stroke={activeId === 5 || activeId === 8 ? "#fbbf24" : "#22c55e"} strokeWidth="2" />
    <line x1="258" y1="235" x2="272" y2="235" stroke="#22c55e" strokeWidth="2" />

    {/* 6 / 7 Comandos (Círculos Vermelhos Inferiores) */}
    <circle cx="185" cy="285" r="12" fill="none" stroke={activeId === 6 ? "#fbbf24" : "#ef4444"} strokeWidth="2" />
    <line x1="178" y1="289" x2="192" y2="281" stroke="#ef4444" strokeWidth="2" />

    <circle cx="265" cy="285" r="12" fill="none" stroke={activeId === 7 ? "#fbbf24" : "#ef4444"} strokeWidth="2" />
    <line x1="258" y1="289" x2="272" y2="281" stroke="#ef4444" strokeWidth="2" />

    {/* 9. Transformador (Símbolos de Círculos Entrelaçados) */}
    <circle cx="310" cy="250" r="12" fill="none" stroke={activeId === 9 ? "#fbbf24" : "#22c55e"} strokeWidth="2" />
    <circle cx="325" cy="250" r="12" fill="none" stroke={activeId === 9 ? "#fbbf24" : "#22c55e"} strokeWidth="2" />

    {/* Painel de Botões da Direita (10, 11, 12, 13) */}
    <g transform="translate(360, 205)">
      {/* 10. Auto */}
      <rect x="0" y="0" width="35" height="25" rx="10" fill={activeId === 10 ? "#008ba3" : "#333"} />
      <path d="M12 12 Q17 7 22 12 T27 7" fill="none" stroke="white" strokeWidth="1" opacity="0.6" />
      <circle cx="17.5" cy="12.5" r="6" fill="none" stroke="white" strokeWidth="1" />
      
      {/* 12. Mute */}
      <rect x="45" y="0" width="35" height="25" rx="10" fill={activeId === 12 ? "#008ba3" : "#333"} />
      <path d="M55 12 L65 12 M60 7 L60 17" stroke="white" strokeWidth="1" transform="rotate(45 60 12)" />

      {/* 11. Manual */}
      <rect x="0" y="45" width="35" height="25" rx="10" fill={activeId === 11 ? "#008ba3" : "#333"} />
      <path d="M10 57 L25 57 M15 52 L10 57 L15 62 M20 52 L25 57 L20 62" fill="none" stroke="white" strokeWidth="1" />

      {/* 13. Menu */}
      <rect x="45" y="45" width="35" height="25" rx="10" fill={activeId === 13 ? "#004a87" : "#333"} />
      <path d="M55 52 L65 52 M55 57 L65 57 M55 62 L65 62" stroke="white" strokeWidth="1.5" />
    </g>
  </svg>
);

const FaceplateATS: React.FC<{ activeId: number | null }> = ({ activeId }) => (
  <svg viewBox="0 0 450 340" className="w-full h-auto drop-shadow-2xl">
    {/* Borda Externa */}
    <rect x="5" y="5" width="440" height="330" rx="15" fill="#111" stroke="#333" strokeWidth="3" />
    
    {/* Seção Superior (Visor e Nav) */}
    <rect x="15" y="15" width="420" height="150" fill="#1a1a1a" rx="10" />
    
    {/* Logo e Nome */}
    <rect x="160" y="25" width="20" height="20" fill="#eee" rx="2" />
    <text x="170" y="38" textAnchor="middle" fill="black" className="text-[8px] font-black">DSE</text>
    <text x="185" y="38" fill="white" className="text-[10px] font-bold">DEEP SEA ELECTRONICS</text>
    <text x="350" y="38" fill="#888" className="text-[8px] font-bold">DSE 335</text>

    {/* 1. Teclas de Navegação DSE */}
    <g transform="translate(85, 95)">
      {/* Botões Cima/Baixo/Esq/Dir */}
      <circle cx="0" cy="-35" r="12" fill={activeId === 1 ? "#fbbf24" : "#333"} stroke="#444" />
      <path d="M-3 -33 L0 -38 L3 -33" fill="none" stroke="white" strokeWidth="1.5" />
      <circle cx="0" cy="35" r="12" fill={activeId === 1 ? "#fbbf24" : "#333"} stroke="#444" />
      <path d="M-3 33 L0 38 L3 33" fill="none" stroke="white" strokeWidth="1.5" />
      <circle cx="-35" cy="0" r="12" fill={activeId === 1 ? "#fbbf24" : "#333"} stroke="#444" />
      <path d="M-33 -3 L-38 0 L-33 3" fill="none" stroke="white" strokeWidth="1.5" />
      <circle cx="35" cy="0" r="12" fill={activeId === 1 ? "#fbbf24" : "#333"} stroke="#444" />
      <path d="M33 -3 L38 0 L33 3" fill="none" stroke="white" strokeWidth="1.5" />
      {/* Centro Check */}
      <circle cx="0" cy="0" r="14" fill={activeId === 1 ? "#fbbf24" : "white"} />
      <path d="M-5 0 L-2 4 L5 -4" fill="none" stroke="black" strokeWidth="2" />
    </g>

    {/* Visor LCD Verde */}
    <rect x="150" y="45" width="160" height="90" fill="#5c8a3c" rx="2" stroke="#2a3d1b" strokeWidth="2" />
    <text x="155" y="65" fill="#1a2e10" className="text-[8px] font-bold">THE ULTIMATE</text>
    <text x="155" y="75" fill="#1a2e10" className="text-[8px] font-bold">INTELLIGENT CONTROL</text>
    <text x="250" y="105" textAnchor="middle" fill="#1a2e10" className="text-[35px] font-black">DSE</text>
    
    {/* LEDs Laterais (Lado do Visor) */}
    <g transform="translate(325, 60)">
      <circle cx="0" cy="0" r="4" fill="#7f1d1d" stroke="#ef4444" strokeWidth="1" />
      <text x="12" y="3" fill="#888" className="text-[6px] font-bold uppercase">System in Auto</text>
      <circle cx="0" cy="18" r="4" fill="#7f1d1d" stroke="#ef4444" strokeWidth="1" />
      <text x="12" y="21" fill="#888" className="text-[6px] font-bold uppercase">S1 Available</text>
      <circle cx="0" cy="36" r="4" fill="#7f1d1d" stroke="#ef4444" strokeWidth="1" />
      <text x="12" y="39" fill="#888" className="text-[6px] font-bold uppercase">Warning Alarm</text>
      <circle cx="0" cy="54" r="4" fill="#7f1d1d" stroke="#ef4444" strokeWidth="1" />
      <text x="12" y="57" fill="#888" className="text-[6px] font-bold uppercase">S2 Available</text>
    </g>

    {/* Sinótico Central (Transferência) */}
    <g transform="translate(25, 175)">
      {/* 2 / 13 Switch Botões */}
      <circle cx="65" cy="35" r="20" fill={activeId === 2 ? "#fbbf24" : "white"} stroke="#444" />
      <path d="M55 35 L75 35 M60 40 L65 35" stroke="black" strokeWidth="1" />
      <text x="65" y="22" textAnchor="middle" fill="#888" className="text-[8px] font-bold uppercase">S1</text>
      
      <circle cx="335" cy="35" r="20" fill={activeId === 13 ? "#fbbf24" : "white"} stroke="#444" />
      <path d="M325 35 L345 35 M330 40 L335 35" stroke="black" strokeWidth="1" />
      <text x="335" y="22" textAnchor="middle" fill="#888" className="text-[8px] font-bold uppercase">S2</text>

      {/* Ícone de Prédio Central */}
      <path d="M190 60 L190 35 L200 35 L200 45 L210 45 L210 30 L220 30 L220 60 Z" fill="white" />

      {/* 9, 10, 11, 12 LEDs de Status Sinótico */}
      <path d="M65 75 L335 75" stroke="white" strokeWidth="1" />
      <circle cx="65" cy="75" r="4" fill={activeId === 9 ? "#fbbf24" : "#4ade80"} />
      <circle cx="150" cy="75" r="4" fill={activeId === 10 ? "#fbbf24" : "#4ade80"} />
      <circle cx="250" cy="75" r="4" fill={activeId === 11 ? "#fbbf24" : "#4ade80"} />
      <circle cx="335" cy="75" r="4" fill={activeId === 12 ? "#fbbf24" : "#4ade80"} />
    </g>

    {/* Botões de Comando Inferiores (3 a 8) */}
    <g transform="translate(55, 265)">
      {/* 3. OFF */}
      <rect x="0" y="0" width="45" height="45" rx="4" fill={activeId === 3 ? "#fbbf24" : "#ef4444"} stroke="#111" />
      <circle cx="22.5" cy="22.5" r="12" fill="none" stroke="white" strokeWidth="4" />
      <circle cx="40" cy="5" r="3" fill="#7f1d1d" stroke="#ef4444" />

      {/* 4. MAN */}
      <rect x="55" y="0" width="45" height="45" rx="4" fill={activeId === 4 ? "#fbbf24" : "white"} stroke="#111" />
      <path d="M72 20 Q77 15 82 20 L82 30 Q77 35 72 30 Z" fill="none" stroke="#333" strokeWidth="1" />
      <circle cx="95" cy="5" r="3" fill="#7f1d1d" stroke="#ef4444" />

      {/* 5. AUTO */}
      <rect x="110" y="0" width="45" height="45" rx="4" fill={activeId === 5 ? "#fbbf24" : "white"} stroke="#111" />
      <rect x="118" y="15" width="29" height="15" rx="4" fill="none" stroke="#333" strokeWidth="1" />
      <text x="132.5" y="25" textAnchor="middle" fill="#333" className="text-[7px] font-bold">AUTO</text>
      <circle cx="150" cy="5" r="3" fill="#7f1d1d" stroke="#ef4444" />

      {/* 6. MODE */}
      <rect x="165" y="0" width="45" height="45" rx="4" fill={activeId === 6 ? "#fbbf24" : "#22c55e"} stroke="#111" />
      <text x="187.5" y="26" textAnchor="middle" fill="white" className="text-[8px] font-bold">Mode</text>
      <circle cx="205" cy="5" r="3" fill="#14532d" stroke="#4ade80" />

      {/* 7. ALARM */}
      <rect x="220" y="0" width="45" height="45" rx="4" fill={activeId === 7 ? "#fbbf24" : "white"} stroke="#111" />
      <path d="M232 22 L242 12 M242 32 L232 22" fill="none" stroke="#333" strokeWidth="1.5" />
      <circle cx="260" cy="5" r="3" fill="#7f1d1d" stroke="#ef4444" />

      {/* 8. INFO */}
      <rect x="275" y="0" width="45" height="45" rx="4" fill={activeId === 8 ? "#fbbf24" : "white"} stroke="#111" />
      <text x="297.5" y="28" textAnchor="middle" fill="#333" className="text-[25px] font-serif font-black italic">i</text>
      <circle cx="315" cy="5" r="3" fill="#7f1d1d" stroke="#ef4444" />
    </g>
  </svg>
);

const ControlModules: React.FC<ModuleProps> = ({ type }) => {
  const [activeItem, setActiveItem] = useState<number | null>(null);

  const atsData = [
    { id: 1, label: "Teclas de Navegação", desc: "Acesso a parâmetros de rede, usina e alarmes no visor LCD." },
    { id: 2, label: "S1 (Comando Rede)", desc: "Aciona/Desativa disjuntor de rede em modo MANUAL." },
    { id: 3, label: "OFF (Vermelho)", desc: "Inativa monitoramento e impede a partida automática da usina." },
    { id: 4, label: "MANUAL", desc: "Operação manual onde a usina parte mas não transfere carga sozinha." },
    { id: 5, label: "AUTO", desc: "Monitoramento constante da rede S1 e transferência automática em falhas." },
    { id: 6, label: "MODE", desc: "Botão verde para seleção rápida entre os modos Manual/Auto/OFF." },
    { id: 7, label: "ALARM", desc: "Inibe/silencia a sirene de alarme ativa no painel." },
    { id: 8, label: "INFO (i)", desc: "Exibe informações de firmware, software e dados do controlador." },
    { id: 9, label: "LED: S1 Presente", desc: "Indicador verde luminoso de que a rede concessionária S1 está normal." },
    { id: 10, label: "LED: Q3 Fechado", desc: "Indica que o disjuntor de rede principal está alimentando a carga." },
    { id: 11, label: "LED: Q4 Fechado", desc: "Indica que o disjuntor da usina de geradores está fechado." },
    { id: 12, label: "LED: S2 Presente", desc: "Indicador de tensão de saída da usina pronta para carga." },
    { id: 13, label: "S2 (Comando Usina)", desc: "Aciona/Desativa disjuntor da usina em modo MANUAL." },
  ];

  const agcData = [
    { id: 1, label: "Teclas de Navegação", desc: "Setas para navegar entre grandezas elétricas e logs no visor branco." },
    { id: 2, label: "START (I)", desc: "Botão verde para iniciar a sequência de partida do gerador." },
    { id: 3, label: "STOP (O)", desc: "Botão vermelho para desligar o grupo gerador de forma segura." },
    { id: 4, label: "LED: Tensão Barra", desc: "Indicador verde de tensão ativa no barramento de sincronismo." },
    { id: 5, label: "LED: Barra Fechada", desc: "Indica que o disjuntor de barramento está fechado (Top)." },
    { id: 6, label: "CMD: Barra", desc: "Botão vermelho inferior para comando manual do barramento." },
    { id: 7, label: "CMD: Gerador", desc: "Botão vermelho inferior para acionamento do disjuntor da máquina." },
    { id: 8, label: "LED: Barra Fechada (2)", desc: "Confirmação redundante de fechamento de barra (Top)." },
    { id: 9, label: "Status: Transformador", desc: "Indica alimentação na saída (Transformer Output)." },
    { id: 10, label: "Status: Automático", desc: "Botão ciano superior para ativar controle automático de sincronismo." },
    { id: 11, label: "Status: Manual", desc: "Botão ciano inferior para controle manual da usina." },
    { id: 12, label: "Silenciar Alarme", desc: "Botão ciano superior para silenciar falhas sonoras." },
    { id: 13, label: "MENU", desc: "Botão ciano inferior para acesso profundo aos parâmetros." },
  ];

  const currentData = type === 'ATS' ? atsData : agcData;
  const title = type === 'ATS' ? 'Módulo DSE 335 ATS' : 'Interface DEIF AGC-150';

  return (
    <div className="p-6">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-gray-800 tracking-tight">{title}</h3>
        <p className="text-xs text-gray-500 uppercase font-bold tracking-widest mt-1">Visão Geral de Painel</p>
      </div>

      <div className="mb-8 bg-black p-4 rounded-xl shadow-2xl border-4 border-[#333]">
         <div className="w-full flex items-center justify-center">
           {type === 'ATS' ? (
             <FaceplateATS activeId={activeItem} />
           ) : (
             <FaceplateAGC activeId={activeItem} />
           )}
         </div>
      </div>

      <div className="grid grid-cols-1 gap-2">
        {currentData.map((item) => (
          <button 
            key={item.id} 
            onClick={() => setActiveItem(activeItem === item.id ? null : item.id)}
            className={`w-full flex items-start gap-3 p-4 text-left border rounded-2xl transition-all ${
              activeItem === item.id 
              ? 'bg-[#910a17] border-[#910a17] text-white shadow-lg' 
              : 'bg-white border-gray-100 text-gray-800 shadow-sm'
            }`}
          >
            <div className={`flex-none w-8 h-8 rounded-lg flex items-center justify-center font-black text-xs ${
              activeItem === item.id ? 'bg-white text-[#910a17]' : 'bg-gray-100 text-gray-400'
            }`}>
              {item.id}
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-sm uppercase tracking-tight leading-tight mb-1">
                {item.label}
              </h4>
              <p className={`text-[11px] leading-tight ${
                activeItem === item.id ? 'opacity-90' : 'text-gray-500'
              }`}>
                {item.desc}
              </p>
            </div>
          </button>
        ))}
      </div>
      
      <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-xl flex items-center gap-3">
        <div className="p-2 bg-yellow-400 rounded-full text-white shadow-sm">
           <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
        </div>
        <p className="text-[10px] text-yellow-800 font-bold uppercase tracking-tight">
          Toque nos itens acima para destacar o componente no painel digital.
        </p>
      </div>
    </div>
  );
};

export default ControlModules;
