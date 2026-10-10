import type { RouteConfig } from '../content/types';

export const routes: RouteConfig[] = [
  { path: '/', label: 'HOME', element: 'Home', showInNav: true, showInFooter: true, seo: { title: 'NOCTURN ENGINE — Real-Time Game Engine & Toolset', description: 'Open-source game engine with real-time rendering, physics, ECS, scripting, and multiplayer. Free forever, no royalties.' } },
  { path: '/work', label: 'SHOWCASES', element: 'Work', showInNav: true, showInFooter: true, seo: { title: 'Showcases — NOCTURN Engine', description: 'Games and demos built with Nocturn Engine. See what\'s possible.' } },
  { path: '/services', label: 'FEATURES', element: 'Services', showInNav: true, showInFooter: true, seo: { title: 'Features — NOCTURN Engine', description: 'Real-time rendering, physics, ECS, scripting, netcode, and editor tools.' } },
  { path: '/process', label: 'WORKFLOW', element: 'Process', showInNav: true, showInFooter: true, seo: { title: 'Workflow — NOCTURN Engine', description: 'From install to ship. Our development workflow.' } },
  { path: '/studio', label: 'ABOUT', element: 'Studio', showInNav: true, showInFooter: true, seo: { title: 'About — NOCTURN Engine', description: 'Meet the team building Nocturn Engine. Our mission and values.' } },
  { path: '/journal', label: 'DEVLOG', element: 'Journal', showInNav: true, showInFooter: true, seo: { title: 'Devlog — NOCTURN Engine', description: 'Engineering deep-dives, tutorials, and engine updates.' } },
  { path: '/pricing', label: 'LICENSING', element: 'Pricing', showInNav: false, showInFooter: true, seo: { title: 'Licensing — NOCTURN Engine', description: 'Free Indie license, Studio plans, and Enterprise. No royalties.' } },
  { path: '/contact', label: 'CONTACT', element: 'Contact', showInNav: false, showInFooter: true, seo: { title: 'Contact — NOCTURN Engine', description: 'Get in touch with the Nocturn team.' } },
  { path: '/tools', label: 'COMPONENTS', element: 'Tools', showInNav: false, showInFooter: true, seo: { title: 'Components — NOCTURN Engine', description: 'Engine components and modules.' } },
  { path: '/resources', label: 'DOCS', element: 'Resources', showInNav: false, showInFooter: true, seo: { title: 'Documentation — NOCTURN Engine', description: 'Guides, API reference, and templates.' } },
  { path: '/press', label: 'PRESS', element: 'Press', showInNav: false, showInFooter: true, seo: { title: 'Press — NOCTURN Engine', description: 'Media coverage and awards.' } },
  { path: '/events', label: 'EVENTS', element: 'Events', showInNav: false, showInFooter: true, seo: { title: 'Events — NOCTURN Engine', description: 'Conferences, game jams, and meetups.' } },
  { path: '/workshops', label: 'TRAINING', element: 'Workshops', showInNav: false, showInFooter: true, seo: { title: 'Training — NOCTURN Engine', description: 'Workshops and courses for game developers.' } },
  { path: '/partners', label: 'PARTNERS', element: 'Partners', showInNav: false, showInFooter: true, seo: { title: 'Partners — NOCTURN Engine', description: 'Integration and technology partnerships.' } },
  { path: '/reel', label: 'REEL', element: 'Reel', showInNav: false, showInFooter: false, seo: { title: 'Showreel — NOCTURN Engine', description: 'Watch what Nocturn Engine can do.' } },
  { path: '/clients', label: 'STUDIOS', element: 'Clients', showInNav: false, showInFooter: true, seo: { title: 'Studios — NOCTURN Engine', description: 'Studios building with Nocturn Engine.' } },
  { path: '/careers', label: 'CAREERS', element: 'Careers', showInNav: false, showInFooter: true, seo: { title: 'Careers — NOCTURN Engine', description: 'Join the team building the future of game engines.' } },
  { path: '/testimonials', label: 'TESTIMONIALS', element: 'Testimonials', showInNav: false, showInFooter: false, seo: { title: 'Testimonials — NOCTURN Engine', description: 'What developers say about Nocturn Engine.' } },
  { path: '/compare', label: 'COMPARE', element: 'Compare', showInNav: false, showInFooter: false, seo: { title: 'Compare — NOCTURN Engine', description: 'Nocturn vs Unity vs Unreal.' } },
  { path: '/start', label: 'DOWNLOAD', element: 'Start', showInNav: false, showInFooter: false, seo: { title: 'Download — NOCTURN Engine', description: 'Get started with Nocturn Engine.' } },
  { path: '/status', label: 'ROADMAP', element: 'Status', showInNav: false, showInFooter: false, seo: { title: 'Roadmap — NOCTURN Engine', description: 'Release schedule and development status.' } },
  { path: '/faq', label: 'FAQ', element: 'Faq', showInNav: false, showInFooter: true, seo: { title: 'FAQ — NOCTURN Engine', description: 'Frequently asked questions about Nocturn Engine.' } },
  { path: '/privacy', label: 'PRIVACY', element: 'Privacy', showInNav: false, showInFooter: true, seo: { title: 'Privacy Policy — NOCTURN Engine', description: 'How we handle your data.' } },
  { path: '/terms', label: 'TERMS', element: 'Terms', showInNav: false, showInFooter: true, seo: { title: 'License Agreement — NOCTURN Engine', description: 'Terms and conditions for Nocturn Engine.' } },
  { path: '/thank-you', label: 'THANK YOU', element: 'ThankYou', showInNav: false, showInFooter: false, seo: { title: 'Thank You — NOCTURN Engine', description: 'Message received.' } },
];

export const navRoutes = routes.filter(r => r.showInNav);
export const footerRoutes = routes.filter(r => r.showInFooter);
export const moreRoutes = routes.filter(r => !r.showInNav && r.showInFooter && !['LICENSING', 'CONTACT', 'STUDIOS', 'CAREERS', 'FAQ', 'PRIVACY', 'TERMS'].includes(r.label));
