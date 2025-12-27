import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '../ui/dialog';

interface Base64ToolProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Base64Tool: React.FC<Base64ToolProps> = ({ isOpen, onClose }) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [base64Input, setBase64Input] = useState('');
  const [base64Output, setBase64Output] = useState('');

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

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
            <DialogTitle className="text-lg font-semibold text-white">Base64 Encoder/Decoder</DialogTitle>
            <DialogDescription className="text-gray-400 text-xs">
              Encode and decode Base64 strings
            </DialogDescription>
          </div>
        </DialogHeader>
        
        <div className="flex-1 overflow-y-auto px-5 py-4" style={{ overflowY: 'auto' }}>
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-medium mb-2 text-gray-200">Input</label>
              <textarea
                value={base64Input}
                onChange={(e) => setBase64Input(e.target.value)}
                placeholder="Enter text to encode or Base64 to decode..."
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
                onClick={encodeBase64}
                className="flex-1 bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-2.5 rounded-lg hover:shadow-lg hover:shadow-purple-500/30 transition-all font-medium text-sm"
              >
                Encode
              </button>
              <button
                onClick={decodeBase64}
                className="flex-1 bg-gradient-to-r from-indigo-500 to-violet-500 text-white py-2.5 rounded-lg hover:shadow-lg hover:shadow-indigo-500/30 transition-all font-medium text-sm"
              >
                Decode
              </button>
            </div>

            {base64Output && (
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium text-gray-200">Output</h3>
                  <button
                    onClick={() => handleCopy(base64Output, 'base64')}
                    className="p-1.5 text-purple-400 hover:text-purple-300 rounded-lg transition-all hover:bg-white/5"
                    title="Copy to clipboard"
                  >
                    {copiedId === 'base64' ? (
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
                  <pre className="text-sm text-gray-200 whitespace-pre-wrap break-all">{base64Output}</pre>
                </div>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
