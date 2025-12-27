import React from 'react';
import { About } from '../components/About';
import { MapPin, Calendar, GraduationCap, Mail, Github, Facebook, Instagram } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export const AboutView: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className="min-h-screen px-4 w-full flex flex-col items-center">
      <div style={{ height: '150px' }}></div>
      <div className="container mx-auto max-w-6xl w-full">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl mb-4">
            About <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">Me</span>
          </h1>
          <p className="text-xl text-gray-400">Get to know more about who I am</p>
        </div>

        {/* Profile Card */}
        <div className={`${theme === 'dark' ? 'glass-dark' : 'glass'} p-8 md:p-12 rounded-3xl mb-8`}>
          <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* Profile Image */}
            <div className="flex justify-center">
              <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-indigo-500/30">
                <img
                  src={import.meta.env.BASE_URL + 'jeff.png'}
                  alt="Jeffrey Peresores"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Personal Info */}
            <div className="md:col-span-2 space-y-6">
              <div>
                <h2 className="text-3xl md:text-4xl mb-2">Jeffrey Peresores</h2>
                <p className="text-xl text-indigo-400 mb-4">Full-Stack Developer</p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-300">
                  <Calendar className="w-5 h-5 text-indigo-400" />
                  <span>22 years old • Born October 1, 2003</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <MapPin className="w-5 h-5 text-indigo-400" />
                  <span>Purok 4, Poblacion, San Miguel, Bohol</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <GraduationCap className="w-5 h-5 text-indigo-400" />
                  <span>BS Computer Science - Bohol Island State University</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Mail className="w-5 h-5 text-indigo-400" />
                  <span>jeffrey.peresores@bisu.edu.ph</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 pt-4">
                <a
                  href="https://github.com/JeffPeresores003"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 p-3 rounded-full hover:bg-indigo-500 transition-all hover:scale-110"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://web.facebook.com/jeffrey.exe01/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 p-3 rounded-full hover:bg-indigo-500 transition-all hover:scale-110"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/itsjeffp.exe/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 p-3 rounded-full hover:bg-indigo-500 transition-all hover:scale-110"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* About Component */}
        <About />
      </div>
    </div>
  );
};
