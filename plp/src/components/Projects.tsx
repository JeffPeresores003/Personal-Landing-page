import React from 'react';
import { ExternalLink, Github, Smartphone, Server, Code } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export const Projects: React.FC = () => {
  const { theme } = useTheme();

  const projects = [
    {
      title: 'EbayBayMo Mobile App',
      icon: Smartphone,
      gradient: 'from-pink-500 to-rose-500',
      tags: ['UI/UX', 'Mobile Design', 'Prototyping'],
    },
    {
      title: 'NIA System',
      icon: Server,
      gradient: 'from-blue-500 to-cyan-500',
      tags: ['Backend', 'API', 'Database'],
    },
    {
      title: 'BCIIS',
      icon: Code,
      gradient: 'from-purple-500 to-indigo-500',
      tags: ['Full-Stack', 'Data Visualization', 'Web App'],
    },
    {
      title: 'BCIIS Mobile',
      icon: Code,
      gradient: 'from-purple-500 to-indigo-500',
      tags: ['Full-Stack', 'Data Visualization', 'Mobile App'],
    },
  ];

  return (
    <section id="projects" className="pb-24 px-6 w-full flex justify-center">
      <div className="container mx-auto max-w-6xl w-full">
        <div style={{ height: '150px' }}></div>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-6 font-bold">
            Featured <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A showcase of my recent work and contributions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div
                key={index}
                className={`${
                  theme === 'dark' ? 'glass-dark' : 'glass'
                } p-8 rounded-3xl hover:scale-105 transition-transform group`}
              >
                {/* Icon */}
                <div className={`bg-gradient-to-r ${project.gradient} w-14 h-14 rounded-2xl flex items-center justify-center mb-6`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-white/5 px-5 py-2.5 rounded-full text-base text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="flex items-center gap-2 px-4 py-2 text-base text-indigo-400 hover:text-indigo-300 transition-colors">
                    <Github className="w-5 h-5" />
                    Code
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 text-base text-indigo-400 hover:text-indigo-300 transition-colors">
                    <ExternalLink className="w-5 h-5" />
                    Demo
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
