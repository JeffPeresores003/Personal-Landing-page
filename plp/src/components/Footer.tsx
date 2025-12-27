import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

export const Footer: React.FC = () => {
  const { theme } = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 mt-auto">
      <div className="container mx-auto max-w-6xl">
        <div className={`${theme === 'dark' ? 'glass-dark' : 'glass'} p-8 rounded-3xl`}>
          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} Jeffrey Peresores. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center gap-1">
              Made with love BOIII!!! Bounce nako boi!
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
