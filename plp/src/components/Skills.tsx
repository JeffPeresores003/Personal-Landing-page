import React from 'react';
import { Code, Palette, Smartphone, Globe, FileCode, Layers } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export const Skills: React.FC = () => {
  const { theme } = useTheme();

  const programmingLanguages = [
    'HTML',
    'CSS',
    'JavaScript',
    'Dart',
    'TypeScript',
  ];

  const frameworks = [
    'React',
    'React Native',
    'Flutter',
    'Vite',
    'Tailwind CSS',
  ];

  const SkillCard = ({ skills, title, icon: Icon }: { skills: string[]; title: string; icon: any }) => (
    <div className={`${theme === 'dark' ? 'glass-dark' : 'glass'} p-10 rounded-3xl`}>
      <div className="flex items-center gap-3 mb-8">
        <div className="bg-gradient-to-r from-indigo-500 to-purple-500 w-12 h-12 rounded-xl flex items-center justify-center">
          <Icon className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-2xl font-semibold">{title}</h3>
      </div>
      <ul className="space-y-4">
        {skills.map((skill, index) => (
          <li key={index} className="flex items-center gap-3 text-gray-300">
            <span className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></span>
            <span className="text-lg">{skill}</span>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <section id="skills" className="pb-24 px-6 w-full flex justify-center">
      <div className="container mx-auto max-w-6xl w-full">
        <div style={{ height: '150px' }}></div>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-6 font-bold">
            Skills & <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">Technologies</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Technologies and frameworks I use to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <SkillCard skills={programmingLanguages} title="Programming Languages" icon={Code} />
          <SkillCard skills={frameworks} title="Frameworks & Tools" icon={Globe} />
        </div>

        {/* Additional Skills as Badges */}
        <div style={{ height: '80px' }}></div>
        <div className={`${theme === 'dark' ? 'glass-dark' : 'glass'} p-10 rounded-3xl`}>
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-gradient-to-r from-indigo-500 to-purple-500 w-12 h-12 rounded-xl flex items-center justify-center">
              <Palette className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-semibold">Additional Competencies</h3>
          </div>
          <div className="flex flex-wrap gap-6">
            {[
              'Backend Development',
              'Full-Stack Development',
              'Mobile Development',
              'Responsive Design',
              'API Integration',
              'Database Design',
              'Version Control (Git)',
              'Problem Solving',
            ].map((skill, index) => (
              <span
                key={index}
                className="bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 px-8 py-5 rounded-2xl text-lg hover:scale-105 transition-transform font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
