import type { Workshop } from './types';

export const workshops: Workshop[] = [
  { slug: 'engine-fundamentals', title: 'Engine Fundamentals', curriculum: ['Editor overview', 'Scene management', 'Components & systems', 'Scripting basics', 'Building your first game'], duration: '2 days', price: '€800', description: 'Learn the basics of game development with Nocturn Engine.', color: '#0a1a2a', placeholder: true },
  { slug: 'advanced-rendering', title: 'Advanced Rendering', curriculum: ['PBR materials', 'Shader graph', 'Lighting & GI', 'Post-processing', 'Performance optimization'], duration: '3 days', price: '€1,200', description: 'Master real-time rendering techniques and optimization.', color: '#1a2a1a', placeholder: true },
];
