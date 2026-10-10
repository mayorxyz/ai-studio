import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { processSteps, faqItems } from '../data';
import { CaptionStrip, Section, Accordion } from '../components/Shared';

const tools = [
  { name: 'Blender', role: '3D Animation & VFX' },
  { name: 'After Effects', role: 'Motion Design & Compositing' },
  { name: 'DaVinci Resolve', role: 'Color Grading & Edit' },
  { name: 'ComfyUI', role: 'AI Pipeline Orchestration' },
  { name: 'Runway', role: 'AI Video Generation' },
  { name: 'Midjourney', role: 'Concept Art & Textures' },
  { name: 'ElevenLabs', role: 'AI Voice & Narration' },
  { name: 'Cinema 4D', role: '3D Motion Graphics' },
];

export default function Process() {
  return (
    <div>
      {/* Hero */}
      <section className="p-4 lg:p-8 pt-12 lg:pt-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            How it <span className="italic font-serif text-[var(--color-accent)]">works.</span>
          </h1>
          <p className="mt-4 text-base text-[var(--color-text-muted)] max-w-lg">
            A transparent, structured process from first call to final delivery. No surprises, no black boxes.
          </p>
        </div>
      </section>

      <CaptionStrip index="01" label="WORKFLOW" right="5 STEPS" />

      {/* Timeline */}
      <Section className="p-4 lg:p-8">
        <div className="space-y-0">
          {processSteps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 border-t border-[var(--color-line)] py-8 first:border-t-0"
            >
              {/* Left: step number & duration */}
              <div className="lg:col-span-2 flex lg:flex-col gap-4">
                <div className="w-12 h-12 border border-[var(--color-accent)] flex items-center justify-center flex-shrink-0">
                  <span className="font-mono text-sm text-[var(--color-accent)]">{step.number}</span>
                </div>
                <div className="font-mono text-[10px] tracking-wider text-[var(--color-text-dim)] self-center">
                  {step.duration}
                </div>
              </div>

              {/* Middle: title, description, deliverables */}
              <div className="lg:col-span-6">
                <h3 className="text-xl font-bold tracking-tight mb-2">{step.title}</h3>
                <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-4">{step.description}</p>
                <div className="flex flex-wrap gap-2">
                  {step.deliverables.map((d) => (
                    <span key={d} className="px-2 py-1 border border-[var(--color-line)] font-mono text-[10px] tracking-wider text-[var(--color-text-muted)]">
                      {d}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right: visual */}
              <div className="lg:col-span-4">
                <div className="aspect-video relative overflow-hidden border border-[var(--color-line)]" style={{ backgroundColor: `hsl(${200 + i * 30}, 30%, 12%)` }}>
                  <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
                    backgroundSize: '20px 20px',
                  }} />
                  <div className="absolute bottom-2 left-2 font-mono text-[9px] text-[var(--color-text-dim)] tracking-wider">
                    STEP {step.number}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
          <div className="border-t border-[var(--color-line)]" />
        </div>
      </Section>

      {/* Tools */}
      <CaptionStrip index="02" label="TOOLS WE USE" />
      <Section className="p-4 lg:p-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[var(--color-line)]">
          {tools.map((tool) => (
            <div key={tool.name} className="bg-[var(--color-bg)] p-5 hover:bg-[var(--color-surface)] transition-colors">
              <div className="text-sm font-medium mb-1">{tool.name}</div>
              <div className="font-mono text-[10px] text-[var(--color-text-dim)] tracking-wider">{tool.role}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <CaptionStrip index="03" label="FAQ" />
      <Section className="p-4 lg:p-8">
        <div className="max-w-2xl">
          <Accordion items={faqItems} />
        </div>
      </Section>

      {/* CTA */}
      <Section className="p-4 lg:p-8 border-t border-[var(--color-line)]">
        <div className="text-center py-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Ready to <span className="italic font-serif text-[var(--color-accent)]">start?</span>
          </h2>
          <div className="mt-8">
            <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-black font-mono text-[11px] tracking-wider px-6 py-3 hover:bg-[var(--color-accent)] transition-colors">
              START A PROJECT
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
}
