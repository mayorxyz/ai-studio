import type { Partner } from './types';

export const partners: Partner[] = [
  { slug: 'integration-partner', name: 'Integration Partner', tier: 'bronze', description: 'Integrate third-party tools and services with Nocturn Engine.', color: '#1a1a2a', placeholder: true },
  { slug: 'training-partner', name: 'Training Partner', tier: 'silver', description: 'Deliver official Nocturn training and certification programs.', color: '#1e1e3a', placeholder: true },
  { slug: 'technology-partner', name: 'Technology Partner', tier: 'gold', description: 'Co-develop engine features and shape the roadmap.', color: '#2d1b4e', placeholder: true },
];
