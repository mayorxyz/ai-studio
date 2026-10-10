import type { FAQ } from './types';

export const faqItems: FAQ[] = [
  { q: 'Is Nocturn Engine really free?', a: 'Yes. The Indie license is free forever with no revenue cap and no royalties. You own what you build.', group: 'Licensing' },
  { q: 'What platforms does it support?', a: 'Windows, macOS, Linux, iOS, Android, PlayStation, Xbox, Nintendo Switch, and Web (WebAssembly).', group: 'Technical' },
  { q: 'Can I use it for commercial games?', a: 'Absolutely. All licenses allow commercial use. The Indie license has no revenue cap or royalties.', group: 'Licensing' },
  { q: 'How does it compare to Unity or Unreal?', a: 'Nocturn is lighter, faster, and gives you full source access. It\'s built for developers who want control and performance.', group: 'General' },
  { q: 'Is the source code available?', a: 'Yes. All licenses include source code access. You can modify the engine to fit your needs.', group: 'Technical' },
  { q: 'What programming languages are supported?', a: 'C++ for engine code, Lua or TypeScript for gameplay scripting. Visual scripting is also available.', group: 'Technical' },
  { q: 'Do you offer training?', a: 'Yes. We offer online courses, in-person workshops, and custom training for studios. See our Workshops page.', group: 'Support' },
  { q: 'How do I get support?', a: 'Indie users get community support via Discord and forums. Studio and Enterprise licenses include priority support with SLA.', group: 'Support' },
];
