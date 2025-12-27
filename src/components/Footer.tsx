import React from 'react';
import { Heart, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export const Footer: React.FC = () => {
  const { theme } = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 mt-20">
      <div className="container mx-auto max-w-6xl">
        <div className={`${theme === 'dark' ? 'glass-dark' : 'glass'} p-8 md:p-12 rounded-3xl`}>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* About */}
            <div>
              <h3 className="text-2xl mb-4 bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
                Jeffrey Peresores
              </h3>
              <p className="text-gray-400 mb-4">
                Full-Stack Developer passionate about creating innovative digital solutions and beautiful user experiences.
              </p>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <MapPin className="w-4 h-4" />
                <span>San Miguel, Bohol</span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#about" className="hover:text-indigo-400 transition-colors">
                    About Me
                  </a>
                </li>
                <li>
                  <a href="#skills" className="hover:text-indigo-400 transition-colors">
                    Skills
                  </a>
                </li>
                <li>
                  <a href="#projects" className="hover:text-indigo-400 transition-colors">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#achievements" className="hover:text-indigo-400 transition-colors">
                    Achievements
                  </a>
                </li>
                <li>
                  <a href="#research" className="hover:text-indigo-400 transition-colors">
                    Research
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg mb-4">Get In Touch</h4>
              <div className="space-y-3">
                <a
                  href="mailto:jeffrey@example.com"
                  className="flex items-center gap-3 text-gray-400 hover:text-indigo-400 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  jeffrey@example.com
                </a>
                <div className="flex gap-3 pt-2">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 p-3 rounded-full hover:bg-indigo-500 transition-all hover:scale-110"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 p-3 rounded-full hover:bg-indigo-500 transition-all hover:scale-110"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} Jeffrey Peresores. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-red-500 fill-current" /> using React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
