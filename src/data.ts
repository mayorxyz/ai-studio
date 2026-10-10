export const STUDIO = {
  name: 'NOCTURN',
  tagline: 'AI Film · Animation · Automation',
  city: 'Berlin, DE',
  email: 'hello@nocturn.studio',
  whatsapp: '+49 170 123 4567',
  bookingUrl: 'https://cal.com/nocturn',
  socials: {
    instagram: 'https://instagram.com/nocturn.studio',
    vimeo: 'https://vimeo.com/nocturn',
    youtube: 'https://youtube.com/@nocturn',
    linkedin: 'https://linkedin.com/company/nocturn',
  },
  tickerItems: [
    'TEXT TO VIDEO',
    'STORYBOARDS',
    'CHARACTER ANIMATION',
    'VOICE & SOUND',
    'AUTOMATED CLIPS',
    'BRAND FILMS',
    'SHORT-FORM',
    'COLOR & EDIT',
    'MOTION DESIGN',
    'AI PIPELINES',
  ],
};

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
  thumbnail: string;
  color: string;
  featured: boolean;
  order: number;
  brief: string;
  results: { label: string; value: string }[];
}

export const projects: Project[] = [
  {
    slug: 'aurora-brand-film',
    title: 'Aurora — Brand Film',
    category: ['FILM', 'BRAND'],
    year: 2025,
    client: 'Aurora Labs',
    role: 'Direction, Production, Post',
    tools: ['RED Komodo', 'DaVinci Resolve', 'After Effects'],
    summary: 'Cinematic brand film for an AI research lab',
    description: 'A 90-second brand film that translates complex AI research into a visual narrative. Shot on RED with AI-generated environments composited in post.',
    thumbnail: '',
    color: '#1a1a2e',
    featured: true,
    order: 1,
    brief: 'Aurora Labs needed a brand film that could communicate their cutting-edge AI research to both technical and non-technical audiences. The challenge was making abstract neural network concepts feel human and cinematic.',
    results: [
      { label: 'VIEWS', value: '2.4M' },
      { label: 'ENGAGEMENT', value: '340%' },
      { label: 'AWARDS', value: '3' },
    ],
  },
  {
    slug: 'synthwave-animation',
    title: 'Synthwave — Music Video',
    category: ['ANIMATION'],
    year: 2025,
    client: 'KIRA',
    role: 'Animation, Direction',
    tools: ['Blender', 'Houdini', 'After Effects'],
    summary: 'Fully animated music video with AI-assisted environments',
    description: 'A fully animated music video blending 3D environments with AI-generated textures. Each frame was crafted to match the synthwave aesthetic while maintaining a unique visual identity.',
    thumbnail: '',
    color: '#2d1b4e',
    featured: true,
    order: 2,
    brief: 'Artist KIRA wanted a music video that felt like a journey through a digital dreamscape. We used AI tools to generate base environments, then hand-crafted every character and animation.',
    results: [
      { label: 'STREAMS', value: '8.2M' },
      { label: 'SHARES', value: '45K' },
      { label: 'FEATURED', value: 'YouTube' },
    ],
  },
  {
    slug: 'flux-ai-pipeline',
    title: 'Flux — AI Video Pipeline',
    category: ['AI VIDEO', 'AUTOMATION'],
    year: 2025,
    client: 'Flux Commerce',
    role: 'Pipeline Design, Development',
    tools: ['ComfyUI', 'Python', 'Runway', 'Custom Models'],
    summary: 'Automated video generation pipeline for e-commerce',
    description: 'Built a fully automated video pipeline that generates product videos from static images. The system processes 500+ SKUs daily with consistent brand quality.',
    thumbnail: '',
    color: '#0d2137',
    featured: true,
    order: 3,
    brief: 'Flux Commerce needed to scale their video content without scaling their team. We designed an AI pipeline that takes product photos and automatically generates branded video content.',
    results: [
      { label: 'DAILY OUTPUT', value: '500+' },
      { label: 'COST REDUCTION', value: '78%' },
      { label: 'TURNAROUND', value: '4hrs' },
    ],
  },
  {
    slug: 'meridian-documentary',
    title: 'Meridian — Short Documentary',
    category: ['FILM'],
    year: 2024,
    client: 'Self-initiated',
    role: 'Direction, Cinematography, Edit',
    tools: ['Sony FX6', 'Premiere Pro', 'After Effects'],
    summary: 'Short documentary about urban foraging in Berlin',
    description: 'A 12-minute documentary exploring the hidden world of urban foragers in Berlin. Shot over 6 months across all seasons.',
    thumbnail: '',
    color: '#1a2e1a',
    featured: true,
    order: 4,
    brief: 'We wanted to tell the story of people who find food in unexpected urban spaces. The film follows three foragers through Berlin across all four seasons.',
    results: [
      { label: 'FESTIVALS', value: '7' },
      { label: 'SCREENINGS', value: '23' },
      { label: 'PRESS', value: '12' },
    ],
  },
  {
    slug: 'vertex-motion',
    title: 'Vertex — Motion System',
    category: ['ANIMATION', 'BRAND'],
    year: 2024,
    client: 'Vertex Finance',
    role: 'Motion Design, Brand System',
    tools: ['After Effects', 'Lottie', 'Figma'],
    summary: 'Complete motion design system for fintech brand',
    description: 'Designed and built a comprehensive motion system including UI animations, explainer videos, and social content templates for Vertex Finance.',
    thumbnail: '',
    color: '#1e1e3a',
    featured: true,
    order: 5,
    brief: 'Vertex Finance needed a motion language that could scale across their product, marketing, and social channels. We created a system of reusable animation components.',
    results: [
      { label: 'COMPONENTS', value: '120+' },
      { label: 'PLATFORMS', value: '6' },
      { label: 'TIME SAVED', value: '60%' },
    ],
  },
  {
    slug: 'echo-ai-short',
    title: 'Echo — AI Short Film',
    category: ['AI VIDEO', 'FILM'],
    year: 2024,
    client: 'Self-initiated',
    role: 'Direction, AI Pipeline, Post',
    tools: ['Runway Gen-3', 'Midjourney', 'ElevenLabs', 'DaVinci'],
    summary: 'AI-generated short film exploring consciousness',
    description: 'A 5-minute short film created entirely with AI tools — from script generation to visual effects. Explores themes of digital consciousness and identity.',
    thumbnail: '',
    color: '#2a1a1a',
    featured: true,
    order: 6,
    brief: 'We set out to prove that AI tools could create emotionally resonant storytelling. Every frame was AI-generated, but the creative direction was entirely human.',
    results: [
      { label: 'VIEWS', value: '1.8M' },
      { label: 'FEATURED', value: 'Vimeo Staff' },
      { label: 'TOOLS USED', value: '7' },
    ],
  },
  {
    slug: 'prism-social',
    title: 'Prism — Social Content',
    category: ['BRAND', 'AUTOMATION'],
    year: 2024,
    client: 'Prism Health',
    role: 'Content Strategy, Production',
    tools: ['After Effects', 'Premiere', 'Canva API'],
    summary: 'Automated social content system for health brand',
    description: 'Built an automated content generation system that produces 30+ social videos per week for Prism Health across Instagram, TikTok, and YouTube Shorts.',
    thumbnail: '',
    color: '#1a2e2e',
    featured: false,
    order: 7,
    brief: 'Prism Health needed consistent, high-quality social content without the overhead of a full content team. We built a system that templates, generates, and schedules video content.',
    results: [
      { label: 'WEEKLY OUTPUT', value: '30+' },
      { label: 'FOLLOWER GROWTH', value: '280%' },
      { label: 'ENGAGEMENT', value: '4.2x' },
    ],
  },
  {
    slug: 'neon-title-sequence',
    title: 'Neon — Title Sequence',
    category: ['ANIMATION'],
    year: 2024,
    client: 'Neon Series',
    role: 'Title Design, Animation',
    tools: ['Cinema 4D', 'After Effects', 'Octane'],
    summary: 'Opening title sequence for streaming series',
    description: 'Designed and animated the opening title sequence for a sci-fi streaming series. Combined practical neon photography with 3D animation.',
    thumbnail: '',
    color: '#2e1a2e',
    featured: false,
    order: 8,
    brief: 'The show needed titles that captured its neon-soaked cyberpunk aesthetic while establishing tone in under 60 seconds. We blended practical light work with digital animation.',
    results: [
      { label: 'DURATION', value: '45s' },
      { label: 'VIEWS', value: '12M' },
      { label: 'RECOGNITION', value: 'EDA Nom.' },
    ],
  },
  {
    slug: 'terra-explainer',
    title: 'Terra — Explainer Series',
    category: ['AI VIDEO', 'BRAND'],
    year: 2024,
    client: 'Terra Energy',
    role: 'Concept, Animation, AI Assist',
    tools: ['Blender', 'After Effects', 'Stable Diffusion'],
    summary: 'AI-assisted explainer video series for clean energy',
    description: 'A series of 6 explainer videos that break down complex clean energy technology into accessible visual stories, with AI-generated environments and hand-animated characters.',
    thumbnail: '',
    color: '#1a2e1e',
    featured: false,
    order: 9,
    brief: 'Terra Energy needed to explain their technology to investors and the public. We created a visual language that makes complex energy systems feel approachable and inspiring.',
    results: [
      { label: 'VIDEOS', value: '6' },
      { label: 'TOTAL VIEWS', value: '3.1M' },
      { label: 'CONVERSION', value: '+42%' },
    ],
  },
];

export interface Service {
  slug: string;
  number: string;
  title: string;
  summary: string;
  bullets: string[];
  priceFrom: string;
  tags: string[];
  color: string;
}

export const services: Service[] = [
  {
    slug: 'storytelling-animation',
    number: '01',
    title: 'Storytelling Animation',
    summary: 'Character-driven narratives brought to life through 2D and 3D animation. From concept to final render.',
    bullets: ['Script & storyboard', 'Character design', '2D/3D animation', 'Sound design', 'Final delivery'],
    priceFrom: '€8,000',
    tags: ['2D', '3D', 'MOTION', 'CHARACTER'],
    color: '#1a1a2e',
  },
  {
    slug: 'ai-video-production',
    number: '02',
    title: 'AI Video Production',
    summary: 'AI-generated visuals combined with human creative direction. Pushing the boundaries of what machines can create.',
    bullets: ['AI pipeline design', 'Prompt engineering', 'Model training', 'Human curation', 'Post-production'],
    priceFrom: '€5,000',
    tags: ['AI', 'GENERATIVE', 'PIPELINE', 'VFX'],
    color: '#2d1b4e',
  },
  {
    slug: 'video-automation',
    number: '03',
    title: 'Video Automation',
    summary: 'Scalable video pipelines that produce consistent content at scale. Perfect for e-commerce and social.',
    bullets: ['Pipeline architecture', 'Template systems', 'Batch processing', 'Quality control', 'API integration'],
    priceFrom: '€12,000',
    tags: ['AUTOMATION', 'SCALE', 'API', 'TEMPLATES'],
    color: '#0d2137',
  },
  {
    slug: 'brand-content',
    number: '04',
    title: 'Brand Content',
    summary: 'Films, campaigns, and content that define your brand. From concept through production to delivery.',
    bullets: ['Creative direction', 'Production', 'Post-production', 'Color grading', 'Delivery formats'],
    priceFrom: '€15,000',
    tags: ['FILM', 'BRAND', 'CAMPAIGN', 'DIRECTION'],
    color: '#1a2e1a',
  },
  {
    slug: 'post-production',
    number: '05',
    title: 'Post-Production',
    summary: 'Edit, color, VFX, and sound. The final polish that makes good footage great.',
    bullets: ['Offline edit', 'Online edit', 'Color grading', 'VFX & compositing', 'Sound design & mix'],
    priceFrom: '€3,000',
    tags: ['EDIT', 'COLOR', 'VFX', 'SOUND'],
    color: '#2a1a1a',
  },
  {
    slug: 'motion-design',
    number: '06',
    title: 'Motion Design',
    summary: 'Animated graphics, title sequences, and UI motion. Making interfaces and brands move with purpose.',
    bullets: ['Concept & style', 'Animation', 'UI motion', 'Title sequences', 'Lottie export'],
    priceFrom: '€4,000',
    tags: ['MOTION', 'UI', 'TITLES', 'LOTTIE'],
    color: '#1e1e3a',
  },
];

export interface Plan {
  name: string;
  tagline: string;
  priceProject: string;
  priceRetainer: string;
  features: string[];
  highlighted: boolean;
  badge?: string;
}

export const plans: Plan[] = [
  {
    name: 'Starter',
    tagline: 'Single deliverable',
    priceProject: '€3,000',
    priceRetainer: '€2,000/mo',
    features: [
      '1 video (up to 60s)',
      '2 revision rounds',
      '10-day turnaround',
      'MP4 + WebM delivery',
      'Web usage rights',
      'Email support',
    ],
    highlighted: false,
  },
  {
    name: 'Studio',
    tagline: 'Most popular',
    priceProject: '€8,000',
    priceRetainer: '€5,000/mo',
    features: [
      'Up to 3 videos (90s each)',
      '4 revision rounds',
      '14-day turnaround',
      'All formats + source files',
      'Full rights transfer',
      'Priority support',
      'Dedicated producer',
    ],
    highlighted: true,
    badge: 'MOST POPULAR',
  },
  {
    name: 'Premium',
    tagline: 'Full production',
    priceProject: '€20,000',
    priceRetainer: '€12,000/mo',
    features: [
      'Unlimited videos',
      'Unlimited revisions',
      '7-day turnaround',
      'All formats + source + project files',
      'Full rights + exclusivity',
      'Slack channel support',
      'Senior creative director',
      'Strategy consultation',
    ],
    highlighted: false,
    badge: 'BEST VALUE',
  },
  {
    name: 'Custom',
    tagline: 'Your scope',
    priceProject: 'Let\'s talk',
    priceRetainer: 'Let\'s talk',
    features: [
      'Custom scope & timeline',
      'Dedicated team',
      'On-site available',
      'White-label option',
      'NDA & IP assignment',
      'Custom SLA',
      'Volume discounts',
      'Integration support',
    ],
    highlighted: false,
  },
];

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
}

export const team: TeamMember[] = [
  { name: 'Alex Chen', role: 'Creative Director', bio: '10 years in film and motion. Previously at Buck and ManvsMachine.' },
  { name: 'Maya Torres', role: 'AI Engineer', bio: 'Built generative pipelines at Runway and Stability AI.' },
  { name: 'Jonas Weber', role: 'Producer', bio: 'Managed 200+ productions. Obsessed with timelines and budgets.' },
  { name: 'Priya Sharma', role: 'Animation Lead', bio: 'Character animation specialist. Blender contributor.' },
  { name: 'Luca Rossi', role: 'Editor & Colorist', bio: 'DaVinci certified. Color is storytelling.' },
  { name: 'Sara Kim', role: 'Sound Designer', bio: 'Audio for film and games. Spatial audio specialist.' },
];

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
}

export const testimonials: Testimonial[] = [
  {
    quote: 'Nocturn delivered a brand film that exceeded every expectation. Their AI pipeline approach saved us months of production time.',
    name: 'David Park',
    role: 'CMO',
    company: 'Aurora Labs',
  },
  {
    quote: 'The automated video system they built processes our entire catalog daily. It\'s like having a full production team on autopilot.',
    name: 'Lisa Chen',
    role: 'Head of Content',
    company: 'Flux Commerce',
  },
  {
    quote: 'Working with Nocturn felt like working with the future. They understand both the creative and technical sides deeply.',
    name: 'Marcus Webb',
    role: 'Founder',
    company: 'Vertex Finance',
  },
];

export interface ProcessStep {
  number: string;
  title: string;
  duration: string;
  description: string;
  deliverables: string[];
}

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Brief',
    duration: '1-2 DAYS',
    description: 'We start with a deep-dive call to understand your goals, audience, and constraints. We align on scope, timeline, and budget.',
    deliverables: ['Project brief', 'Scope document', 'Timeline', 'Quote'],
  },
  {
    number: '02',
    title: 'Story & Boards',
    duration: '3-5 DAYS',
    description: 'We develop the creative concept, write the script, and create storyboards. You approve the direction before we produce.',
    deliverables: ['Creative concept', 'Script', 'Storyboard', 'Style frames'],
  },
  {
    number: '03',
    title: 'Production',
    duration: '5-15 DAYS',
    description: 'The main production phase — shooting, animating, generating, or building. Daily progress updates and check-ins.',
    deliverables: ['Raw footage/renders', 'First cut', 'Progress updates'],
  },
  {
    number: '04',
    title: 'Polish',
    duration: '3-5 DAYS',
    description: 'Color grading, sound design, VFX, and final touches. Revision rounds to get everything perfect.',
    deliverables: ['Color grade', 'Sound mix', 'VFX', 'Revision rounds'],
  },
  {
    number: '05',
    title: 'Delivery',
    duration: '1-2 DAYS',
    description: 'Final files in all required formats. Source files, usage guide, and handoff documentation included.',
    deliverables: ['Final files', 'All formats', 'Source files', 'Usage guide'],
  },
];

export interface JournalPost {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  color: string;
}

export const journalPosts: JournalPost[] = [
  {
    slug: 'ai-video-pipeline-guide',
    title: 'Building an AI Video Pipeline: Our Complete Guide',
    category: 'AI VIDEO',
    date: '2025-01-15',
    readTime: '8 min',
    excerpt: 'How we built a system that produces 500+ product videos daily using AI tools and custom automation.',
    color: '#0d2137',
  },
  {
    slug: 'storytelling-with-ai',
    title: 'Can AI Tell Stories? Lessons from Our Short Film',
    category: 'BEHIND THE SCENES',
    date: '2025-01-08',
    readTime: '6 min',
    excerpt: 'What we learned making a fully AI-generated short film about digital consciousness.',
    color: '#2a1a1a',
  },
  {
    slug: 'motion-design-system',
    title: 'Designing a Motion System That Scales',
    category: 'PROCESS',
    date: '2024-12-20',
    readTime: '5 min',
    excerpt: 'How we created 120+ reusable motion components for a fintech brand.',
    color: '#1e1e3a',
  },
  {
    slug: 'color-grading-tips',
    title: '5 Color Grading Techniques We Use on Every Project',
    category: 'TUTORIAL',
    date: '2024-12-10',
    readTime: '4 min',
    excerpt: 'Our go-to color grading workflow in DaVinci Resolve for cinematic results.',
    color: '#1a2e1a',
  },
];

export const clients = ['AURORA LABS', 'FLUX', 'VERTEX', 'PRISM', 'KIRA', 'TERRA'];

export const faqItems = [
  { q: 'How does the AI pipeline work?', a: 'We design custom pipelines using tools like ComfyUI, Runway, and proprietary models. Each pipeline is tailored to your brand and content needs, with quality control at every step.' },
  { q: 'What\'s the typical turnaround time?', a: 'Standard projects take 2-4 weeks from brief to delivery. Rush projects are available at a premium. Automated pipelines can produce content within hours of input.' },
  { q: 'Do you offer retainer agreements?', a: 'Yes. Our retainer plans start at €2,000/month and include dedicated production capacity, priority scheduling, and volume discounts.' },
  { q: 'What about rights and usage?', a: 'All our standard packages include full rights transfer. You own the final deliverables completely. Source files are included in Studio and Premium tiers.' },
  { q: 'Can you work with our existing team?', a: 'Absolutely. We frequently embed with in-house teams as an extension of their creative department. We adapt to your tools, workflows, and communication style.' },
  { q: 'What if I\'m not happy with the result?', a: 'Every package includes revision rounds. We don\'t consider a project done until you\'re thrilled. Our satisfaction rate is 98%.' },
];
