import React, { useState } from 'react';
import { Palette, Hash, FileJson, Copy, Check, Terminal, Layout, Link, Binary } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';

export const DeveloperTools: React.FC = () => {
  const { theme } = useTheme();
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [activeTool, setActiveTool] = useState<string | null>(null);

  // Tool states
  const [hashInput, setHashInput] = useState('');
  const [hashOutput, setHashOutput] = useState('');
  const [jsonInput, setJsonInput] = useState('');
  const [jsonOutput, setJsonOutput] = useState('');
  const [base64Input, setBase64Input] = useState('');
  const [base64Output, setBase64Output] = useState('');
  const [urlInput, setUrlInput] = useState('');
  const [urlOutput, setUrlOutput] = useState('');
  const [regexPattern, setRegexPattern] = useState('');
  const [regexTest, setRegexTest] = useState('');
  const [regexResult, setRegexResult] = useState('');
  const [divCount, setDivCount] = useState('1');
  const [divClass, setDivClass] = useState('');
  const [divOutput, setDivOutput] = useState('');

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Hash Generator
  const generateHash = async (text: string, algorithm: 'SHA-256' | 'SHA-1') => {
    const encoder = new TextEncoder();
    const data = encoder.encode(text);
    const hashBuffer = await crypto.subtle.digest(algorithm, data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    setHashOutput(hashHex);
  };

  // JSON Formatter
  const formatJson = () => {
    try {
      const parsed = JSON.parse(jsonInput);
      setJsonOutput(JSON.stringify(parsed, null, 2));
    } catch (e) {
      setJsonOutput('Invalid JSON: ' + (e as Error).message);
    }
  };

  // Base64 Encoder/Decoder
  const encodeBase64 = () => {
    try {
      setBase64Output(btoa(base64Input));
    } catch (e) {
      setBase64Output('Error encoding: ' + (e as Error).message);
    }
  };

  const decodeBase64 = () => {
    try {
      setBase64Output(atob(base64Input));
    } catch (e) {
      setBase64Output('Error decoding: ' + (e as Error).message);
    }
  };

  // URL Encoder/Decoder
  const encodeUrl = () => {
    setUrlOutput(encodeURIComponent(urlInput));
  };

  const decodeUrl = () => {
    try {
      setUrlOutput(decodeURIComponent(urlInput));
    } catch (e) {
      setUrlOutput('Error decoding: ' + (e as Error).message);
    }
  };

  // Regex Tester
  const testRegex = () => {
    try {
      const regex = new RegExp(regexPattern, 'g');
      const matches = regexTest.match(regex);
      if (matches) {
        setRegexResult(`Found ${matches.length} match(es):\n${matches.join('\n')}`);
      } else {
        setRegexResult('No matches found');
      }
    } catch (e) {
      setRegexResult('Invalid regex: ' + (e as Error).message);
    }
  };

  // Div Generator
  const generateDivs = () => {
    const count = parseInt(divCount) || 1;
    const className = divClass ? ` class="${divClass}"` : '';
    const divs = Array.from({ length: count }, (_, i) => 
      `<div${className}>\n  Content ${i + 1}\n</div>`
    ).join('\n\n');
    setDivOutput(divs);
  };

  // Color Palette Generator
  const [baseColor, setBaseColor] = useState('#6366f1');
  const generatePalette = (base: string) => {
    setBaseColor(base);
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
          <p className="text-gray-400 max-w-2xl mx-auto">
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

        {/* Color Palette Modal */}
        <Dialog open={activeTool === 'color-palette'} onOpenChange={() => setActiveTool(null)}>
          <DialogContent className="max-w-2xl bg-gray-900 border-gray-800">
            <DialogHeader>
              <DialogTitle className="text-2xl">Color Palette Generator</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 mt-4">
              <div>
                <label className="block text-sm mb-2">Base Color</label>
                <input
                  type="color"
                  value={baseColor}
                  onChange={(e) => generatePalette(e.target.value)}
                  className="w-full h-12 rounded-lg cursor-pointer"
                />
              </div>
              <div className="grid grid-cols-5 gap-4 mt-6">
                {[
                  { name: 'Darker', color: `${baseColor}20` },
                  { name: 'Dark', color: `${baseColor}60` },
                  { name: 'Base', color: baseColor },
                  { name: 'Light', color: `${baseColor}cc` },
                  { name: 'Lighter', color: `${baseColor}80` },
                ].map((shade, i) => (
                  <div key={i} className="space-y-2">
                    <div
                      style={{ backgroundColor: shade.color }}
                      className="h-24 rounded-lg border border-white/10"
                    />
                    <p className="text-xs text-center">{shade.name}</p>
                    <button
                      onClick={() => handleCopy(shade.color, `color-${i}`)}
                      className="w-full text-xs text-gray-400 hover:text-white transition-colors"
                    >
                      {copiedId === `color-${i}` ? '✓ Copied' : shade.color}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </DialogContent>
        </Dialog>

        {/* Hash Generator Modal */}
        <Dialog open={activeTool === 'hash-generator'} onOpenChange={() => setActiveTool(null)}>
          <DialogContent className="max-w-2xl bg-gray-900 border-gray-800">
            <DialogHeader>
              <DialogTitle className="text-2xl">Hash Generator</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 mt-4">
              <textarea
                value={hashInput}
                onChange={(e) => setHashInput(e.target.value)}
                placeholder="Enter text to hash..."
                className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 min-h-[100px] focus:outline-none focus:border-indigo-500"
              />
              <div className="flex gap-4">
                <button
                  onClick={() => generateHash(hashInput, 'SHA-256')}
                  className="flex-1 bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-3 rounded-lg hover:shadow-lg transition-all"
                >
                  Generate SHA-256
                </button>
                <button
                  onClick={() => generateHash(hashInput, 'SHA-1')}
                  className="flex-1 bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-3 rounded-lg hover:shadow-lg transition-all"
                >
                  Generate SHA-1
                </button>
              </div>
              {hashOutput && (
                <div className="bg-black/30 border border-white/10 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-400">Output:</span>
                    <button
                      onClick={() => handleCopy(hashOutput, 'hash')}
                      className="text-sm text-indigo-400 hover:text-indigo-300"
                    >
                      {copiedId === 'hash' ? '✓ Copied' : 'Copy'}
                    </button>
                  </div>
                  <code className="text-sm break-all">{hashOutput}</code>
                </div>
              )}
            </div>
          </DialogContent>
        </Dialog>

        {/* JSON Formatter Modal */}
        <Dialog open={activeTool === 'json-formatter'} onOpenChange={() => setActiveTool(null)}>
          <DialogContent className="max-w-2xl bg-gray-900 border-gray-800">
            <DialogHeader>
              <DialogTitle className="text-2xl">JSON Formatter</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 mt-4">
              <textarea
                value={jsonInput}
                onChange={(e) => setJsonInput(e.target.value)}
                placeholder='{"key": "value"}'
                className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 min-h-[150px] font-mono text-sm focus:outline-none focus:border-indigo-500"
              />
              <button
                onClick={formatJson}
                className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-3 rounded-lg hover:shadow-lg transition-all"
              >
                Format JSON
              </button>
              {jsonOutput && (
                <div className="bg-black/30 border border-white/10 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-400">Formatted Output:</span>
                    <button
                      onClick={() => handleCopy(jsonOutput, 'json')}
                      className="text-sm text-indigo-400 hover:text-indigo-300"
                    >
                      {copiedId === 'json' ? '✓ Copied' : 'Copy'}
                    </button>
                  </div>
                  <pre className="text-sm overflow-x-auto"><code>{jsonOutput}</code></pre>
                </div>
              )}
            </div>
          </DialogContent>
        </Dialog>

        {/* Regex Tester Modal */}
        <Dialog open={activeTool === 'regex-tester'} onOpenChange={() => setActiveTool(null)}>
          <DialogContent className="max-w-2xl bg-gray-900 border-gray-800">
            <DialogHeader>
              <DialogTitle className="text-2xl">Regex Tester</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 mt-4">
              <div>
                <label className="block text-sm mb-2">Regular Expression Pattern</label>
                <input
                  type="text"
                  value={regexPattern}
                  onChange={(e) => setRegexPattern(e.target.value)}
                  placeholder="e.g., \d{3}-\d{3}-\d{4}"
                  className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 font-mono focus:outline-none focus:border-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm mb-2">Test String</label>
                <textarea
                  value={regexTest}
                  onChange={(e) => setRegexTest(e.target.value)}
                  placeholder="Enter text to test against the pattern..."
                  className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 min-h-[100px] focus:outline-none focus:border-indigo-500"
                />
              </div>
              <button
                onClick={testRegex}
                className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-3 rounded-lg hover:shadow-lg transition-all"
              >
                Test Regex
              </button>
              {regexResult && (
                <div className="bg-black/30 border border-white/10 rounded-lg p-4">
                  <span className="text-sm text-gray-400">Result:</span>
                  <pre className="text-sm mt-2 whitespace-pre-wrap">{regexResult}</pre>
                </div>
              )}
            </div>
          </DialogContent>
        </Dialog>

        {/* Div Generator Modal */}
        <Dialog open={activeTool === 'div-generator'} onOpenChange={() => setActiveTool(null)}>
          <DialogContent className="max-w-2xl bg-gray-900 border-gray-800">
            <DialogHeader>
              <DialogTitle className="text-2xl">Div Generator</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 mt-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm mb-2">Number of Divs</label>
                  <input
                    type="number"
                    value={divCount}
                    onChange={(e) => setDivCount(e.target.value)}
                    min="1"
                    max="50"
                    className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2">Class Name (optional)</label>
                  <input
                    type="text"
                    value={divClass}
                    onChange={(e) => setDivClass(e.target.value)}
                    placeholder="e.g., container mx-auto"
                    className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-indigo-500"
                  />
                </div>
              </div>
              <button
                onClick={generateDivs}
                className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-3 rounded-lg hover:shadow-lg transition-all"
              >
                Generate Divs
              </button>
              {divOutput && (
                <div className="bg-black/30 border border-white/10 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-400">Generated Code:</span>
                    <button
                      onClick={() => handleCopy(divOutput, 'divs')}
                      className="text-sm text-indigo-400 hover:text-indigo-300"
                    >
                      {copiedId === 'divs' ? '✓ Copied' : 'Copy'}
                    </button>
                  </div>
                  <pre className="text-sm overflow-x-auto"><code>{divOutput}</code></pre>
                </div>
              )}
            </div>
          </DialogContent>
        </Dialog>

        {/* Base64 Encoder Modal */}
        <Dialog open={activeTool === 'base64-encoder'} onOpenChange={() => setActiveTool(null)}>
          <DialogContent className="max-w-2xl bg-gray-900 border-gray-800">
            <DialogHeader>
              <DialogTitle className="text-2xl">Base64 Encoder/Decoder</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 mt-4">
              <textarea
                value={base64Input}
                onChange={(e) => setBase64Input(e.target.value)}
                placeholder="Enter text to encode or Base64 to decode..."
                className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 min-h-[100px] focus:outline-none focus:border-indigo-500"
              />
              <div className="flex gap-4">
                <button
                  onClick={encodeBase64}
                  className="flex-1 bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-3 rounded-lg hover:shadow-lg transition-all"
                >
                  Encode
                </button>
                <button
                  onClick={decodeBase64}
                  className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg hover:shadow-lg transition-all"
                >
                  Decode
                </button>
              </div>
              {base64Output && (
                <div className="bg-black/30 border border-white/10 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-400">Output:</span>
                    <button
                      onClick={() => handleCopy(base64Output, 'base64')}
                      className="text-sm text-indigo-400 hover:text-indigo-300"
                    >
                      {copiedId === 'base64' ? '✓ Copied' : 'Copy'}
                    </button>
                  </div>
                  <pre className="text-sm overflow-x-auto break-all">{base64Output}</pre>
                </div>
              )}
            </div>
          </DialogContent>
        </Dialog>

        {/* URL Encoder Modal */}
        <Dialog open={activeTool === 'url-encoder'} onOpenChange={() => setActiveTool(null)}>
          <DialogContent className="max-w-2xl bg-gray-900 border-gray-800">
            <DialogHeader>
              <DialogTitle className="text-2xl">URL Encoder/Decoder</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 mt-4">
              <textarea
                value={urlInput}
                onChange={(e) => setUrlInput(e.target.value)}
                placeholder="Enter URL to encode or encoded URL to decode..."
                className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 min-h-[100px] focus:outline-none focus:border-indigo-500"
              />
              <div className="flex gap-4">
                <button
                  onClick={encodeUrl}
                  className="flex-1 bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-3 rounded-lg hover:shadow-lg transition-all"
                >
                  Encode
                </button>
                <button
                  onClick={decodeUrl}
                  className="flex-1 bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 rounded-lg hover:shadow-lg transition-all"
                >
                  Decode
                </button>
              </div>
              {urlOutput && (
                <div className="bg-black/30 border border-white/10 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-400">Output:</span>
                    <button
                      onClick={() => handleCopy(urlOutput, 'url')}
                      className="text-sm text-indigo-400 hover:text-indigo-300"
                    >
                      {copiedId === 'url' ? '✓ Copied' : 'Copy'}
                    </button>
                  </div>
                  <pre className="text-sm overflow-x-auto break-all">{urlOutput}</pre>
                </div>
              )}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};
