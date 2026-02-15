
import React from 'react';
import { View } from '../types';
import { Menu, Home, Info, Zap, Settings, Phone, ChevronLeft, GitBranch } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  currentView: View;
  setView: (view: View) => void;
  title: string;
}

const Layout: React.FC<LayoutProps> = ({ children, currentView, setView, title }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navItems = [
    { id: View.HOME, label: 'Início', icon: Home },
    { id: View.INTRO, label: 'Introdução', icon: Info },
    { id: View.MODES, label: 'Modos de Operação', icon: Zap },
    { id: View.FLOWCHART, label: 'Fluxograma', icon: GitBranch },
    { id: View.ATS, label: 'Módulo ATS (DSE)', icon: Settings },
    { id: View.AGC, label: 'Módulo AGC-150', icon: Settings },
    { id: View.CONTACT, label: 'Contato', icon: Phone },
  ];

  const handleNavClick = (view: View) => {
    setView(view);
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col max-w-md mx-auto bg-white shadow-xl relative">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-[#910a17] text-white p-4 flex items-center justify-between shadow-md">
        <div className="flex items-center gap-2 overflow-hidden">
          {currentView !== View.HOME && (
            <button onClick={() => setView(View.HOME)} className="p-1 shrink-0">
              <ChevronLeft size={24} />
            </button>
          )}
          <h1 className="font-bold text-sm sm:text-lg truncate uppercase tracking-tight">
            {currentView === View.HOME ? 'EPSE - OPERAÇÃO CONCENTRIX BF5' : title}
          </h1>
        </div>
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 hover:bg-white/10 rounded-full transition-colors shrink-0"
        >
          <Menu size={24} />
        </button>
      </header>

      {/* Sidebar Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-50 transition-opacity"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Sidebar Menu */}
      <div className={`fixed top-0 right-0 h-full w-64 bg-white z-50 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} shadow-2xl`}>
        <div className="p-6 bg-[#910a17] text-white">
          <div className="font-bold text-xl">EPSE</div>
          <div className="text-sm opacity-80">Manual Digital 1.5MVA</div>
        </div>
        <nav className="p-4">
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full flex items-center gap-3 p-3 rounded-lg transition-colors ${
                    currentView === item.id 
                    ? 'bg-[#910a17] text-white' 
                    : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <item.icon size={20} />
                  <span className="font-medium text-sm">{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto pb-20">
        {children}
      </main>

      {/* Quick Access Bottom Bar */}
      {currentView !== View.HOME && (
         <div className="fixed bottom-4 right-4 z-30">
            <button 
              onClick={() => setView(View.HOME)}
              className="bg-[#910a17] text-white p-4 rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
            >
              <Home size={24} />
            </button>
         </div>
      )}
    </div>
  );
};

export default Layout;
