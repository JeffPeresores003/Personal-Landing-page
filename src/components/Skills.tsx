import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

export const Skills: React.FC = () => {
  const { theme } = useTheme();

  const programmingLanguages = [
    { name: 'HTML', level: 90, color: 'from-orange-500 to-red-500' },
    { name: 'CSS', level: 85, color: 'from-blue-500 to-cyan-500' },
    { name: 'JavaScript', level: 88, color: 'from-yellow-500 to-orange-500' },
    { name: 'Dart', level: 80, color: 'from-teal-500 to-blue-500' },
  ];

  const frameworks = [
    { name: 'React', level: 85, color: 'from-cyan-500 to-blue-500' },
    { name: 'React Native', level: 82, color: 'from-purple-500 to-pink-500' },
    { name: 'Flutter', level: 80, color: 'from-blue-500 to-indigo-500' },
  ];

  const SkillCard = ({ skills, title }: { skills: typeof programmingLanguages; title: string }) => (
    <div className={`${theme === 'dark' ? 'glass-dark' : 'glass'} p-8 rounded-3xl`}>
      <h3 className="text-2xl mb-6">{title}</h3>
      <div className="space-y-6">
        {skills.map((skill, index) => (
          <div key={index}>
            <div className="flex justify-between mb-2">
              <span className="text-gray-300">{skill.name}</span>
              <span className="text-gray-400">{skill.level}%</span>
            </div>
            <div className="h-3 bg-white/10 rounded-full overflow-hidden">
              <div
                className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl mb-4">
            Skills & <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">Technologies</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Technologies and frameworks I use to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <SkillCard skills={programmingLanguages} title="Programming Languages" />
          <SkillCard skills={frameworks} title="Frameworks & Tools" />
        </div>

        {/* Additional Skills as Badges */}
        <div className={`${theme === 'dark' ? 'glass-dark' : 'glass'} p-8 rounded-3xl mt-8`}>
          <h3 className="text-2xl mb-6">Additional Competencies</h3>
          <div className="flex flex-wrap gap-3">
            {[
              'UI/UX Design',
              'Backend Development',
              'Full-Stack Development',
              'Mobile Development',
              'Responsive Design',
              'API Integration',
              'Database Design',
              'Version Control (Git)',
              'Agile Development',
              'Problem Solving',
            ].map((skill, index) => (
              <span
                key={index}
                className="bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 px-4 py-2 rounded-full text-sm hover:scale-105 transition-transform"
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
