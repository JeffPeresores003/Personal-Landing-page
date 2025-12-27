import React, { useState } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { Header } from './components/Header';
import { HomeView } from './views/HomeView';
import { ToolsView } from './views/ToolsView';
import { AboutView } from './views/AboutView';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'home' | 'tools' | 'about'>('home');

  const renderView = () => {
    switch (currentView) {
      case 'home':
        return <HomeView />;
      case 'tools':
        return <ToolsView />;
      case 'about':
        return <AboutView />;
      default:
        return <HomeView />;
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen overflow-x-hidden">
        <Header currentView={currentView} onViewChange={setCurrentView} />
        <main className="transition-opacity duration-300">
          {renderView()}
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;