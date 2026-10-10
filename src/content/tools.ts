import type { Tool } from './types';

export const tools: Tool[] = [
  { slug: 'rendering-pipeline', name: 'Rendering Pipeline', category: 'RENDERING', useCase: 'Real-time graphics', description: 'PBR rendering with GI, ray tracing, and post-processing.', color: '#0a1a2a', placeholder: true },
  { slug: 'physics-engine', name: 'Physics Engine', category: 'PHYSICS', useCase: 'Simulation', description: 'Deterministic physics with rigid bodies, vehicles, and cloth.', color: '#1a2a1a', placeholder: true },
  { slug: 'ecs-framework', name: 'ECS Framework', category: 'ARCHITECTURE', useCase: 'Game logic', description: 'High-performance entity-component-system with parallel execution.', color: '#1a1a2a', placeholder: true },
  { slug: 'scripting-runtime', name: 'Scripting Runtime', category: 'SCRIPTING', useCase: 'Gameplay code', description: 'Lua and TypeScript with hot-reload and full API access.', color: '#2a1a0a', placeholder: true },
  { slug: 'netcode-stack', name: 'Netcode Stack', category: 'NETWORKING', useCase: 'Multiplayer', description: 'Client prediction, lag compensation, and matchmaking.', color: '#2a0a2a', placeholder: true },
  { slug: 'audio-engine', name: 'Audio Engine', category: 'AUDIO', useCase: 'Sound', description: 'Spatial audio, procedural sound, and mixing.', color: '#1a2a2a', placeholder: true },
  { slug: 'animation-system', name: 'Animation System', category: 'ANIMATION', useCase: 'Character animation', description: 'Skeletal animation, state machines, and IK.', color: '#2a1a1a', placeholder: true },
  { slug: 'asset-pipeline', name: 'Asset Pipeline', category: 'TOOLS', useCase: 'Content creation', description: 'Import, process, and manage game assets.', color: '#1a1a2a', placeholder: true },
];
