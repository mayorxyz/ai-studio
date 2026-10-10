import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { team } from '../data';
import { CaptionStrip, Section } from '../components/Shared';

const manifestoText = "We believe the future of visual storytelling lives at the intersection of human creativity and machine intelligence. We don't replace artists — we amplify them. Every frame we produce is a collaboration between craft and code.";

const values = [
  { letter: 'A', title: 'Craft Over Speed', desc: 'We use AI to accelerate production, never to replace creative thinking. Every output is human-directed and human-curated.' },
  { letter: 'B', title: 'Transparency Always', desc: 'Open process, open pricing, open communication. You see everything we see, from storyboard to final render.' },
  { letter: 'C', title: 'Push The Edge', desc: 'We invest 20% of our time in R&D. The tools we build today become the services we offer tomorrow.' },
];

const press = [
  { outlet: "It's Nice That", year: '2025', type: 'Feature' },
  { outlet: 'Motionographer', year: '2024', type: 'Interview' },
  { outlet: 'AI Film Festival', year: '2024', type: 'Official Selection' },
  { outlet: 'Vimeo Staff Picks', year: '2024', type: '3x Selected' },
  { outlet: 'ADC Awards', year: '2024', type: 'Bronze Cube' },
];

export default function Studio() {
  const manifestoRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: manifestoRef,
    offset: ['start end', 'end start'],
  });
  const words = manifestoText.split(' ');

  return (
    <div>
      {/* Manifesto Hero */}
      <section ref={manifestoRef} className="min-h-[80vh] flex items-center justify-center p-4 lg:p-8 py-20">
        <div className="max-w-4xl text-center">
          <div className="font-mono text-[10px] tracking-wider text-[var(--color-accent)] mb-8">MANIFESTO</div>
          <p className="text-xl md:text-3xl lg:text-4xl font-light leading-relaxed tracking-tight">
            {words.map((word, i) => {
              const start = i / words.length;
              const end = start + 1 / words.length;
              return (
                <Word key={i} word={word} range={[start, end]} progress={scrollYProgress} />
              );
            })}
          </p>
        </div>
      </section>

      <CaptionStrip index="01" label="THE TEAM" right={`${team.length} PEOPLE`} />

      {/* Team */}
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
              {/* Portrait placeholder */}
              <div className="aspect-[4/5] relative overflow-hidden bg-[var(--color-surface)]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full border border-[var(--color-line-strong)] flex items-center justify-center">
                    <span className="font-mono text-lg text-[var(--color-text-dim)]">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                </div>
                <div className="absolute bottom-0 inset-x-0 h-1/3 bg-gradient-to-t from-[var(--color-surface)] to-transparent" />
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

      {/* Values */}
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

      {/* Press */}
      <CaptionStrip index="03" label="PRESS & AWARDS" />
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

      {/* Studio gallery strip */}
      <CaptionStrip index="04" label="INSIDE THE STUDIO" />
      <Section className="p-4 lg:p-8">
        <div className="flex gap-2 overflow-x-auto pb-4">
          {['Studio Space', 'Edit Bay', 'Render Farm', 'Sound Booth', 'Color Suite'].map((label, i) => (
            <div
              key={label}
              className="flex-shrink-0 w-[280px] md:w-[350px] aspect-video relative overflow-hidden border border-[var(--color-line)]"
              style={{ backgroundColor: `hsl(${200 + i * 25}, 20%, 10%)` }}
            >
              <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
                backgroundSize: '25px 25px',
              }} />
              <div className="absolute bottom-3 left-3 font-mono text-[10px] text-[var(--color-text-dim)] tracking-wider">{label}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section className="p-4 lg:p-8 border-t border-[var(--color-line)]">
        <div className="text-center py-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Want to <span className="italic font-serif text-[var(--color-accent)]">join us?</span>
          </h2>
          <p className="mt-4 text-sm text-[var(--color-text-muted)] max-w-md mx-auto">
            We're always looking for talented people. Drop us a line.
          </p>
          <div className="mt-8">
            <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-black font-mono text-[11px] tracking-wider px-6 py-3 hover:bg-[var(--color-accent)] transition-colors">
              GET IN TOUCH
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
}

function Word({ word, range, progress }: { word: string; range: [number, number]; progress: any }) {
  const opacity = useTransform(progress, range, [0.2, 1]);
  return (
    <motion.span style={{ opacity }} className="inline-block mr-[0.3em]">
      {word}
    </motion.span>
  );
}
