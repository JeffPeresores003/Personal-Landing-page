import React from 'react';
import { Github, Linkedin, Mail, MapPin, Calendar } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export const Hero: React.FC = () => {
  const { theme } = useTheme();

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center md:justify-end order-1 md:order-2">
            <div
              className={`relative ${
                theme === 'dark' ? 'glass-dark' : 'glass'
              } p-8 rounded-3xl animate-float`}
            >
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white/20">
                <img
                  src="https://images.unsplash.com/photo-1719400471588-575b23e27bd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwcm9ncmFtbWVyJTIwZGV2ZWxvcGVyfGVufDF8fHx8MTc2NjgyMTE3Mnww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Jeffrey Peresores"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-6 py-3 rounded-full shadow-lg">
                <span>Available for Work</span>
              </div>
            </div>
          </div>

          {/* Profile Info */}
          <div className="space-y-6 order-2 md:order-1 animate-fadeIn">
            <div className="space-y-2">
              <h1 className="text-4xl md:text-6xl">
                Hi, I'm <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">Jeffrey Peresores</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300">
                Full-Stack Developer & UI Designer
              </p>
            </div>

            <p className="text-lg text-gray-400 max-w-lg">
              Passionate about crafting innovative digital solutions. Specialized in mobile and web development with a keen eye for intuitive user interfaces.
            </p>

            {/* Personal Details */}
            <div className={`${theme === 'dark' ? 'glass-dark' : 'glass'} p-6 rounded-2xl space-y-3`}>
              <div className="flex items-center space-x-3 text-gray-300">
                <Calendar className="w-5 h-5 text-indigo-400" />
                <span>22 years old • Born October 1, 2003</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="w-5 h-5 text-indigo-400" />
                <span>Purok 4, Poblacion, San Miguel, Bohol</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`${
                  theme === 'dark' ? 'glass-dark' : 'glass'
                } p-3 rounded-full hover:scale-110 transition-transform`}
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`${
                  theme === 'dark' ? 'glass-dark' : 'glass'
                } p-3 rounded-full hover:scale-110 transition-transform`}
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:jeffrey@example.com"
                className={`${
                  theme === 'dark' ? 'glass-dark' : 'glass'
                } p-3 rounded-full hover:scale-110 transition-transform`}
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' })}
                className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-8 py-3 rounded-full hover:shadow-lg hover:scale-105 transition-all"
              >
                Get In Touch
              </button>
              <button
                onClick={() => {
                  const projectsSection = document.getElementById('projects');
                  if (projectsSection) {
                    projectsSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className={`${
                  theme === 'dark' ? 'glass-dark' : 'glass'
                } px-8 py-3 rounded-full hover:scale-105 transition-all`}
              >
                View Projects
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};