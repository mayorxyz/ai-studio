import type { Showcase } from './types';

export const showcases: Showcase[] = [
  {
    slug: 'verdant-rendering-breakdown',
    projectSlug: 'verdant-world',
    title: 'Verdant — Rendering Breakdown',
    steps: [
      { title: 'Terrain Streaming', description: 'Our terrain system streams 64km² chunks with seamless LOD transitions.' },
      { title: 'Global Illumination', description: 'DDGI probes update in real-time as the sun moves across the sky.' },
      { title: 'Vegetation', description: 'GPU-instanced vegetation with wind animation and contact shadows.' },
      { title: 'Optimization', description: 'Occlusion culling and LOD biasing maintain 60fps on mid-range hardware.' },
    ],
    tools: ['Terrain System', 'DDGI', 'GPU Instancing', 'Occlusion Culling'],
    prompts: ['Terrain chunk streaming with 8km draw distance'],
    color: '#0a2a1a',
    placeholder: true,
  },
  {
    slug: 'neon-netcode-architecture',
    projectSlug: 'neon-fps',
    title: 'Neon — Netcode Architecture',
    steps: [
      { title: 'Server Authority', description: 'All game logic runs on the server with client-side prediction.' },
      { title: 'Client Prediction', description: 'Inputs are predicted locally and reconciled with server state.' },
      { title: 'Lag Compensation', description: 'Server rewinds time to validate client shots with latency.' },
      { title: 'Interest Management', description: 'Only relevant entities are replicated to each client.' },
    ],
    tools: ['Netcode Stack', 'Prediction System', 'Lag Compensation', 'Interest Management'],
    prompts: ['128 tick rate server with sub-30ms latency'],
    color: '#2a0a2a',
    placeholder: true,
  },
];
