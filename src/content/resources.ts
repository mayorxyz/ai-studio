import type { Resource } from './types';

export const resources: Resource[] = [
  { slug: 'ai-video-prompt-guide', title: 'AI Video Prompt Guide', type: 'PDF', description: 'Comprehensive guide to writing effective prompts for AI video generation.', fileUrl: '/resources/ai-video-prompt-guide.pdf', tags: ['AI', 'GUIDE'], color: '#0d2137', placeholder: true },
  { slug: 'storyboard-template', title: 'Storyboard Template', type: 'FIGMA', description: 'Free storyboard template for video projects.', fileUrl: '/resources/storyboard-template.fig', tags: ['TEMPLATE', 'PRE-PRODUCTION'], color: '#1a1a2e', placeholder: true },
  { slug: 'color-grading-luts', title: 'Cinematic LUT Pack', type: 'LUT', description: '10 cinematic color grading LUTs for DaVinci Resolve.', fileUrl: '/resources/cinematic-luts.zip', tags: ['COLOR', 'POST'], color: '#1a2e1a', placeholder: true },
  { slug: 'project-brief-template', title: 'Project Brief Template', type: 'DOC', description: 'Template for writing effective project briefs.', fileUrl: '/resources/project-brief.docx', tags: ['TEMPLATE', 'PLANNING'], color: '#2d1b4e', placeholder: true },
];
