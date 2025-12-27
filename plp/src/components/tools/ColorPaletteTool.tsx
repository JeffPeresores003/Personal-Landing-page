import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '../ui/dialog';

interface ColorPaletteToolProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ColorPaletteTool: React.FC<ColorPaletteToolProps> = ({ isOpen, onClose }) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [baseColor, setBaseColor] = useState('#6366f1');
  const [palette, setPalette] = useState<string[]>([]);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const generatePalette = () => {
    const hex = baseColor.replace('#', '');
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    const colors = [
      `#${Math.min(255, r + 60).toString(16).padStart(2, '0')}${Math.min(255, g + 60).toString(16).padStart(2, '0')}${Math.min(255, b + 60).toString(16).padStart(2, '0')}`,
      `#${Math.min(255, r + 30).toString(16).padStart(2, '0')}${Math.min(255, g + 30).toString(16).padStart(2, '0')}${Math.min(255, b + 30).toString(16).padStart(2, '0')}`,
      baseColor,
      `#${Math.max(0, r - 30).toString(16).padStart(2, '0')}${Math.max(0, g - 30).toString(16).padStart(2, '0')}${Math.max(0, b - 30).toString(16).padStart(2, '0')}`,
      `#${Math.max(0, r - 60).toString(16).padStart(2, '0')}${Math.max(0, g - 60).toString(16).padStart(2, '0')}${Math.max(0, b - 60).toString(16).padStart(2, '0')}`,
    ];

    setPalette(colors);
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
          width: '420px',
          maxWidth: '90vw',
          display: 'flex',
          flexDirection: 'column',
          opacity: 1,
          visibility: 'visible'
        }}
      >
        <DialogHeader className="px-5 py-4 border-b border-white/10">
          <div className="flex flex-col">
            <DialogTitle className="text-lg font-semibold text-white">Color Palette Generator</DialogTitle>
            <DialogDescription className="text-gray-400 text-xs">
              Generate beautiful color schemes
            </DialogDescription>
          </div>
        </DialogHeader>
        
        <div className="flex-1 overflow-y-auto px-5 py-4" style={{ overflowY: 'auto' }}>
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-medium mb-2 text-gray-200">Base Color</label>
              <div className="flex items-center gap-3">
                <input
                  type="color"
                  value={baseColor}
                  onChange={(e) => setBaseColor(e.target.value)}
                  className="w-12 h-12 rounded-lg cursor-pointer border border-white/20"
                  style={{ backgroundColor: 'transparent' }}
                />
                <input
                  type="text"
                  value={baseColor}
                  onChange={(e) => setBaseColor(e.target.value)}
                  className="flex-1 px-3 py-2 rounded-lg text-white font-mono text-sm focus:outline-none transition-colors"
                  style={{ 
                    background: 'rgba(17, 24, 39, 0.5)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    backdropFilter: 'blur(8px)'
                  }}
                  placeholder="#6366f1"
                />
              </div>
            </div>

            <button
              onClick={generatePalette}
              className="w-full bg-gradient-to-r from-pink-500 to-rose-500 text-white py-2.5 rounded-lg hover:shadow-lg hover:shadow-pink-500/30 transition-all font-medium text-sm"
            >
              Generate Palette
            </button>

            {palette.length > 0 && (
              <div className="space-y-3">
                <h3 className="text-sm font-medium text-gray-200">Generated Colors</h3>
                <div className="space-y-2">
                  {palette.map((color, index) => (
                    <div 
                      key={index} 
                      className="flex items-center gap-3 p-2.5 rounded-lg transition-all hover:scale-[1.02]"
                      style={{
                        background: 'rgba(17, 24, 39, 0.4)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        backdropFilter: 'blur(8px)'
                      }}
                    >
                      <div
                        className="w-12 h-12 rounded-lg cursor-pointer flex-shrink-0 shadow-md hover:shadow-lg transition-all border-2 border-white/20"
                        style={{ backgroundColor: color }}
                        onClick={() => handleCopy(color, `palette-${index}`)}
                        title="Click to copy"
                      />
                      <span className="flex-1 font-mono text-sm text-gray-200 font-medium">{color.toUpperCase()}</span>
                      <button
                        onClick={() => handleCopy(color, `palette-${index}`)}
                        className="p-2 text-pink-400 hover:text-pink-300 rounded-lg transition-all hover:bg-white/5"
                        title="Copy to clipboard"
                      >
                        {copiedId === `palette-${index}` ? (
                          <Check className="w-4 h-4" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
