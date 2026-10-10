import { studio } from '../content/studio';

export const site = {
  name: studio.name,
  fullName: `${studio.name} GAMES`,
  url: studio.url,
  tagline: studio.tagline,
  theme: {
    accent: '#00ff88',
    bg: '#0a0a0a',
    surface: '#111111',
  },
  nav: {
    primary: ['HOME', 'GAMES', 'TRAILERS', 'ABOUT'],
    secondary: [],
  },
  footer: {
    groups: [
      {
        title: 'GAMES',
        links: [
          { label: 'Ember', path: '/games/ember' },
          { label: 'Horizon', path: '/games/horizon' },
          { label: 'Neon', path: '/games/neon' },
          { label: 'Verdant', path: '/games/verdant' },
          { label: 'Atlas', path: '/games/atlas' },
          { label: 'Pulse', path: '/games/pulse' },
        ],
      },
      {
        title: 'STUDIO',
        links: [
          { label: 'About', path: '/about' },
          { label: 'Trailers', path: '/trailers' },
          { label: 'Contact', path: '/contact' },
        ],
      },
      {
        title: 'FOLLOW',
        links: [
          { label: 'YouTube', path: studio.socials.youtube },
          { label: 'Twitter', path: studio.socials.vimeo },
          { label: 'Instagram', path: studio.socials.instagram },
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
