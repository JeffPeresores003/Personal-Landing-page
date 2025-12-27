import React, { useState } from 'react';
import { Copy, Check, RotateCcw } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '../ui/dialog';

interface DivGeneratorToolProps {
  isOpen: boolean;
  onClose: () => void;
}

interface DivStyles {
  width: string;
  height: string;
  backgroundColor: string;
  borderRadius: string;
  borderWidth: string;
  borderColor: string;
  borderStyle: string;
  padding: string;
  margin: string;
  boxShadow: string;
  opacity: string;
  content: string;
  textColor: string;
  fontSize: string;
  textAlign: string;
}

const defaultStyles: DivStyles = {
  width: '200',
  height: '100',
  backgroundColor: '#3b82f6',
  borderRadius: '8',
  borderWidth: '0',
  borderColor: '#ffffff',
  borderStyle: 'solid',
  padding: '16',
  margin: '0',
  boxShadow: 'none',
  opacity: '100',
  content: 'Your Content Here',
  textColor: '#ffffff',
  fontSize: '14',
  textAlign: 'center',
};

export const DivGeneratorTool: React.FC<DivGeneratorToolProps> = ({ isOpen, onClose }) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [styles, setStyles] = useState<DivStyles>(defaultStyles);
  const [divId, setDivId] = useState('');
  const [divClass, setDivClass] = useState('');
  const [divOutput, setDivOutput] = useState('');
  const [activeTab, setActiveTab] = useState<'layout' | 'style' | 'text'>('layout');

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const updateStyle = (key: keyof DivStyles, value: string) => {
    setStyles(prev => ({ ...prev, [key]: value }));
  };

  const resetStyles = () => {
    setStyles(defaultStyles);
    setDivId('');
    setDivClass('');
    setDivOutput('');
  };

  const generateCode = () => {
    const inlineStyles: string[] = [];
    
    if (styles.width) inlineStyles.push(`width: ${styles.width}px`);
    if (styles.height) inlineStyles.push(`height: ${styles.height}px`);
    if (styles.backgroundColor) inlineStyles.push(`background-color: ${styles.backgroundColor}`);
    if (styles.borderRadius !== '0') inlineStyles.push(`border-radius: ${styles.borderRadius}px`);
    if (styles.borderWidth !== '0') {
      inlineStyles.push(`border: ${styles.borderWidth}px ${styles.borderStyle} ${styles.borderColor}`);
    }
    if (styles.padding !== '0') inlineStyles.push(`padding: ${styles.padding}px`);
    if (styles.margin !== '0') inlineStyles.push(`margin: ${styles.margin}px`);
    if (styles.boxShadow !== 'none') {
      const shadowMap: Record<string, string> = {
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
      };
      if (shadowMap[styles.boxShadow]) {
        inlineStyles.push(`box-shadow: ${shadowMap[styles.boxShadow]}`);
      }
    }
    if (styles.opacity !== '100') inlineStyles.push(`opacity: ${parseInt(styles.opacity) / 100}`);
    if (styles.textColor) inlineStyles.push(`color: ${styles.textColor}`);
    if (styles.fontSize) inlineStyles.push(`font-size: ${styles.fontSize}px`);
    if (styles.textAlign !== 'left') inlineStyles.push(`text-align: ${styles.textAlign}`);
    inlineStyles.push('display: flex');
    inlineStyles.push('align-items: center');
    inlineStyles.push('justify-content: center');

    const idAttr = divId ? ` id="${divId}"` : '';
    const classAttr = divClass ? ` class="${divClass}"` : '';
    const styleAttr = inlineStyles.length > 0 ? ` style="${inlineStyles.join('; ')}"` : '';
    
    const code = `<div${idAttr}${classAttr}${styleAttr}>\n  ${styles.content}\n</div>`;
    setDivOutput(code);
  };

  const previewStyle: React.CSSProperties = {
    width: `${styles.width}px`,
    height: `${styles.height}px`,
    backgroundColor: styles.backgroundColor,
    borderRadius: `${styles.borderRadius}px`,
    border: styles.borderWidth !== '0' ? `${styles.borderWidth}px ${styles.borderStyle} ${styles.borderColor}` : 'none',
    padding: `${styles.padding}px`,
    margin: `${styles.margin}px`,
    boxShadow: styles.boxShadow === 'none' ? 'none' : 
      styles.boxShadow === 'sm' ? '0 1px 2px 0 rgba(0, 0, 0, 0.05)' :
      styles.boxShadow === 'md' ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)' :
      styles.boxShadow === 'lg' ? '0 10px 15px -3px rgba(0, 0, 0, 0.1)' :
      '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
    opacity: parseInt(styles.opacity) / 100,
    color: styles.textColor,
    fontSize: `${styles.fontSize}px`,
    textAlign: styles.textAlign as 'left' | 'center' | 'right',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: '100%',
    maxHeight: '100%',
    overflow: 'hidden',
    transition: 'all 0.2s ease',
  };

  const inputStyle = {
    background: 'rgba(17, 24, 39, 0.5)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    backdropFilter: 'blur(8px)',
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
          maxHeight: '90vh',
          width: '680px',
          maxWidth: '95vw',
          display: 'flex',
          flexDirection: 'column',
          opacity: 1,
          visibility: 'visible'
        }}
      >
        <DialogHeader className="px-5 py-4 border-b border-white/10">
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <DialogTitle className="text-lg font-semibold text-white">Div Generator</DialogTitle>
              <DialogDescription className="text-gray-400 text-xs">
                Design your div visually and generate code
              </DialogDescription>
            </div>
            <button
              onClick={resetStyles}
              className="p-2 text-gray-400 hover:text-white rounded-lg transition-all hover:bg-white/10"
              title="Reset to defaults"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </DialogHeader>
        
        <div className="flex-1 overflow-y-auto px-5 py-4" style={{ overflowY: 'auto' }}>
          <div className="space-y-4">
            {/* Visual Preview */}
            <div>
              <label className="block text-xs font-medium mb-2 text-gray-200">Live Preview</label>
              <div 
                className="p-4 rounded-lg flex items-center justify-center min-h-[150px] overflow-auto"
                style={{
                  background: 'rgba(0, 0, 0, 0.3)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  backgroundImage: 'linear-gradient(45deg, #333 25%, transparent 25%), linear-gradient(-45deg, #333 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #333 75%), linear-gradient(-45deg, transparent 75%, #333 75%)',
                  backgroundSize: '20px 20px',
                  backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px',
                }}
              >
                <div style={previewStyle}>
                  {styles.content}
                </div>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex gap-1 p-1 rounded-lg" style={{ background: 'rgba(17, 24, 39, 0.5)' }}>
              {(['layout', 'style', 'text'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 py-2 px-3 rounded-md text-xs font-medium transition-all ${
                    activeTab === tab 
                      ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-white' 
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            {/* Layout Tab */}
            {activeTab === 'layout' && (
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium mb-1.5 text-gray-300">Width (px)</label>
                    <input
                      type="number"
                      value={styles.width}
                      onChange={(e) => updateStyle('width', e.target.value)}
                      className="w-full px-3 py-2 rounded-lg text-white text-sm focus:outline-none"
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium mb-1.5 text-gray-300">Height (px)</label>
                    <input
                      type="number"
                      value={styles.height}
                      onChange={(e) => updateStyle('height', e.target.value)}
                      className="w-full px-3 py-2 rounded-lg text-white text-sm focus:outline-none"
                      style={inputStyle}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium mb-1.5 text-gray-300">Padding (px)</label>
                    <input
                      type="number"
                      value={styles.padding}
                      onChange={(e) => updateStyle('padding', e.target.value)}
                      className="w-full px-3 py-2 rounded-lg text-white text-sm focus:outline-none"
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium mb-1.5 text-gray-300">Margin (px)</label>
                    <input
                      type="number"
                      value={styles.margin}
                      onChange={(e) => updateStyle('margin', e.target.value)}
                      className="w-full px-3 py-2 rounded-lg text-white text-sm focus:outline-none"
                      style={inputStyle}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium mb-1.5 text-gray-300">ID (optional)</label>
                    <input
                      type="text"
                      value={divId}
                      onChange={(e) => setDivId(e.target.value)}
                      placeholder="my-div"
                      className="w-full px-3 py-2 rounded-lg text-white text-sm focus:outline-none"
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium mb-1.5 text-gray-300">Class (optional)</label>
                    <input
                      type="text"
                      value={divClass}
                      onChange={(e) => setDivClass(e.target.value)}
                      placeholder="container"
                      className="w-full px-3 py-2 rounded-lg text-white text-sm focus:outline-none"
                      style={inputStyle}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Style Tab */}
            {activeTab === 'style' && (
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium mb-1.5 text-gray-300">Background Color</label>
                    <div className="flex gap-2">
                      <input
                        type="color"
                        value={styles.backgroundColor}
                        onChange={(e) => updateStyle('backgroundColor', e.target.value)}
                        className="w-10 h-10 rounded-lg cursor-pointer border-0"
                        style={{ background: 'transparent' }}
                      />
                      <input
                        type="text"
                        value={styles.backgroundColor}
                        onChange={(e) => updateStyle('backgroundColor', e.target.value)}
                        className="flex-1 px-3 py-2 rounded-lg text-white text-sm focus:outline-none"
                        style={inputStyle}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-medium mb-1.5 text-gray-300">Border Radius (px)</label>
                    <input
                      type="number"
                      value={styles.borderRadius}
                      onChange={(e) => updateStyle('borderRadius', e.target.value)}
                      className="w-full px-3 py-2 rounded-lg text-white text-sm focus:outline-none"
                      style={inputStyle}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <label className="block text-xs font-medium mb-1.5 text-gray-300">Border Width</label>
                    <input
                      type="number"
                      value={styles.borderWidth}
                      onChange={(e) => updateStyle('borderWidth', e.target.value)}
                      className="w-full px-3 py-2 rounded-lg text-white text-sm focus:outline-none"
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium mb-1.5 text-gray-300">Border Style</label>
                    <select
                      value={styles.borderStyle}
                      onChange={(e) => updateStyle('borderStyle', e.target.value)}
                      className="w-full px-3 py-2 rounded-lg text-white text-sm focus:outline-none"
                      style={inputStyle}
                    >
                      <option value="solid">Solid</option>
                      <option value="dashed">Dashed</option>
                      <option value="dotted">Dotted</option>
                      <option value="double">Double</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-medium mb-1.5 text-gray-300">Border Color</label>
                    <input
                      type="color"
                      value={styles.borderColor}
                      onChange={(e) => updateStyle('borderColor', e.target.value)}
                      className="w-full h-10 rounded-lg cursor-pointer border-0"
                      style={{ background: 'transparent' }}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium mb-1.5 text-gray-300">Box Shadow</label>
                    <select
                      value={styles.boxShadow}
                      onChange={(e) => updateStyle('boxShadow', e.target.value)}
                      className="w-full px-3 py-2 rounded-lg text-white text-sm focus:outline-none"
                      style={inputStyle}
                    >
                      <option value="none">None</option>
                      <option value="sm">Small</option>
                      <option value="md">Medium</option>
                      <option value="lg">Large</option>
                      <option value="xl">Extra Large</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-medium mb-1.5 text-gray-300">Opacity (%)</label>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={styles.opacity}
                      onChange={(e) => updateStyle('opacity', e.target.value)}
                      className="w-full h-2 rounded-lg cursor-pointer accent-teal-500"
                    />
                    <span className="text-xs text-gray-400">{styles.opacity}%</span>
                  </div>
                </div>
              </div>
            )}

            {/* Text Tab */}
            {activeTab === 'text' && (
              <div className="space-y-3">
                <div>
                  <label className="block text-xs font-medium mb-1.5 text-gray-300">Content</label>
                  <input
                    type="text"
                    value={styles.content}
                    onChange={(e) => updateStyle('content', e.target.value)}
                    placeholder="Enter text content"
                    className="w-full px-3 py-2 rounded-lg text-white text-sm focus:outline-none"
                    style={inputStyle}
                  />
                </div>
                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <label className="block text-xs font-medium mb-1.5 text-gray-300">Text Color</label>
                    <div className="flex gap-2">
                      <input
                        type="color"
                        value={styles.textColor}
                        onChange={(e) => updateStyle('textColor', e.target.value)}
                        className="w-10 h-10 rounded-lg cursor-pointer border-0"
                        style={{ background: 'transparent' }}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-medium mb-1.5 text-gray-300">Font Size (px)</label>
                    <input
                      type="number"
                      value={styles.fontSize}
                      onChange={(e) => updateStyle('fontSize', e.target.value)}
                      className="w-full px-3 py-2 rounded-lg text-white text-sm focus:outline-none"
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium mb-1.5 text-gray-300">Text Align</label>
                    <select
                      value={styles.textAlign}
                      onChange={(e) => updateStyle('textAlign', e.target.value)}
                      className="w-full px-3 py-2 rounded-lg text-white text-sm focus:outline-none"
                      style={inputStyle}
                    >
                      <option value="left">Left</option>
                      <option value="center">Center</option>
                      <option value="right">Right</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Generate Button */}
            <button
              onClick={generateCode}
              className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 text-white py-2.5 rounded-lg hover:shadow-lg hover:shadow-teal-500/30 transition-all font-medium text-sm"
            >
              Generate Code
            </button>

            {/* Generated Output */}
            {divOutput && (
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-medium text-gray-200">Generated Code</h3>
                  <button
                    onClick={() => handleCopy(divOutput, 'divs')}
                    className="p-1.5 text-teal-400 hover:text-teal-300 rounded-lg transition-all hover:bg-white/5"
                    title="Copy to clipboard"
                  >
                    {copiedId === 'divs' ? (
                      <Check className="w-4 h-4" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
                <div 
                  className="p-3 rounded-lg transition-all max-h-[120px] overflow-auto"
                  style={{
                    background: 'rgba(17, 24, 39, 0.4)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(8px)'
                  }}
                >
                  <pre className="text-xs text-gray-200 whitespace-pre-wrap">
                    <code>{divOutput}</code>
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
