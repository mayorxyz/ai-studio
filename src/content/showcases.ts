import type { Showcase } from './types';

export const showcases: Showcase[] = [
  {
    slug: 'aurora-behind-the-scenes',
    projectSlug: 'aurora-brand-film',
    title: 'Aurora — Behind the Scenes',
    steps: [
      { title: 'Concept Development', description: 'We explored neural network visualizations and abstract data flows.' },
      { title: 'AI Environment Generation', description: 'Used Midjourney to generate base environments, then refined in Photoshop.' },
      { title: 'Compositing', description: 'Layered live-action footage with AI-generated backgrounds in After Effects.' },
      { title: 'Color & Sound', description: 'Final grade in DaVinci Resolve, sound design in Pro Tools.' },
    ],
    tools: ['Midjourney', 'After Effects', 'DaVinci Resolve', 'Pro Tools'],
    beforeAfter: [
      { before: 'Raw footage', after: 'Final composite', label: 'Scene 01' },
    ],
    prompts: ['Abstract neural network visualization, blue and green tones, cinematic'],
    color: '#1a1a2e',
    placeholder: true,
  },
  {
    slug: 'echo-ai-process',
    projectSlug: 'echo-ai-short',
    title: 'Echo — AI Generation Process',
    steps: [
      { title: 'Script Generation', description: 'Used GPT-4 to develop narrative structure and dialogue.' },
      { title: 'Visual Generation', description: 'Runway Gen-3 for video clips, Midjourney for key frames.' },
      { title: 'Voice Synthesis', description: 'ElevenLabs for character voices, custom voice cloning.' },
      { title: 'Assembly', description: 'Edited and color graded all AI-generated elements.' },
    ],
    tools: ['Runway Gen-3', 'Midjourney', 'ElevenLabs', 'DaVinci Resolve'],
    prompts: ['Digital consciousness, abstract figure, neon green accent, dark cinematic'],
    color: '#2a1a1a',
    placeholder: true,
  },
];
