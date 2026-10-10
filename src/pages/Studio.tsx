import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { team } from '../content';
import { CaptionStrip, Section } from '../components/ui';
import { PageHeader, ManifestoText, CTASection } from '../components/sections';
import { Seo } from '../components/Seo';
import { routes } from '../config/routes';

const manifestoText = "We believe game development should be accessible, performant, and transparent. We build engines that give developers control, not constraints. Every line of code we ship is open, documented, and built for the next generation of games.";

const values = [
  { letter: 'A', title: 'Open Source', desc: 'Full source access with every license. Modify, extend, and understand every part of the engine.' },
  { letter: 'B', title: 'Performance First', desc: 'Every feature is benchmarked and optimized. We ship engines that run at 120fps, not 30.' },
  { letter: 'C', title: 'Developer Experience', desc: 'Clean APIs, great docs, and tools that stay out of your way. Build more, fight less.' },
];

const timeline = [
  { year: '2025', event: 'v1.0 release — full engine with all modules' },
  { year: '2024', event: 'Public beta, 10K+ developers on Discord' },
  { year: '2023', event: 'Open-sourced rendering pipeline under MIT' },
  { year: '2022', event: 'Founded by Alex Chen and Maya Torres' },
];

const press = [
  { outlet: "It's Nice That", year: '2025', type: 'Feature' },
  { outlet: 'Motionographer', year: '2024', type: 'Interview' },
  { outlet: 'AI Film Festival', year: '2024', type: 'Official Selection' },
  { outlet: 'Vimeo Staff Picks', year: '2024', type: '3x Selected' },
  { outlet: 'ADC Awards', year: '2024', type: 'Bronze Cube' },
];

export default function Studio() {
  const seo = routes.find(r => r.path === '/studio')!.seo;

  return (
    <>
      <Seo title={seo.title} description={seo.description} />
      <section className="min-h-[80vh] flex items-center justify-center p-4 lg:p-8 py-20">
        <ManifestoText text={manifestoText} />
      </section>

      <CaptionStrip index="01" label="THE TEAM" right={`${team.length} PEOPLE`} />
      <Section className="p-4 lg:p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="border border-[var(--color-line)] group hover:border-[var(--color-line-strong)] transition-colors"
            >
              <div className="aspect-[4/5] relative overflow-hidden bg-[var(--color-surface)]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full border border-[var(--color-line-strong)] flex items-center justify-center">
                    <span className="font-mono text-lg text-[var(--color-text-dim)]">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-4 border-t border-[var(--color-line)]">
                <h3 className="text-sm font-medium">{member.name}</h3>
                <div className="font-mono text-[10px] tracking-wider text-[var(--color-accent)] mt-1">{member.role}</div>
                <p className="text-xs text-[var(--color-text-muted)] mt-2">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      <CaptionStrip index="02" label="VALUES" />
      <Section className="p-4 lg:p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {values.map((value, i) => (
            <motion.div
              key={value.letter}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="border border-[var(--color-line)] p-6 hover:border-[var(--color-accent)]/30 transition-colors"
            >
              <div className="text-4xl font-bold text-[var(--color-accent)]/20 mb-4">{value.letter}</div>
              <h3 className="text-lg font-semibold tracking-tight mb-3">{value.title}</h3>
              <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      <CaptionStrip index="03" label="TIMELINE" />
      <Section className="p-4 lg:p-8">
        <div className="border border-[var(--color-line)]">
          {timeline.map((item, i) => (
            <div key={i} className="grid grid-cols-4 gap-4 px-4 py-3 border-b border-[var(--color-line)] last:border-b-0">
              <div className="font-mono text-sm text-[var(--color-accent)]">{item.year}</div>
              <div className="col-span-3 text-sm text-[var(--color-text-muted)]">{item.event}</div>
            </div>
          ))}
        </div>
      </Section>

      <CaptionStrip index="04" label="PRESS & AWARDS" />
      <Section className="p-4 lg:p-8">
        <div className="border border-[var(--color-line)]">
          {press.map((item, i) => (
            <div key={i} className="grid grid-cols-3 gap-4 px-4 py-3 border-b border-[var(--color-line)] last:border-b-0 hover:bg-[var(--color-surface)] transition-colors">
              <div className="text-sm font-medium">{item.outlet}</div>
              <div className="font-mono text-[11px] text-[var(--color-text-muted)]">{item.type}</div>
              <div className="font-mono text-[11px] text-[var(--color-text-dim)] text-right">{item.year}</div>
            </div>
          ))}
        </div>
      </Section>

      <CTASection
        title="Want to"
        accentWord="join us?"
        description="We're always looking for talented people. Drop us a line."
        primaryLabel="GET IN TOUCH"
        primaryHref="/contact"
      />
    </>
  );
}
