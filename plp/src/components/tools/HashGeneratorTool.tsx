import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '../ui/dialog';

interface HashGeneratorToolProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HashGeneratorTool: React.FC<HashGeneratorToolProps> = ({ isOpen, onClose }) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [hashInput, setHashInput] = useState('');
  const [hashOutput, setHashOutput] = useState('');

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const generateHash = async (text: string, algorithm: 'SHA-256' | 'SHA-1') => {
    const encoder = new TextEncoder();
    const data = encoder.encode(text);
    const hashBuffer = await crypto.subtle.digest(algorithm, data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    setHashOutput(hashHex);
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
            <DialogTitle className="text-lg font-semibold text-white">Hash Generator</DialogTitle>
            <DialogDescription className="text-gray-400 text-xs">
              Generate SHA-256 and SHA-1 hashes
            </DialogDescription>
          </div>
        </DialogHeader>
        
        <div className="flex-1 overflow-y-auto px-5 py-4" style={{ overflowY: 'auto' }}>
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-medium mb-2 text-gray-200">Input Text</label>
              <textarea
                value={hashInput}
                onChange={(e) => setHashInput(e.target.value)}
                placeholder="Enter text to hash..."
                className="w-full px-3 py-2 rounded-lg text-white text-sm focus:outline-none transition-colors min-h-[100px] resize-none"
                style={{ 
                  background: 'rgba(17, 24, 39, 0.5)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  backdropFilter: 'blur(8px)'
                }}
              />
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => generateHash(hashInput, 'SHA-256')}
                className="flex-1 bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-2.5 rounded-lg hover:shadow-lg hover:shadow-blue-500/30 transition-all font-medium text-sm"
              >
                SHA-256
              </button>
              <button
                onClick={() => generateHash(hashInput, 'SHA-1')}
                className="flex-1 bg-gradient-to-r from-cyan-500 to-teal-500 text-white py-2.5 rounded-lg hover:shadow-lg hover:shadow-cyan-500/30 transition-all font-medium text-sm"
              >
                SHA-1
              </button>
            </div>

            {hashOutput && (
              <div className="space-y-3">
                <h3 className="text-sm font-medium text-gray-200">Output</h3>
                <div 
                  className="p-3 rounded-lg transition-all"
                  style={{
                    background: 'rgba(17, 24, 39, 0.4)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(8px)'
                  }}
                >
                  <div className="flex items-start justify-between gap-2">
                    <code className="text-sm text-gray-200 break-all flex-1">{hashOutput}</code>
                    <button
                      onClick={() => handleCopy(hashOutput, 'hash')}
                      className="p-2 text-blue-400 hover:text-blue-300 rounded-lg transition-all hover:bg-white/5 flex-shrink-0"
                      title="Copy to clipboard"
                    >
                      {copiedId === 'hash' ? (
                        <Check className="w-4 h-4" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
