import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '../ui/dialog';

interface UrlEncoderToolProps {
  isOpen: boolean;
  onClose: () => void;
}

export const UrlEncoderTool: React.FC<UrlEncoderToolProps> = ({ isOpen, onClose }) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [urlInput, setUrlInput] = useState('');
  const [urlOutput, setUrlOutput] = useState('');

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

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
            <DialogTitle className="text-lg font-semibold text-white">URL Encoder/Decoder</DialogTitle>
            <DialogDescription className="text-gray-400 text-xs">
              Encode and decode URL strings
            </DialogDescription>
          </div>
        </DialogHeader>
        
        <div className="flex-1 overflow-y-auto px-5 py-4" style={{ overflowY: 'auto' }}>
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-medium mb-2 text-gray-200">Input</label>
              <textarea
                value={urlInput}
                onChange={(e) => setUrlInput(e.target.value)}
                placeholder="Enter URL to encode or encoded URL to decode..."
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
                onClick={encodeUrl}
                className="flex-1 bg-gradient-to-r from-orange-500 to-red-500 text-white py-2.5 rounded-lg hover:shadow-lg hover:shadow-orange-500/30 transition-all font-medium text-sm"
              >
                Encode
              </button>
              <button
                onClick={decodeUrl}
                className="flex-1 bg-gradient-to-r from-red-500 to-rose-500 text-white py-2.5 rounded-lg hover:shadow-lg hover:shadow-red-500/30 transition-all font-medium text-sm"
              >
                Decode
              </button>
            </div>

            {urlOutput && (
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium text-gray-200">Output</h3>
                  <button
                    onClick={() => handleCopy(urlOutput, 'url')}
                    className="p-1.5 text-orange-400 hover:text-orange-300 rounded-lg transition-all hover:bg-white/5"
                    title="Copy to clipboard"
                  >
                    {copiedId === 'url' ? (
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
                  <pre className="text-sm text-gray-200 whitespace-pre-wrap break-all">{urlOutput}</pre>
                </div>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
