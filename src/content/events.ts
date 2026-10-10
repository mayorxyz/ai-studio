import type { Event } from './types';

export const events: Event[] = [
  { slug: 'ai-video-workshop-berlin-2025', title: 'AI Video Production Workshop', type: 'workshop', date: '2025-03-15', location: 'Berlin, DE', description: 'Hands-on workshop covering AI video generation pipelines.', link: 'https://example.com', past: false, color: '#0d2137', placeholder: true },
  { slug: 'motion-design-talk-2025', title: 'The Future of Motion Design', type: 'talk', date: '2025-02-20', location: 'Online', description: 'Talk on how AI is transforming motion design workflows.', link: 'https://example.com', past: false, color: '#1a1a2e', placeholder: true },
  { slug: 'echo-screening-2024', title: 'Echo — Short Film Screening', type: 'screening', date: '2024-10-12', location: 'Berlin, DE', description: 'Public screening of our AI-generated short film Echo.', past: true, color: '#2a1a1a', placeholder: true },
];
