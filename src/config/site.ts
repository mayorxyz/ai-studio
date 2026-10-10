import { studio } from '../content/studio';

export const site = {
  name: studio.name,
  fullName: `${studio.name} STUDIO`,
  url: studio.url,
  tagline: studio.tagline,
  theme: {
    accent: '#00ff88',
    bg: '#0a0a0a',
    surface: '#111111',
  },
  nav: {
    primary: ['HOME', 'WORK', 'SERVICES', 'PROCESS', 'STUDIO', 'JOURNAL'],
    secondary: ['PRICING'],
  },
  footer: {
    groups: [
      {
        title: 'NAVIGATE',
        links: [
          { label: 'Home', path: '/' },
          { label: 'Work', path: '/work' },
          { label: 'Services', path: '/services' },
          { label: 'Process', path: '/process' },
          { label: 'Studio', path: '/studio' },
          { label: 'Pricing', path: '/pricing' },
        ],
      },
      {
        title: 'CONNECT',
        links: [
          { label: 'Instagram', path: studio.socials.instagram },
          { label: 'Vimeo', path: studio.socials.vimeo },
          { label: 'YouTube', path: studio.socials.youtube },
          { label: 'LinkedIn', path: studio.socials.linkedin },
        ],
      },
      {
        title: 'INFO',
        links: [
          { label: 'Journal', path: '/journal' },
          { label: 'Clients', path: '/clients' },
          { label: 'Careers', path: '/careers' },
          { label: 'FAQ', path: '/faq' },
        ],
      },
    ],
  },
  socials: studio.socials,
  contact: {
    email: studio.email,
    whatsapp: studio.whatsapp,
    city: studio.city,
  },
};
