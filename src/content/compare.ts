import type { CompareRow } from './types';

export const compareRows: CompareRow[] = [
  { feature: 'Creative direction', studio: true, agency: true, inHouse: 'Varies' },
  { feature: 'AI expertise', studio: true, agency: 'Limited', inHouse: false },
  { feature: 'Scalability', studio: true, agency: true, inHouse: 'Limited' },
  { feature: 'Cost efficiency', studio: true, agency: false, inHouse: 'Varies' },
  { feature: 'Turnaround time', studio: 'Fast', agency: 'Medium', inHouse: 'Slow' },
  { feature: 'Brand consistency', studio: true, agency: true, inHouse: true },
  { feature: 'Full rights transfer', studio: true, agency: 'Varies', inHouse: true },
  { feature: 'Dedicated team', studio: true, agency: false, inHouse: true },
];
