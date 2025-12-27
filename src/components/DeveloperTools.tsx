import React, { useState } from 'react';
import { Code, Palette, Hash, FileJson, Copy, Check, Terminal, Braces } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export const DeveloperTools: React.FC = () => {
  const { theme } = useTheme();
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const tools = [
    {
      id: 'color-palette',
      icon: Palette,
      title: 'Color Palette Generator',
      description: 'Generate beautiful color schemes for your projects',
      gradient: 'from-pink-500 to-rose-500',
    },
    {
      id: 'hash-generator',
      icon: Hash,
      title: 'Hash Generator',
      description: 'Generate MD5, SHA-256 hashes for strings',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      id: 'json-formatter',
      icon: FileJson,
      title: 'JSON Formatter',
      description: 'Format and validate JSON data',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      id: 'code-snippet',
      icon: Code,
      title: 'Code Snippet Generator',
      description: 'Quick boilerplate code for common patterns',
      gradient: 'from-purple-500 to-indigo-500',
    },
    {
      id: 'regex-tester',
      icon: Terminal,
      title: 'Regex Tester',
      description: 'Test and validate regular expressions',
      gradient: 'from-yellow-500 to-orange-500',
    },
    {
      id: 'api-boilerplate',
      icon: Braces,
      title: 'API Boilerplate',
      description: 'Generate REST API endpoint templates',
      gradient: 'from-teal-500 to-cyan-500',
    },
  ];

  // Code snippet examples
  const snippets = [
    {
      title: 'React Component',
      code: `import React from 'react';\n\nconst Component = () => {\n  return (\n    <div>\n      Hello World\n    </div>\n  );\n};\n\nexport default Component;`,
      language: 'jsx',
    },
    {
      title: 'Express Route',
      code: `app.get('/api/data', async (req, res) => {\n  try {\n    const data = await fetchData();\n    res.json({ success: true, data });\n  } catch (error) {\n    res.status(500).json({ error: error.message });\n  }\n});`,
      language: 'javascript',
    },
    {
      title: 'Flutter Widget',
      code: `class MyWidget extends StatelessWidget {\n  @override\n  Widget build(BuildContext context) {\n    return Container(\n      child: Text('Hello Flutter'),\n    );\n  }\n}`,
      language: 'dart',
    },
  ];

  return (
    <section id="dev-tools" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl mb-4">
            Developer <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">Tools</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Handy utilities and code generators to speed up your development workflow
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {tools.map((tool) => {
            const Icon = tool.icon;
            return (
              <div
                key={tool.id}
                className={`${theme === 'dark' ? 'glass-dark' : 'glass'} p-6 rounded-2xl hover:scale-105 transition-transform cursor-pointer group`}
              >
                <div className={`bg-gradient-to-r ${tool.gradient} w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg mb-2">{tool.title}</h4>
                <p className="text-sm text-gray-400">{tool.description}</p>
                <button className="mt-4 text-sm text-indigo-400 hover:text-indigo-300 transition-colors">
                  Open Tool →
                </button>
              </div>
            );
          })}
        </div>

        {/* Code Snippets Section */}
        <div className={`${theme === 'dark' ? 'glass-dark' : 'glass'} p-8 rounded-3xl`}>
          <h3 className="text-2xl mb-6">Quick Code Snippets</h3>
          <div className="space-y-4">
            {snippets.map((snippet, index) => (
              <div
                key={index}
                className="bg-black/30 rounded-xl overflow-hidden border border-white/10"
              >
                <div className="flex items-center justify-between px-4 py-2 bg-white/5 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <Code className="w-4 h-4 text-indigo-400" />
                    <span className="text-sm">{snippet.title}</span>
                    <span className="text-xs text-gray-500">({snippet.language})</span>
                  </div>
                  <button
                    onClick={() => handleCopy(snippet.code, `snippet-${index}`)}
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {copiedId === `snippet-${index}` ? (
                      <>
                        <Check className="w-4 h-4 text-green-400" />
                        <span className="text-green-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        Copy
                      </>
                    )}
                  </button>
                </div>
                <pre className="p-4 overflow-x-auto">
                  <code className="text-sm text-gray-300">{snippet.code}</code>
                </pre>
              </div>
            ))}
          </div>
        </div>

        {/* Utility Converters */}
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <div className={`${theme === 'dark' ? 'glass-dark' : 'glass'} p-6 rounded-2xl`}>
            <h4 className="text-xl mb-4">Base64 Encoder/Decoder</h4>
            <input
              type="text"
              placeholder="Enter text to encode..."
              className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-2 mb-3 focus:outline-none focus:border-indigo-500 transition-colors"
            />
            <button className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-2 rounded-lg hover:shadow-lg transition-all">
              Encode
            </button>
          </div>

          <div className={`${theme === 'dark' ? 'glass-dark' : 'glass'} p-6 rounded-2xl`}>
            <h4 className="text-xl mb-4">URL Encoder/Decoder</h4>
            <input
              type="text"
              placeholder="Enter URL to encode..."
              className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-2 mb-3 focus:outline-none focus:border-indigo-500 transition-colors"
            />
            <button className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-2 rounded-lg hover:shadow-lg transition-all">
              Encode
            </button>
          </div>
        </div>

        {/* Coming Soon Tools */}
        <div className={`${theme === 'dark' ? 'glass-dark' : 'glass'} p-8 rounded-2xl mt-8 text-center`}>
          <Terminal className="w-12 h-12 mx-auto mb-4 text-gray-500" />
          <h4 className="text-xl mb-2">More Tools Coming Soon</h4>
          <p className="text-gray-400 text-sm">
            This section will be continuously updated with more developer utilities and tools
          </p>
        </div>
      </div>
    </section>
  );
};
