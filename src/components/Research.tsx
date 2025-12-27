import React from 'react';
import { FileText, Download, Eye, Calendar } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export const Research: React.FC = () => {
  const { theme } = useTheme();

  const researchPapers = [
    {
      title: 'Advanced Machine Learning Applications in Agricultural Systems',
      abstract: 'This research explores the implementation of machine learning algorithms in optimizing agricultural processes, with a focus on crop yield prediction and irrigation management.',
      authors: 'Jeffrey Peresores, et al.',
      date: 'March 2024',
      status: 'Published',
      tags: ['Machine Learning', 'Agriculture', 'Data Science'],
    },
    {
      title: 'Mobile-First Design Patterns for Rural Communities',
      abstract: 'An investigation into user experience design principles tailored for mobile applications serving rural communities with limited internet connectivity.',
      authors: 'Jeffrey Peresores, Research Team',
      date: 'January 2024',
      status: 'Under Review',
      tags: ['UX Design', 'Mobile Development', 'Accessibility'],
    },
  ];

  // Placeholder message when no research papers
  const hasResearch = researchPapers.length > 0;

  return (
    <section id="research" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl mb-4">
            Research <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">Papers</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Academic contributions and published research work
          </p>
        </div>

        {hasResearch ? (
          <div className="space-y-6">
            {researchPapers.map((paper, index) => (
              <div
                key={index}
                className={`${theme === 'dark' ? 'glass-dark' : 'glass'} p-8 rounded-3xl hover:scale-[1.02] transition-transform`}
              >
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="bg-gradient-to-r from-indigo-500 to-purple-500 w-16 h-16 rounded-2xl flex items-center justify-center">
                      <FileText className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-3">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <h3 className="text-2xl flex-1">{paper.title}</h3>
                      <span className={`px-3 py-1 rounded-full text-sm ${
                        paper.status === 'Published' 
                          ? 'bg-green-500/20 text-green-400' 
                          : 'bg-yellow-500/20 text-yellow-400'
                      }`}>
                        {paper.status}
                      </span>
                    </div>

                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <span>{paper.authors}</span>
                      <span>•</span>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {paper.date}
                      </div>
                    </div>

                    <p className="text-gray-400">
                      {paper.abstract}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {paper.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="bg-white/5 px-3 py-1 rounded-full text-xs text-gray-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex gap-3 pt-2">
                      <button className="flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm hover:shadow-lg transition-all">
                        <Download className="w-4 h-4" />
                        Download PDF
                      </button>
                      <button className={`flex items-center gap-2 ${theme === 'dark' ? 'bg-white/5' : 'bg-black/5'} px-4 py-2 rounded-full text-sm hover:bg-white/10 transition-all`}>
                        <Eye className="w-4 h-4" />
                        View Abstract
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className={`${theme === 'dark' ? 'glass-dark' : 'glass'} p-12 rounded-3xl text-center`}>
            <FileText className="w-16 h-16 mx-auto mb-4 text-gray-500" />
            <h3 className="text-2xl mb-2">No Published Research Yet</h3>
            <p className="text-gray-400">
              Research papers will be listed here once they are completed and published.
            </p>
          </div>
        )}

        {/* Research Interests */}
        <div className={`${theme === 'dark' ? 'glass-dark' : 'glass'} p-8 rounded-3xl mt-8`}>
          <h3 className="text-2xl mb-6">Research Interests</h3>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              'Machine Learning',
              'Mobile Development',
              'UI/UX Design',
              'Agricultural Technology',
              'Data Visualization',
              'System Architecture',
            ].map((interest, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 p-4 rounded-xl text-center hover:scale-105 transition-transform"
              >
                {interest}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
