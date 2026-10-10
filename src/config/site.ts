import { studio } from '../content/studio';

export const site = {
  name: studio.name,
  fullName: `${studio.name} ENGINE`,
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
        title: 'ENGINE',
        links: [
          { label: 'Features', path: '/services' },
          { label: 'Showcases', path: '/work' },
          { label: 'Process', path: '/process' },
          { label: 'Pricing', path: '/pricing' },
          { label: 'Download', path: '/start' },
        ],
      },
      {
        title: 'DEVELOPERS',
        links: [
          { label: 'Documentation', path: '/resources' },
          { label: 'Tutorials', path: '/journal' },
          { label: 'API Reference', path: '/resources' },
          { label: 'Community', path: '/studio' },
          { label: 'Workshops', path: '/workshops' },
        ],
      },
      {
        title: 'COMPANY',
        links: [
          { label: 'About', path: '/studio' },
          { label: 'Careers', path: '/careers' },
          { label: 'Press', path: '/press' },
          { label: 'Contact', path: '/contact' },
          { label: 'Partners', path: '/partners' },
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
