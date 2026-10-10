import type { ProcessStep } from './types';

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
