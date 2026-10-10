import type { Tool } from './types';

export const tools: Tool[] = [
  { slug: 'runway', name: 'Runway', category: 'AI VIDEO', useCase: 'Video generation and editing', description: 'AI-powered video generation and editing platform.', color: '#0d2137', placeholder: true },
  { slug: 'midjourney', name: 'Midjourney', category: 'AI IMAGE', useCase: 'Concept art and textures', description: 'AI image generation for concepts and textures.', color: '#2d1b4e', placeholder: true },
  { slug: 'comfyui', name: 'ComfyUI', category: 'AI PIPELINE', useCase: 'Workflow orchestration', description: 'Node-based AI workflow orchestration.', color: '#1a2e1a', placeholder: true },
  { slug: 'elevenlabs', name: 'ElevenLabs', category: 'AI AUDIO', useCase: 'Voice synthesis', description: 'AI voice generation and cloning.', color: '#2a1a1a', placeholder: true },
  { slug: 'blender', name: 'Blender', category: '3D', useCase: '3D animation and VFX', description: 'Open-source 3D creation suite.', color: '#1e1e3a', placeholder: true },
  { slug: 'after-effects', name: 'After Effects', category: 'MOTION', useCase: 'Motion design and compositing', description: 'Industry-standard motion graphics.', color: '#1a1a2e', placeholder: true },
  { slug: 'davinci-resolve', name: 'DaVinci Resolve', category: 'POST', useCase: 'Color grading and editing', description: 'Professional color grading and NLE.', color: '#1a2e2e', placeholder: true },
  { slug: 'cinema-4d', name: 'Cinema 4D', category: '3D', useCase: 'Motion graphics', description: '3D modeling and animation.', color: '#2e1a2e', placeholder: true },
];
