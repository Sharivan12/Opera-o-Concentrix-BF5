
import React from 'react';
import { Phone, Mail, Globe, MapPin, ExternalLink } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="p-6">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Obrigado!</h2>
        <p className="text-sm text-gray-600 px-4">
          Estamos à disposição para garantir que seus sistemas de energia funcionem com máxima eficiência e segurança.
        </p>
      </div>

      <div className="space-y-4">
        {[
          { icon: <Phone className="text-red-600" />, label: "Telefone", value: "(11) 2602-2550", href: "tel:+551126022550" },
          { icon: <Mail className="text-red-600" />, label: "Email", value: "contato@epse.com.br", href: "mailto:contato@epse.com.br" },
          { icon: <Globe className="text-red-600" />, label: "Website", value: "epse.com.br", href: "https://epse.com.br" },
          { icon: <MapPin className="text-red-600" />, label: "Endereço", value: "Rua dos Trilhos, 600 - Mooca, São Paulo - SP", href: "https://maps.google.com/?q=Rua+dos+Trilhos+600+Mooca+SP" },
        ].map((item, idx) => (
          <a
            key={idx}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-5 bg-gray-50 border border-gray-100 rounded-2xl active:bg-gray-100 transition-colors"
          >
            <div className="w-10 h-10 flex items-center justify-center bg-white rounded-xl shadow-sm">
              {item.icon}
            </div>
            <div className="flex-1">
              <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none mb-1">{item.label}</div>
              <div className="text-sm font-semibold text-gray-800">{item.value}</div>
            </div>
            <ExternalLink size={16} className="text-gray-300" />
          </a>
        ))}
      </div>

      <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col items-center">
        <div className="bg-[#910a17] p-4 rounded-xl text-white mb-4">
           <span className="font-black text-2xl italic tracking-tighter">EPSE</span>
        </div>
        <p className="text-[10px] text-gray-400 uppercase font-bold tracking-[0.2em]">
          Energia confiável é a nossa missão
        </p>
      </div>
    </div>
  );
};

export default Contact;
