import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '../ui/dialog';

interface RegexTesterToolProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RegexTesterTool: React.FC<RegexTesterToolProps> = ({ isOpen, onClose }) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [regexPattern, setRegexPattern] = useState('');
  const [regexTest, setRegexTest] = useState('');
  const [regexResult, setRegexResult] = useState('');
  const [regexFlags, setRegexFlags] = useState('g');

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const testRegex = () => {
    try {
      const regex = new RegExp(regexPattern, regexFlags);
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

  return (
    <Dialog 
      open={isOpen} 
      onOpenChange={(open: boolean) => {
        if (!open) {
          onClose();
        }
      }}
      modal={true}
    >
      <DialogContent 
        className="border border-white/10 text-white p-0 shadow-2xl"
        style={{ 
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 9999,
          background: 'rgba(31, 41, 55, 0.85)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          maxHeight: '85vh',
          width: '480px',
          maxWidth: '90vw',
          display: 'flex',
          flexDirection: 'column',
          opacity: 1,
          visibility: 'visible'
        }}
      >
        <DialogHeader className="px-5 py-4 border-b border-white/10">
          <div className="flex flex-col">
            <DialogTitle className="text-lg font-semibold text-white">Regex Tester</DialogTitle>
            <DialogDescription className="text-gray-400 text-xs">
              Test and validate regular expressions
            </DialogDescription>
          </div>
        </DialogHeader>
        
        <div className="flex-1 overflow-y-auto px-5 py-4" style={{ overflowY: 'auto' }}>
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-medium mb-2 text-gray-200">Pattern</label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={regexPattern}
                  onChange={(e) => setRegexPattern(e.target.value)}
                  placeholder="e.g., \d{3}-\d{3}-\d{4}"
                  className="flex-1 px-3 py-2 rounded-lg text-white font-mono text-sm focus:outline-none transition-colors"
                  style={{ 
                    background: 'rgba(17, 24, 39, 0.5)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    backdropFilter: 'blur(8px)'
                  }}
                />
                <input
                  type="text"
                  value={regexFlags}
                  onChange={(e) => setRegexFlags(e.target.value)}
                  placeholder="flags"
                  className="w-16 px-3 py-2 rounded-lg text-white font-mono text-sm text-center focus:outline-none transition-colors"
                  style={{ 
                    background: 'rgba(17, 24, 39, 0.5)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    backdropFilter: 'blur(8px)'
                  }}
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium mb-2 text-gray-200">Test String</label>
              <textarea
                value={regexTest}
                onChange={(e) => setRegexTest(e.target.value)}
                placeholder="Enter text to test against the pattern..."
                className="w-full px-3 py-2 rounded-lg text-white text-sm focus:outline-none transition-colors min-h-[100px] resize-none"
                style={{ 
                  background: 'rgba(17, 24, 39, 0.5)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  backdropFilter: 'blur(8px)'
                }}
              />
            </div>

            <button
              onClick={testRegex}
              className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white py-2.5 rounded-lg hover:shadow-lg hover:shadow-yellow-500/30 transition-all font-medium text-sm"
            >
              Test Regex
            </button>

            {regexResult && (
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium text-gray-200">Result</h3>
                  <button
                    onClick={() => handleCopy(regexResult, 'regex')}
                    className="p-1.5 text-yellow-400 hover:text-yellow-300 rounded-lg transition-all hover:bg-white/5"
                    title="Copy to clipboard"
                  >
                    {copiedId === 'regex' ? (
                      <Check className="w-4 h-4" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
                <div 
                  className="p-3 rounded-lg transition-all max-h-[150px] overflow-auto"
                  style={{
                    background: 'rgba(17, 24, 39, 0.4)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(8px)'
                  }}
                >
                  <pre className="text-sm text-gray-200 whitespace-pre-wrap">{regexResult}</pre>
                </div>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
