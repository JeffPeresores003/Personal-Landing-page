import React from 'react';
import { MapPin, Calendar } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export const Hero: React.FC = () => {
  const { theme } = useTheme();

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Profile Image */}
          <div className="flex justify-center md:justify-end order-1 md:order-2">
            <div
              className={`relative ${
                theme === 'dark' ? 'glass-dark' : 'glass'
              } p-8 rounded-3xl animate-float`}
            >
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white/20">
                <img
                  src={import.meta.env.BASE_URL + 'jeff.png'}
                  alt="Jeffrey Peresores"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          {/* Profile Info */}
          <div className="space-y-8 order-2 md:order-1 animate-fadeIn">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Hi, I'm <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">Jeffrey Peresores</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300">
                Full-Stack Developer
              </p>
            </div>

            <p className="text-lg text-gray-400 max-w-lg leading-relaxed">
              Passionate about crafting innovative digital solutions. Specialized in mobile and web development with a keen eye for intuitive user interfaces.
            </p>
            <p className="text-lg italic text-gray-400 border-l-4 border-indigo-500 pl-4">
                Motto: 
              </p>
              <p className="text-lg italic text-gray-400 border-l-4 border-indigo-500 pl-4">
                "One Click, Fix This!!"
              </p>
              <p className="text-lg italic text-gray-400 border-l-4 border-indigo-500 pl-4">
                "Ipa AI rana!"
              </p>
              <p className="text-lg italic text-gray-400 border-l-4 border-indigo-500 pl-4">
                "Kung kaya ng iba, edi SANAOL!!"
              </p>
              <p className="text-lg italic text-gray-400 border-l-4 border-indigo-500 pl-4">
                "To become a Fullstack Master you need to invest in TAE, Time And Effort!"
              </p>

            {/* Personal Details */}
            <div className={`${theme === 'dark' ? 'glass-dark' : 'glass'} p-10 rounded-3xl space-y-6`}>
              <div className="flex items-center space-x-4 text-gray-300 text-lg">
                <Calendar className="w-6 h-6 text-indigo-400 flex-shrink-0" />
                <span>22 years old • Born October 1, 2003</span>
              </div>
              <div className="flex items-center space-x-4 text-gray-300 text-lg">
                <MapPin className="w-6 h-6 text-indigo-400 flex-shrink-0" />
                <span>Purok 4, Poblacion, San Miguel, Bohol</span>
              </div>
            </div>
            {/* CTA Buttons */}
            <div className="mt-12"></div>
            <div className="flex flex-wrap gap-6">
              <button
                onClick={() => window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' })}
                className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-12 py-4 text-lg rounded-full hover:shadow-lg hover:scale-105 transition-all font-semibold"
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
                } px-12 py-4 text-lg rounded-full hover:scale-105 transition-all font-semibold`}
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