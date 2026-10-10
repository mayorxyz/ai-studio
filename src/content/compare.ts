import type { CompareRow } from './types';

export const compareRows: CompareRow[] = [
  { feature: 'License cost', studio: 'Free', agency: '€0 + 5% royalty', inHouse: '€2,040/yr per seat' },
  { feature: 'Source code access', studio: true, agency: false, inHouse: false },
  { feature: 'No royalties', studio: true, agency: false, inHouse: true },
  { feature: 'ECS architecture', studio: true, agency: 'Plugin', inHouse: false },
  { feature: 'Hot-reload scripts', studio: true, agency: true, inHouse: 'Limited' },
  { feature: 'Built-in netcode', studio: true, agency: 'Plugin', inHouse: 'Plugin' },
  { feature: 'Linux editor', studio: true, agency: false, inHouse: false },
  { feature: 'Community & support', studio: true, agency: true, inHouse: true },
];
