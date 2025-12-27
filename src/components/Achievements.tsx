import React from 'react';
import { Trophy, Award, Star, Medal } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export const Achievements: React.FC = () => {
  const { theme } = useTheme();

  const achievements = [
    {
      icon: Trophy,
      title: 'Top 10 Overall',
      subtitle: '3rd Year Midterm Performance',
      description: 'Achieved Top 10 ranking among the entire batch during 3rd year midterm examinations, demonstrating consistent academic excellence and dedication.',
      year: 'Whole Batch',
      gradient: 'from-yellow-500 to-orange-500',
      featured: true,
    },
    {
      icon: Award,
      title: 'Academic Excellence',
      subtitle: 'Computer Science Program',
      description: 'Maintained high academic standing throughout the Computer Science program at Bohol Island State University.',
      year: '2024',
      gradient: 'from-blue-500 to-indigo-500',
      featured: false,
    },
    {
      icon: Star,
      title: 'Project Leadership',
      subtitle: 'BCIIS Development',
      description: 'Led the full-stack development of Bohol Cacao Information System, demonstrating strong technical and leadership skills.',
      year: '2024',
      gradient: 'from-purple-500 to-pink-500',
      featured: false,
    },
  ];

  return (
    <section id="achievements" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl mb-4">
            Achievements & <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">Recognition</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Milestones and accomplishments throughout my academic and professional journey
          </p>
        </div>

        {/* Featured Achievement */}
        <div className={`${theme === 'dark' ? 'glass-dark' : 'glass'} p-8 md:p-12 rounded-3xl mb-8 border-2 border-yellow-500/30 relative overflow-hidden`}>
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 rounded-full blur-3xl -z-10" />
          
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="bg-gradient-to-r from-yellow-500 to-orange-500 w-24 h-24 rounded-3xl flex items-center justify-center flex-shrink-0">
              <Trophy className="w-12 h-12 text-white" />
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <div className="flex items-center gap-3 mb-2 justify-center md:justify-start">
                <h3 className="text-3xl md:text-4xl">Top 10 Overall</h3>
                <span className="bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full text-sm">Featured</span>
              </div>
              <p className="text-xl text-gray-300 mb-3">3rd Year Midterm Performance - Whole Batch</p>
              <p className="text-gray-400">
                Achieved Top 10 ranking among the entire batch during 3rd year midterm examinations, demonstrating consistent academic excellence and dedication to learning.
              </p>
            </div>

            <div className="flex-shrink-0">
              <Medal className="w-16 h-16 text-yellow-500 animate-pulse" />
            </div>
          </div>
        </div>

        {/* Other Achievements */}
        <div className="grid md:grid-cols-2 gap-6">
          {achievements.slice(1).map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <div
                key={index}
                className={`${theme === 'dark' ? 'glass-dark' : 'glass'} p-6 rounded-2xl hover:scale-105 transition-transform`}
              >
                <div className={`bg-gradient-to-r ${achievement.gradient} w-12 h-12 rounded-xl flex items-center justify-center mb-4`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                
                <div className="flex items-start justify-between mb-2">
                  <h4 className="text-xl">{achievement.title}</h4>
                  <span className="text-sm text-gray-400">{achievement.year}</span>
                </div>
                
                <p className={`text-sm bg-gradient-to-r ${achievement.gradient} bg-clip-text text-transparent mb-3`}>
                  {achievement.subtitle}
                </p>
                
                <p className="text-sm text-gray-400">
                  {achievement.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Achievement Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          {[
            { label: 'Projects Completed', value: '3+' },
            { label: 'Years of Study', value: '4+' },
            { label: 'Technologies Mastered', value: '7+' },
            { label: 'Academic Rank', value: 'Top 10' },
          ].map((stat, index) => (
            <div
              key={index}
              className={`${theme === 'dark' ? 'glass-dark' : 'glass'} p-6 rounded-2xl text-center`}
            >
              <div className="text-3xl md:text-4xl bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
