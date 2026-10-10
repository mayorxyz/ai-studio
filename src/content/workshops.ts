import type { Workshop } from './types';

export const workshops: Workshop[] = [
  { slug: 'ai-video-fundamentals', title: 'AI Video Fundamentals', curriculum: ['Introduction to AI video tools', 'Prompt engineering for video', 'Workflow design', 'Quality control', 'Delivery and optimization'], duration: '2 days', price: '€1,500', description: 'Comprehensive introduction to AI-assisted video production.', color: '#0d2137', placeholder: true },
  { slug: 'advanced-ai-pipelines', title: 'Advanced AI Pipelines', curriculum: ['ComfyUI deep dive', 'Custom model training', 'Automation at scale', 'API integration', 'Production deployment'], duration: '3 days', price: '€2,500', description: 'Build production-ready AI video pipelines.', color: '#1a2e1a', placeholder: true },
];
