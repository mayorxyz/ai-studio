import type { ProcessStep } from './types';

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Install & Setup',
    duration: '5 MINUTES',
    description: 'Download the engine, create a project, and configure your target platforms. The editor guides you through initial setup.',
    deliverables: ['Engine installed', 'Project created', 'Platform targets set'],
  },
  {
    number: '02',
    title: 'Prototype',
    duration: '1-2 WEEKS',
    description: 'Use templates and visual scripting to build your core gameplay loop. Hot-reload lets you iterate without restarting.',
    deliverables: ['Gameplay prototype', 'Core mechanics', 'Basic art pipeline'],
  },
  {
    number: '03',
    title: 'Production',
    duration: '2-12 MONTHS',
    description: 'Scale up with full engine features. Use the asset pipeline, animation system, and audio engine to build content.',
    deliverables: ['Full game build', 'Asset pipeline', 'Optimization pass'],
  },
  {
    number: '04',
    title: 'Polish & QA',
    duration: '2-4 WEEKS',
    description: 'Use built-in profiling tools to optimize performance. Fix bugs with the integrated debugger and profiler.',
    deliverables: ['Performance report', 'Bug fixes', 'Platform certification'],
  },
  {
    number: '05',
    title: 'Ship',
    duration: '1 DAY',
    description: 'One-click build for all platforms. Automatic signing, packaging, and deployment to stores.',
    deliverables: ['Platform builds', 'Store submissions', 'Launch checklist'],
  },
];
