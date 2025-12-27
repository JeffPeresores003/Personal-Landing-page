import React from 'react';
import { DeveloperTools } from '../components/DeveloperTools';

export const ToolsView: React.FC = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center">
      <div style={{ height: '150px' }}></div>
      <DeveloperTools />
    </div>
  );
};
