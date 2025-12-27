import React, { useState } from 'react';
import { Palette, Hash, FileJson, Terminal, Layout, Link, Binary } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { ColorPaletteTool } from './tools/ColorPaletteTool';
import { HashGeneratorTool } from './tools/HashGeneratorTool';
import { JsonFormatterTool } from './tools/JsonFormatterTool';
import { RegexTesterTool } from './tools/RegexTesterTool';
import { DivGeneratorTool } from './tools/DivGeneratorTool';
import { Base64Tool } from './tools/Base64Tool';
import { UrlEncoderTool } from './tools/UrlEncoderTool';

export const DeveloperTools: React.FC = () => {
  const { theme } = useTheme();
  const [activeTool, setActiveTool] = useState<string | null>(null);

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
      description: 'Generate SHA-256, SHA-1 hashes for strings',
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
      id: 'regex-tester',
      icon: Terminal,
      title: 'Regex Tester',
      description: 'Test and validate regular expressions',
      gradient: 'from-yellow-500 to-orange-500',
    },
    {
      id: 'div-generator',
      icon: Layout,
      title: 'Div Generator',
      description: 'Generate multiple div elements quickly',
      gradient: 'from-teal-500 to-cyan-500',
    },
    {
      id: 'base64-encoder',
      icon: Binary,
      title: 'Base64 Encoder/Decoder',
      description: 'Encode and decode Base64 strings',
      gradient: 'from-purple-500 to-indigo-500',
    },
    {
      id: 'url-encoder',
      icon: Link,
      title: 'URL Encoder/Decoder',
      description: 'Encode and decode URL strings',
      gradient: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <section id="dev-tools" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl mb-4">
            Developer <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">Tools</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-center">
            Handy utilities and code generators to speed up your development workflow
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool) => {
            const Icon = tool.icon;
            return (
              <div
                key={tool.id}
                onClick={() => setActiveTool(tool.id)}
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

        {/* Tool Modals */}
        <ColorPaletteTool 
          isOpen={activeTool === 'color-palette'} 
          onClose={() => setActiveTool(null)} 
        />
        <HashGeneratorTool 
          isOpen={activeTool === 'hash-generator'} 
          onClose={() => setActiveTool(null)} 
        />
        <JsonFormatterTool 
          isOpen={activeTool === 'json-formatter'} 
          onClose={() => setActiveTool(null)} 
        />
        <RegexTesterTool 
          isOpen={activeTool === 'regex-tester'} 
          onClose={() => setActiveTool(null)} 
        />
        <DivGeneratorTool 
          isOpen={activeTool === 'div-generator'} 
          onClose={() => setActiveTool(null)} 
        />
        <Base64Tool 
          isOpen={activeTool === 'base64-encoder'} 
          onClose={() => setActiveTool(null)} 
        />
        <UrlEncoderTool 
          isOpen={activeTool === 'url-encoder'} 
          onClose={() => setActiveTool(null)} 
        />
      </div>
    </section>
  );
};
