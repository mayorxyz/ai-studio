import type { RouteConfig } from '../content/types';

export const routes: RouteConfig[] = [
  { path: '/', label: 'HOME', element: 'Home', showInNav: true, showInFooter: true, seo: { title: 'NOCTURN — Game Development Studio', description: 'Independent game studio crafting immersive experiences. Explore our portfolio of shipped titles.' } },
  { path: '/games', label: 'GAMES', element: 'Games', showInNav: true, showInFooter: true, seo: { title: 'Our Games — NOCTURN Studio', description: 'Explore our portfolio of shipped games across multiple genres and platforms.' } },
  { path: '/about', label: 'ABOUT', element: 'About', showInNav: true, showInFooter: true, seo: { title: 'About — NOCTURN Studio', description: 'Meet the team behind NOCTURN. Our story, mission, and the games we build.' } },
  { path: '/contact', label: 'CONTACT', element: 'Contact', showInNav: false, showInFooter: true, seo: { title: 'Contact — NOCTURN Studio', description: 'Get in touch with NOCTURN Studio.' } },
  { path: '/trailers', label: 'TRAILERS', element: 'Trailers', showInNav: true, showInFooter: true, seo: { title: 'Trailers — NOCTURN Studio', description: 'Watch trailers and gameplay footage from our games.' } },
  { path: '/privacy', label: 'PRIVACY', element: 'Privacy', showInNav: false, showInFooter: true, seo: { title: 'Privacy Policy — NOCTURN Studio', description: 'How we handle your data.' } },
  { path: '/terms', label: 'TERMS', element: 'Terms', showInNav: false, showInFooter: true, seo: { title: 'Terms of Service — NOCTURN Studio', description: 'Terms and conditions.' } },
  { path: '/thank-you', label: 'THANK YOU', element: 'ThankYou', showInNav: false, showInFooter: false, seo: { title: 'Thank You — NOCTURN Studio', description: 'Message received.' } },
];

export const navRoutes = routes.filter(r => r.showInNav);
export const footerRoutes = routes.filter(r => r.showInFooter);
export const moreRoutes: RouteConfig[] = [];
