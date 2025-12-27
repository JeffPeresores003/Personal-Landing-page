import React from 'react';
import { ExternalLink, Github, Smartphone, Server, Code } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export const Projects: React.FC = () => {
  const { theme } = useTheme();

  const projects = [
    {
      title: 'EbayBayMo Mobile App',
      role: 'UI Designer',
      description: 'Designed an intuitive mobile application interface focused on user experience and modern design principles. Created wireframes, prototypes, and final UI designs for a seamless mobile shopping experience.',
      icon: Smartphone,
      gradient: 'from-pink-500 to-rose-500',
      tags: ['UI/UX', 'Mobile Design', 'Prototyping'],
    },
    {
      title: 'NIA System',
      role: 'Backend Developer',
      description: 'Developed robust backend infrastructure for the National Irrigation Administration system. Implemented RESTful APIs, database optimization, and secure authentication mechanisms to handle critical agricultural data.',
      icon: Server,
      gradient: 'from-blue-500 to-cyan-500',
      tags: ['Backend', 'API', 'Database'],
    },
    {
      title: 'BCIIS',
      role: 'Full-Stack Developer',
      description: 'Built the Bohol Cacao Information System from ground up. Developed both frontend and backend components, integrating real-time data visualization and farmer management features for the cacao industry.',
      icon: Code,
      gradient: 'from-purple-500 to-indigo-500',
      tags: ['Full-Stack', 'Data Visualization', 'Web App'],
    },
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl mb-4">
            Featured <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
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
                } p-6 rounded-3xl hover:scale-105 transition-transform group`}
              >
                {/* Icon */}
                <div className={`bg-gradient-to-r ${project.gradient} w-14 h-14 rounded-2xl flex items-center justify-center mb-4`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>

                {/* Title & Role */}
                <h3 className="text-2xl mb-2">{project.title}</h3>
                <p className={`text-sm bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent mb-4`}>
                  {project.role}
                </p>

                {/* Description */}
                <p className="text-gray-400 mb-4 text-sm">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-white/5 px-3 py-1 rounded-full text-xs text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="flex items-center gap-2 text-sm text-indigo-400 hover:text-indigo-300 transition-colors">
                    <Github className="w-4 h-4" />
                    Code
                  </button>
                  <button className="flex items-center gap-2 text-sm text-indigo-400 hover:text-indigo-300 transition-colors">
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-8 py-3 rounded-full hover:shadow-lg hover:scale-105 transition-all">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};
