import type { RouteConfig } from '../content/types';

export const routes: RouteConfig[] = [
  { path: '/', label: 'HOME', element: 'Home', showInNav: true, showInFooter: true, seo: { title: 'NOCTURN — AI Film · Animation · Automation', description: 'AI-assisted video, animation, storytelling films, branded content, and automated video pipelines from Berlin.' } },
  { path: '/work', label: 'WORK', element: 'Work', showInNav: true, showInFooter: true, seo: { title: 'Work — NOCTURN Studio', description: 'Selected projects in AI video, animation, brand films, and automation.' } },
  { path: '/services', label: 'SERVICES', element: 'Services', showInNav: true, showInFooter: true, seo: { title: 'Services — NOCTURN Studio', description: 'Storytelling animation, AI video production, video automation, brand content, post-production, and motion design.' } },
  { path: '/process', label: 'PROCESS', element: 'Process', showInNav: true, showInFooter: true, seo: { title: 'Process — NOCTURN Studio', description: 'Our 5-step workflow from brief to delivery.' } },
  { path: '/studio', label: 'STUDIO', element: 'Studio', showInNav: true, showInFooter: true, seo: { title: 'Studio — NOCTURN', description: 'Meet the team, our values, and the tools we use.' } },
  { path: '/journal', label: 'JOURNAL', element: 'Journal', showInNav: true, showInFooter: true, seo: { title: 'Journal — NOCTURN Studio', description: 'Behind the scenes, tutorials, and insights from our studio.' } },
  { path: '/pricing', label: 'PRICING', element: 'Pricing', showInNav: false, showInFooter: true, seo: { title: 'Pricing — NOCTURN Studio', description: 'Simple pricing for video production. Project and retainer plans.' } },
  { path: '/contact', label: 'CONTACT', element: 'Contact', showInNav: false, showInFooter: true, seo: { title: 'Contact — NOCTURN Studio', description: 'Start a project with NOCTURN Studio. Get a quote within 24 hours.' } },
  { path: '/reel', label: 'REEL', element: 'Reel', showInNav: false, showInFooter: false, seo: { title: 'Showreel — NOCTURN Studio', description: 'Watch our latest showreel.' } },
  { path: '/clients', label: 'CLIENTS', element: 'Clients', showInNav: false, showInFooter: true, seo: { title: 'Clients — NOCTURN Studio', description: 'Trusted by leading brands and startups.' } },
  { path: '/careers', label: 'CAREERS', element: 'Careers', showInNav: false, showInFooter: true, seo: { title: 'Careers — NOCTURN Studio', description: 'Join our team. Open roles in creative, engineering, and production.' } },
  { path: '/faq', label: 'FAQ', element: 'Faq', showInNav: false, showInFooter: true, seo: { title: 'FAQ — NOCTURN Studio', description: 'Frequently asked questions about our services and process.' } },
  { path: '/privacy', label: 'PRIVACY', element: 'Privacy', showInNav: false, showInFooter: true, seo: { title: 'Privacy Policy — NOCTURN Studio', description: 'How we handle your data.' } },
  { path: '/terms', label: 'TERMS', element: 'Terms', showInNav: false, showInFooter: true, seo: { title: 'Terms of Service — NOCTURN Studio', description: 'Terms and conditions for our services.' } },
  { path: '/thank-you', label: 'THANK YOU', element: 'ThankYou', showInNav: false, showInFooter: false, seo: { title: 'Thank You — NOCTURN Studio', description: 'Message received. We\'ll be in touch soon.' } },
];

export const navRoutes = routes.filter(r => r.showInNav);
export const footerRoutes = routes.filter(r => r.showInFooter);
