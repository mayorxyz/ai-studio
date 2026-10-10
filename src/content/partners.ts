import type { Partner } from './types';

export const partners: Partner[] = [
  { slug: 'bronze-tier', name: 'Bronze Partner', tier: 'bronze', description: 'Referral partnership with commission on referred projects.', color: '#1a1a2e', placeholder: true },
  { slug: 'silver-tier', name: 'Silver Partner', tier: 'silver', description: 'Preferred partnership with priority scheduling and co-marketing.', color: '#1e1e3a', placeholder: true },
  { slug: 'gold-tier', name: 'Gold Partner', tier: 'gold', description: 'Strategic partnership with dedicated support and white-label options.', color: '#2d1b4e', placeholder: true },
];
