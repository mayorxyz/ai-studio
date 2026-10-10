import type { Event } from './types';

export const events: Event[] = [
  { slug: 'gdc-2025', title: 'GDC 2025 — Engine Showcase', type: 'talk', date: '2025-03-18', location: 'San Francisco, USA', description: 'Live demo of Nocturn Engine at the Game Developers Conference.', link: 'https://example.com', past: false, color: '#0a1a2a', placeholder: true },
  { slug: 'nocturn-conf-2025', title: 'NocturnConf 2025', type: 'talk', date: '2025-05-10', location: 'Berlin, DE', description: 'Our annual developer conference with talks, workshops, and networking.', link: 'https://example.com', past: false, color: '#1a2a1a', placeholder: true },
  { slug: 'game-jam-2024', title: 'Nocturn Game Jam 2024', type: 'workshop', date: '2024-10-12', location: 'Online', description: '48-hour game jam using Nocturn Engine. €10K in prizes.', past: true, color: '#2a1a0a', placeholder: true },
];
