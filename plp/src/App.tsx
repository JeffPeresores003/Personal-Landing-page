import React, { useState } from 'react';
import { Github, Facebook, Instagram } from 'lucide-react';
import { ThemeProvider } from './contexts/ThemeContext';
import { Header } from './components/Header';
import { HomeView } from './views/HomeView';
import { ToolsView } from './views/ToolsView';
import { AboutView } from './views/AboutView';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'home' | 'skills' | 'projects' | 'contact' | 'tools' | 'about'>('home');

  const renderView = () => {
    switch (currentView) {
      case 'home':
        return <HomeView />;
      case 'skills':
        return <Skills />;
      case 'projects':
        return <Projects />;
      case 'tools':
        return <ToolsView />;
      case 'about':
        return <AboutView />;
      case 'contact':
        return (
          <div className="min-h-screen flex items-center justify-center px-6 w-full">
            <div style={{ height: '150px' }}></div>
            <div className="container mx-auto max-w-5xl">
              <div className="text-center mb-16">
                <h1 className="text-5xl md:text-6xl mb-6 font-bold">
                  Get In <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">Touch</span>
                </h1>
                <p className="text-xl text-gray-400">Let's work together on your next project</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                {/* Contact Information */}
                <div className="glass-dark p-10 rounded-3xl space-y-6">
                  <h3 className="text-2xl font-semibold mb-8 bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">Contact Information</h3>
                  <div className="space-y-6">
                    <div>
                      <p className="text-sm text-gray-400 mb-2">Email</p>
                      <a href="mailto:jeffrey.peresores@bisu.edu.ph" className="text-lg text-gray-200 hover:text-indigo-400 transition-colors block">
                        jeffrey.peresores@bisu.edu.ph
                      </a>
                      <a href="mailto:peresoresjeffrey48@gmail.com" className="text-lg text-gray-200 hover:text-indigo-400 transition-colors block">
                        peresoresjeffrey48@gmail.com
                      </a>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-2">Location</p>
                      <p className="text-lg text-gray-200">Purok 4, Poblacion<br/>San Miguel, Bohol</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-2">Phone</p>
                      <a href="tel:+639292275743" className="text-lg text-gray-200 hover:text-indigo-400 transition-colors block">
                        +63 929 227 5743
                      </a>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="glass-dark p-10 rounded-3xl">
                  <h3 className="text-2xl font-semibold mb-8 bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">Connect With Me</h3>
                  <div className="space-y-4">
                    <a href="https://github.com/JeffPeresores003" target="_blank" rel="noopener noreferrer" 
                       className="flex items-center justify-between p-4 rounded-xl hover:bg-white/5 transition-all group">
                      <div className="flex items-center gap-4">
                        <Github className="w-5 h-5 text-gray-400 group-hover:text-indigo-400 transition-colors" />
                        <span className="text-lg text-gray-200">GitHub</span>
                      </div>
                      <span className="text-gray-400 group-hover:text-indigo-400 transition-colors">→</span>
                    </a>
                    <a href="https://web.facebook.com/jeffrey.exe01/" target="_blank" rel="noopener noreferrer" 
                       className="flex items-center justify-between p-4 rounded-xl hover:bg-white/5 transition-all group">
                      <div className="flex items-center gap-4">
                        <Facebook className="w-5 h-5 text-gray-400 group-hover:text-indigo-400 transition-colors" />
                        <span className="text-lg text-gray-200">Facebook</span>
                      </div>
                      <span className="text-gray-400 group-hover:text-indigo-400 transition-colors">→</span>
                    </a>
                    <a href="https://www.instagram.com/itsjeffp.exe/" target="_blank" rel="noopener noreferrer" 
                       className="flex items-center justify-between p-4 rounded-xl hover:bg-white/5 transition-all group">
                      <div className="flex items-center gap-4">
                        <Instagram className="w-5 h-5 text-gray-400 group-hover:text-indigo-400 transition-colors" />
                        <span className="text-lg text-gray-200">Instagram</span>
                      </div>
                      <span className="text-gray-400 group-hover:text-indigo-400 transition-colors">→</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* CTA Message */}
              <div className="glass-dark p-8 rounded-3xl text-center">
                <p className="text-lg text-gray-300">
                  Available for freelance projects and full-time opportunities
                </p>
              </div>
            </div>
          </div>
        );
      default:
        return <HomeView />;
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen overflow-x-hidden flex flex-col">
        <Header currentView={currentView} onViewChange={setCurrentView} />
        <main className="transition-opacity duration-300 flex-1 flex flex-col items-center w-full">
          {renderView()}
        </main>
        {(currentView === 'home' || currentView === 'about') && <Footer />}
      </div>
    </ThemeProvider>
  );
};

export default App;