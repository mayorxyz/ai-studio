import type { Resource } from './types';

export const resources: Resource[] = [
  { slug: 'getting-started-guide', title: 'Getting Started Guide', type: 'PDF', description: 'Complete guide to building your first game with Nocturn.', fileUrl: '/resources/getting-started.pdf', tags: ['GUIDE', 'BEGINNER'], color: '#0a1a2a', placeholder: true },
  { slug: 'api-reference', title: 'API Reference', type: 'HTML', description: 'Complete API documentation for all engine modules.', fileUrl: '/docs/api', tags: ['DOCS', 'API'], color: '#1a2a1a', placeholder: true },
  { slug: 'fps-template', title: 'FPS Template Project', type: 'PROJECT', description: 'Complete multiplayer FPS template with netcode.', fileUrl: '/templates/fps-template.zip', tags: ['TEMPLATE', 'MULTIPLAYER'], color: '#2a0a2a', placeholder: true },
  { slug: 'rpg-framework', title: 'RPG Framework', type: 'PROJECT', description: 'Complete RPG framework with inventory, quests, and dialogue.', fileUrl: '/templates/rpg-framework.zip', tags: ['TEMPLATE', 'RPG'], color: '#1a1a2a', placeholder: true },
];
