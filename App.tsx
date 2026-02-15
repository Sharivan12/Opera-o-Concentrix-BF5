
import React, { useState } from 'react';
import { View } from './types';
import Layout from './components/Layout';
import Home from './views/Home';
import Introduction from './views/Introduction';
import OperationModes from './views/OperationModes';
import Flowchart from './views/Flowchart';
import ControlModules from './views/ControlModules';
import Contact from './views/Contact';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>(View.HOME);

  const getTitle = (view: View) => {
    switch (view) {
      case View.HOME: return 'Início';
      case View.INTRO: return 'Sistema Elétrico';
      case View.MODES: return 'Modos de Operação';
      case View.FLOWCHART: return 'Fluxograma';
      case View.ATS: return 'Módulo ATS';
      case View.AGC: return 'Módulo AGC-150';
      case View.CONTACT: return 'Suporte EPSE';
      default: return 'Manual EPSE';
    }
  };

  const renderView = () => {
    switch (currentView) {
      case View.HOME:
        return <Home onNavigate={setCurrentView} />;
      case View.INTRO:
        return <Introduction />;
      case View.MODES:
        return <OperationModes />;
      case View.FLOWCHART:
        return <Flowchart />;
      case View.ATS:
        return <ControlModules type="ATS" />;
      case View.AGC:
        return <ControlModules type="AGC" />;
      case View.CONTACT:
        return <Contact />;
      default:
        return <Home onNavigate={setCurrentView} />;
    }
  };

  return (
    <Layout 
      currentView={currentView} 
      setView={setCurrentView} 
      title={getTitle(currentView)}
    >
      {renderView()}
    </Layout>
  );
};

export default App;
