
import React, { useState } from 'react';
import { ZoomIn, ZoomOut, Move, Maximize } from 'lucide-react';

const Flowchart: React.FC = () => {
  const [zoom, setZoom] = useState(0.8);

  const handleZoomIn = () => setZoom(prev => Math.min(prev + 0.1, 2.5));
  const handleZoomOut = () => setZoom(prev => Math.max(prev - 0.1, 0.4));
  const resetZoom = () => setZoom(0.8);

  return (
    <div className="flex flex-col h-full bg-gray-100 overflow-hidden">
      {/* Controles de Visualização */}
      <div className="p-3 bg-white border-b flex items-center justify-between sticky top-0 z-20 shadow-sm">
        <div className="flex items-center gap-2">
          <button onClick={handleZoomOut} className="p-2 bg-gray-50 rounded-lg active:bg-gray-200" title="Reduzir">
            <ZoomOut size={20} />
          </button>
          <span className="text-xs font-mono font-bold text-gray-500 w-12 text-center">{Math.round(zoom * 100)}%</span>
          <button onClick={handleZoomIn} className="p-2 bg-gray-50 rounded-lg active:bg-gray-200" title="Aumentar">
            <ZoomIn size={20} />
          </button>
          <button onClick={resetZoom} className="p-2 bg-blue-50 text-blue-600 rounded-lg ml-2" title="Resetar">
            <Maximize size={20} />
          </button>
        </div>
        <div className="flex items-center gap-2 text-gray-400">
          <Move size={16} />
          <span className="text-[10px] font-bold uppercase tracking-widest hidden sm:inline">Puxe para navegar</span>
        </div>
      </div>

      {/* Área do Diagrama */}
      <div className="flex-1 overflow-auto bg-[#f0f2f5] p-6 cursor-grab active:cursor-grabbing scrollbar-hide">
        <div 
          className="transition-transform duration-200 origin-top-left flex items-start justify-center min-w-full"
          style={{ transform: `scale(${zoom})`, width: '1000px', height: '750px' }}
        >
          <div className="bg-white p-8 shadow-2xl rounded-lg border border-gray-200 relative">
            <svg width="950" height="750" viewBox="0 0 950 750" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <filter id="dropShadow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur in="SourceAlpha" stdDeviation="2" />
                  <feOffset dx="2" dy="2" result="offsetblur" />
                  <feComponentTransfer>
                    <feFuncA type="linear" slope="0.3" />
                  </feComponentTransfer>
                  <feMerge>
                    <feMergeNode />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>

                <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                  <path d="M0,0 L0,6 L9,3 z" fill="#005a42" />
                </marker>

                <style>
                  {`
                  .label-txt { font-family: 'Inter', sans-serif; font-size: 11px; font-weight: bold; text-anchor: middle; dominant-baseline: middle; fill: #1a202c; }
                  .header-txt { font-family: 'Inter', sans-serif; font-size: 14px; font-weight: bold; text-anchor: middle; dominant-baseline: middle; fill: white; }
                  .title-txt { font-family: 'Inter', sans-serif; font-size: 18px; font-weight: bold; text-anchor: middle; fill: #1a1a1a; }
                  .node-rect { stroke: #6b9c8e; stroke-width: 1px; rx: 10; ry: 10; filter: url(#dropShadow); }
                  .blue-header { fill: #001e4d; stroke: #001e4d; }
                  .green-node { fill: #c9e8d6; }
                  .red-node { fill: #ff0000; stroke: #cc0000; }
                  .bright-green-node { fill: #00c900; stroke: #00a000; }
                  .conn-line { stroke: #005a42; stroke-width: 1.5; fill: none; marker-end: url(#arrow); }
                  .plain-line { stroke: #005a42; stroke-width: 1.5; fill: none; }
                  `}
                </style>
              </defs>

              <text x="475" y="30" className="title-txt">MODOS DE OPERAÇÃO DA USINA</text>

              {/* Linhas Iniciais de Distribuição - Ajustado para o novo centro 475 */}
              <path d="M475,60 L290,60 L290,85" className="conn-line" />
              <path d="M475,60 L800,60 L800,85" className="conn-line" />

              {/* --- BLOCO AUTOMÁTICO (Centro 290) --- */}
              <rect x="220" y="85" width="140" height="45" className="node-rect blue-header" />
              <text x="290" y="107.5" className="header-txt">AUTOMÁTICO</text>

              {/* Bifurcação do Automático */}
              <path d="M290,130 L290,150 L130,150 L130,175" className="conn-line" /> 
              <path d="M290,130 L290,150 L360,150 L360,175" className="conn-line" /> 
              
              {/* S1 REDE OK */}
              <rect x="60" y="175" width="140" height="45" className="node-rect green-node" />
              <text x="130" y="197.5" className="label-txt">S1 REDE OK</text>
              <path d="M60,197.5 L40,197.5 L40,60 L290,60" className="plain-line" markerEnd="url(#arrow)" />

              {/* FALHA DE REDE S1 (Direita: 430) */}
              <rect x="290" y="175" width="140" height="45" className="node-rect red-node" />
              <text x="360" y="192" className="label-txt" style={{fill: 'white'}}>FALHA DE</text>
              <text x="360" y="208" className="label-txt" style={{fill: 'white'}}>REDE S1</text>
              <path d="M360,220 L360,245" className="conn-line" />

              <rect x="290" y="245" width="140" height="45" className="node-rect green-node" />
              <text x="360" y="262" className="label-txt">DESLIGA DISJUNTOR</text>
              <text x="360" y="278" className="label-txt">DE REDE</text>
              <path d="M360,290 L360,315" className="conn-line" />

              <rect x="290" y="315" width="140" height="45" className="node-rect green-node" />
              <text x="360" y="332" className="label-txt">COMANDO</text>
              <text x="360" y="348" className="label-txt">PARTIDA USINA</text>
              <path d="M360,360 L360,385" className="conn-line" />

              <rect x="290" y="385" width="140" height="45" className="node-rect green-node" />
              <text x="360" y="402" className="label-txt">LED S2 OK. REDE</text>
              <text x="360" y="418" className="label-txt">PRESENTE</text>
              <path d="M360,430 L360,455" className="conn-line" />

              <rect x="290" y="455" width="140" height="45" className="node-rect green-node" />
              <text x="360" y="472" className="label-txt">LIGA DISJUNTOR</text>
              <text x="360" y="488" className="label-txt">USINA</text>

              {/* Conexão para a coluna de Retorno (Central) */}
              <path d="M430,477.5 L535,477.5 L535,435" className="conn-line" />

              {/* --- BLOCO RETORNO DE REDE (Centro 535) --- */}
              <rect x="465" y="385" width="140" height="45" className="node-rect bright-green-node" />
              <text x="535" y="402" className="label-txt" style={{fill: 'white'}}>RETORNO DE</text>
              <text x="535" y="418" className="label-txt" style={{fill: 'white'}}>REDE - S1</text>
              <path d="M535,385 L535,365" className="conn-line" /> 
              
              <rect x="465" y="315" width="140" height="45" className="node-rect green-node" />
              <text x="535" y="332" className="label-txt">DESLIGA</text>
              <text x="535" y="348" className="label-txt">DISJUNTOR USINA</text>
              <path d="M535,315 L535,295" className="conn-line" /> 
              
              <rect x="465" y="245" width="140" height="45" className="node-rect green-node" />
              <text x="535" y="262" className="label-txt">LIGA DISJUNTOR</text>
              <text x="535" y="278" className="label-txt">DE REDE</text>
              <path d="M535,245 L535,225" className="conn-line" /> 
              
              <rect x="465" y="175" width="140" height="45" className="node-rect green-node" />
              <text x="535" y="197.5" className="label-txt">DESLIGA USINA</text>
              
              {/* CORREÇÃO 1: Roteamento para evitar o bloco Falha de Rede S1 (x: 290-430) */}
              {/* O caminho agora sobe pelo vão entre as colunas (x=445) */}
              <path d="M465,197.5 L445,197.5 L445,107.5 L360,107.5" className="plain-line" markerEnd="url(#arrow)" />

              {/* --- CORREÇÃO 2: BLOCO MANUAL DESLOCADO PARA A DIREITA (Centro 800) --- */}
              <rect x="730" y="85" width="140" height="45" className="node-rect blue-header" />
              <text x="800" y="107.5" className="header-txt">MANUAL</text>
              <path d="M800,130 L800,155" className="conn-line" />

              <g transform="translate(730, 155)">
                <rect width="140" height="45" className="node-rect green-node" />
                <text x="70" y="17" className="label-txt">NA ATS ACIONAR</text>
                <text x="70" y="33" className="label-txt">BOTÃO 3 MANUAL</text>
                <path d="M70,45 L70,70" className="conn-line" />
              </g>

              <g transform="translate(730, 225)">
                <rect width="140" height="45" className="node-rect green-node" />
                <text x="70" y="17" className="label-txt">INICNIA PARTIDA DA</text>
                <text x="70" y="33" className="label-txt">USINA</text>
                <path d="M70,45 L70,70" className="conn-line" />
              </g>

              <g transform="translate(730, 295)">
                <rect width="140" height="45" className="node-rect green-node" />
                <text x="70" y="12" className="label-txt">LED 4 ACENDE</text>
                <text x="70" y="28" className="label-txt">TENSÃO DE USINA</text>
                <text x="70" y="44" className="label-txt">OK</text>
                <path d="M70,45 L70,80" className="conn-line" />
              </g>

              <g transform="translate(730, 375)">
                <rect width="140" height="55" className="node-rect green-node" />
                <text x="70" y="17" className="label-txt">MUDAR CHAVE NO</text>
                <text x="70" y="30" className="label-txt">QTA PARA POSIÇÃO</text>
                <text x="70" y="43" className="label-txt">MANUAL</text>
                <path d="M70,55 L70,85" className="conn-line" />
              </g>

              <g transform="translate(730, 460)">
                <rect width="140" height="55" className="node-rect green-node" />
                <text x="70" y="15" className="label-txt">APERTAR BOTÃO 02</text>
                <text x="70" y="28" className="label-txt">NO QTA DESLIGA</text>
                <text x="70" y="41" className="label-txt">DISJUNTOR DE REDE</text>
                <path d="M70,55 L70,85" className="conn-line" />
              </g>

              <g transform="translate(730, 545)">
                <rect width="140" height="55" className="node-rect green-node" />
                <text x="70" y="15" className="label-txt">APERTAR BOTÃO 03</text>
                <text x="70" y="28" className="label-txt">NO QTA LIGAR</text>
                <text x="70" y="41" className="label-txt">DISJUNTOR DA</text>
                <path d="M70,55 L70,85" className="conn-line" />
              </g>
              
              <g transform="translate(730, 630)">
                <rect width="140" height="45" className="node-rect green-node" />
                <text x="70" y="17" className="label-txt">USINA ASSUME A</text>
                <text x="70" y="33" className="label-txt">CARGA</text>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flowchart;
