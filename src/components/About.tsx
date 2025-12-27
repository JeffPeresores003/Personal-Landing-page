import React from 'react';
import { Code, Cpu, Monitor, Trophy } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export const About: React.FC = () => {
  const { theme } = useTheme();

  const interests = [
    {
      icon: Code,
      title: 'System Design',
      description: 'Fascinated by how complex systems are architected and built from the ground up.',
    },
    {
      icon: Cpu,
      title: 'Technology',
      description: 'Deep curiosity about how software and hardware work together seamlessly.',
    },
    {
      icon: Monitor,
      title: 'PC Building',
      description: 'Enthusiast in custom PC builds and hardware optimization.',
    },
    {
      icon: Trophy,
      title: 'Sports',
      description: 'Active in Sepak Takraw, Volleyball, and Badminton.',
    },
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl mb-4">
            About <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A passionate developer with a love for innovation and clean code
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* About Text */}
          <div className={`${theme === 'dark' ? 'glass-dark' : 'glass'} p-8 rounded-3xl space-y-4`}>
            <h3 className="text-2xl mb-4">My Journey</h3>
            <p className="text-gray-300">
              I'm a Computer Science graduate from Bohol Island State University with a deep passion for technology and innovation. My journey in tech started from a simple curiosity about how things work, which evolved into a professional career in software development.
            </p>
            <p className="text-gray-300">
              What drives me is the endless possibilities that technology offers. From designing intuitive user interfaces to architecting robust backend systems, I find joy in every aspect of the development process. I believe that great software is not just about functionality—it's about creating experiences that resonate with users.
            </p>
            <p className="text-gray-300">
              When I'm not coding, you'll find me on the court playing Sepak Takraw, Volleyball, or Badminton. I believe that staying active helps me maintain the mental clarity needed for problem-solving and creative thinking in my development work.
            </p>
          </div>

          {/* Education */}
          <div className="space-y-6">
            <div className={`${theme === 'dark' ? 'glass-dark' : 'glass'} p-8 rounded-3xl`}>
              <h3 className="text-2xl mb-6">Education</h3>
              <div className="space-y-6">
                <div className="border-l-4 border-indigo-500 pl-6">
                  <h4 className="text-xl mb-2">Bachelor of Science in Computer Science</h4>
                  <p className="text-gray-400">Bohol Island State University</p>
                  <p className="text-sm text-gray-500 mt-1">College</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-6">
                  <h4 className="text-xl mb-2">San Miguel Technical Vocational School</h4>
                  <p className="text-gray-400">High School</p>
                </div>
                <div className="border-l-4 border-pink-500 pl-6">
                  <h4 className="text-xl mb-2">San Miguel Central Elementary School</h4>
                  <p className="text-gray-400">Elementary</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Interests Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {interests.map((interest, index) => {
            const Icon = interest.icon;
            return (
              <div
                key={index}
                className={`${
                  theme === 'dark' ? 'glass-dark' : 'glass'
                } p-6 rounded-2xl hover:scale-105 transition-transform`}
              >
                <div className="bg-gradient-to-r from-indigo-500 to-purple-500 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg mb-2">{interest.title}</h4>
                <p className="text-sm text-gray-400">{interest.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
