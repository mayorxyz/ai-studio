// Content types for NOCTURN studio

export interface Project {
  slug: string;
  title: string;
  category: string[];
  year: number;
  client: string;
  role: string;
  tools: string[];
  summary: string;
  description: string;
  thumbnail?: string;
  previewClip?: string;
  fullVideo?: string;
  poster?: string;
  color: string;
  featured: boolean;
  order: number;
  brief: string;
  results: { label: string; value: string }[];
  gallery?: { src: string; alt: string; type: 'image' | 'video' }[];
  quote?: { text: string; author: string; role: string };
  placeholder?: boolean;
}

export interface Service {
  slug: string;
  number: string;
  title: string;
  summary: string;
  bullets: string[];
  priceFrom: string;
  tags: string[];
  color: string;
  media?: string;
  poster?: string;
  process?: { step: string; title: string; desc: string }[];
  relatedProjects?: string[];
  placeholder?: boolean;
}

export interface Plan {
  name: string;
  tagline: string;
  priceProject: string;
  priceRetainer: string;
  features: string[];
  highlighted: boolean;
  badge?: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  portrait?: string;
  placeholder?: boolean;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  placeholder?: boolean;
}

export interface ProcessStep {
  number: string;
  title: string;
  duration: string;
  description: string;
  deliverables: string[];
  media?: string;
}

export interface JournalPost {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  cover?: string;
  color: string;
  body?: string;
  placeholder?: boolean;
}

export interface Career {
  slug: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
  benefits: string[];
  placeholder?: boolean;
}

export interface LegalPage {
  slug: string;
  title: string;
  lastUpdated: string;
  sections: { heading: string; content: string }[];
}

export interface StudioInfo {
  name: string;
  tagline: string;
  city: string;
  email: string;
  whatsapp: string;
  bookingUrl: string;
  url: string;
  socials: {
    instagram: string;
    vimeo: string;
    youtube: string;
    linkedin: string;
  };
  tickerItems: string[];
}

export interface RouteConfig {
  path: string;
  label: string;
  element: string;
  showInNav: boolean;
  showInFooter: boolean;
  seo: {
    title: string;
    description: string;
  };
}

export interface FAQ {
  q: string;
  a: string;
  group?: string;
}
