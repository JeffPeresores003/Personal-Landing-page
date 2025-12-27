import React from 'react';
import { Hero } from '../components/Hero';
import { Skills } from '../components/Skills';
import { Projects } from '../components/Projects';
import { Achievements } from '../components/Achievements';
import { Research } from '../components/Research';

export const HomeView: React.FC = () => {
  return (
    <div>
      <Hero />
      <Skills />
      <Projects />
      <Achievements />
      <Research />
    </div>
  );
};
