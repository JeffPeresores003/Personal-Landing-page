import React from 'react';
import { About } from '../components/About';
import { MapPin, Calendar, GraduationCap, Mail, Github, Linkedin } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export const AboutView: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className="min-h-screen pt-32 px-4">
      <div className="container mx-auto max-w-6xl">
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
                  src="https://images.unsplash.com/photo-1719400471588-575b23e27bd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwcm9ncmFtbWVyJTIwZGV2ZWxvcGVyfGVufDF8fHx8MTc2NjgyMTE3Mnww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Jeffrey Peresores"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Personal Info */}
            <div className="md:col-span-2 space-y-6">
              <div>
                <h2 className="text-3xl md:text-4xl mb-2">Jeffrey Peresores</h2>
                <p className="text-xl text-indigo-400 mb-4">Full-Stack Developer & UI Designer</p>
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
                  <span>jeffrey@example.com</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 pt-4">
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

        {/* About Component */}
        <About />
      </div>
    </div>
  );
};
