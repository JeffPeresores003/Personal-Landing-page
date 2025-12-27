import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '../ui/dialog';

interface JsonFormatterToolProps {
  isOpen: boolean;
  onClose: () => void;
}

export const JsonFormatterTool: React.FC<JsonFormatterToolProps> = ({ isOpen, onClose }) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [jsonInput, setJsonInput] = useState('');
  const [jsonOutput, setJsonOutput] = useState('');

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const formatJson = () => {
    try {
      const parsed = JSON.parse(jsonInput);
      setJsonOutput(JSON.stringify(parsed, null, 2));
    } catch (e) {
      setJsonOutput('Invalid JSON: ' + (e as Error).message);
    }
  };

  const minifyJson = () => {
    try {
      const parsed = JSON.parse(jsonInput);
      setJsonOutput(JSON.stringify(parsed));
    } catch (e) {
      setJsonOutput('Invalid JSON: ' + (e as Error).message);
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
          width: '520px',
          maxWidth: '90vw',
          display: 'flex',
          flexDirection: 'column',
          opacity: 1,
          visibility: 'visible'
        }}
      >
        <DialogHeader className="px-5 py-4 border-b border-white/10">
          <div className="flex flex-col">
            <DialogTitle className="text-lg font-semibold text-white">JSON Formatter</DialogTitle>
            <DialogDescription className="text-gray-400 text-xs">
              Format and validate JSON data
            </DialogDescription>
          </div>
        </DialogHeader>
        
        <div className="flex-1 overflow-y-auto px-5 py-4" style={{ overflowY: 'auto' }}>
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-medium mb-2 text-gray-200">Input JSON</label>
              <textarea
                value={jsonInput}
                onChange={(e) => setJsonInput(e.target.value)}
                placeholder='{"key": "value"}'
                className="w-full px-3 py-2 rounded-lg text-white font-mono text-sm focus:outline-none transition-colors min-h-[120px] resize-none"
                style={{ 
                  background: 'rgba(17, 24, 39, 0.5)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  backdropFilter: 'blur(8px)'
                }}
              />
            </div>

            <div className="flex gap-3">
              <button
                onClick={formatJson}
                className="flex-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white py-2.5 rounded-lg hover:shadow-lg hover:shadow-green-500/30 transition-all font-medium text-sm"
              >
                Format (Pretty)
              </button>
              <button
                onClick={minifyJson}
                className="flex-1 bg-gradient-to-r from-emerald-500 to-teal-500 text-white py-2.5 rounded-lg hover:shadow-lg hover:shadow-emerald-500/30 transition-all font-medium text-sm"
              >
                Minify
              </button>
            </div>

            {jsonOutput && (
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium text-gray-200">Output</h3>
                  <button
                    onClick={() => handleCopy(jsonOutput, 'json')}
                    className="p-1.5 text-green-400 hover:text-green-300 rounded-lg transition-all hover:bg-white/5"
                    title="Copy to clipboard"
                  >
                    {copiedId === 'json' ? (
                      <Check className="w-4 h-4" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
                <div 
                  className="p-3 rounded-lg transition-all max-h-[200px] overflow-auto"
                  style={{
                    background: 'rgba(17, 24, 39, 0.4)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(8px)'
                  }}
                >
                  <pre className="text-sm text-gray-200 whitespace-pre-wrap break-all">
                    <code>{jsonOutput}</code>
                  </pre>
                </div>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
