import React from 'react';
import { Hero } from '../components/Hero';

export const HomeView: React.FC = () => {
  return (
    <div className="flex flex-col items-center w-full">
      <Hero />
    </div>
  );
};
