import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, Home, Code, Briefcase, Mail, Wrench, User } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface HeaderProps {
  currentView: 'home' | 'skills' | 'projects' | 'contact' | 'tools' | 'about';
  onViewChange: (view: 'home' | 'skills' | 'projects' | 'contact' | 'tools' | 'about') => void;
}

export const Header: React.FC<HeaderProps> = ({ currentView, onViewChange }) => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home' as const, label: 'Home'},
    { id: 'skills' as const, label: 'Skills'},
    { id: 'projects' as const, label: 'Projects'},
    { id: 'tools' as const, label: 'Tools'},
    { id: 'about' as const, label: 'About Me'},
    { id: 'contact' as const, label: 'Get In Touch'},
  ];

  const handleNavClick = (view: 'home' | 'skills' | 'projects' | 'contact' | 'tools' | 'about') => {
    onViewChange(view);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 flex justify-center ${
        isScrolled ? 'py-6' : 'py-10'
      }`}
    >
      <nav
        className={`container mx-auto px-8 md:px-12 max-w-7xl ${
          theme === 'dark' ? 'glass-dark' : 'glass'
        } rounded-full transition-all duration-300`}
      >
        <div className="flex items-center justify-between py-6 px-10">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="text-3xl font-bold hover:scale-105 transition-transform ml-8"
          >
            <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
              JP
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => {
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center gap-2 px-10 py-6 text-lg font-medium rounded-full transition-all whitespace-nowrap ${
                    currentView === item.id
                      ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white'
                      : 'hover:bg-white/10'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          {/* Theme Toggle & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-4 rounded-full hover:bg-white/10 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon className="w-6 h-6" /> : <Sun className="w-6 h-6" />}
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-full hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 px-6 border-t border-white/10">
            <div className="space-y-2">
              {navItems.map((item) => {
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                      currentView === item.id
                        ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white'
                        : 'hover:bg-white/10'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};