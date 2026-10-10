import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { processSteps, faqItems } from '../content';
import { CaptionStrip, Section, Accordion } from '../components/ui';
import { PageHeader, CTASection } from '../components/sections';
import { Seo } from '../components/Seo';
import { routes } from '../config/routes';

const tools = [
  { name: 'Rendering Pipeline', role: 'PBR + Real-Time GI' },
  { name: 'Physics Engine', role: 'Deterministic Simulation' },
  { name: 'ECS Framework', role: 'Entity Component System' },
  { name: 'Scripting Runtime', role: 'Lua + TypeScript' },
  { name: 'Netcode Stack', role: 'Multiplayer Infrastructure' },
  { name: 'Audio Engine', role: 'Spatial Audio + Mixing' },
  { name: 'Animation System', role: 'Skeletal + State Machines' },
  { name: 'Asset Pipeline', role: 'Import + Processing' },
];

export default function Process() {
  const seo = routes.find(r => r.path === '/process')!.seo;

  return (
    <>
      <Seo title={seo.title} description={seo.description} />
      <PageHeader
        title="Install to"
        accentWord="ship."
        description="From download to deployment. Our workflow gets you from zero to shipped game fast."
        caption={{ index: '01', label: 'WORKFLOW', right: '5 STEPS' }}
      />
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
              <div className="lg:col-span-2 flex lg:flex-col gap-4">
                <div className="w-12 h-12 border border-[var(--color-accent)] flex items-center justify-center flex-shrink-0">
                  <span className="font-mono text-sm text-[var(--color-accent)]">{step.number}</span>
                </div>
                <div className="font-mono text-[10px] tracking-wider text-[var(--color-text-dim)] self-center">
                  {step.duration}
                </div>
              </div>
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
              <div className="lg:col-span-4">
                <div className="aspect-video relative overflow-hidden border border-[var(--color-line)]" style={{ backgroundColor: `hsl(${200 + i * 30}, 30%, 12%)` }}>
                  <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
                    backgroundSize: '20px 20px',
                  }} />
                </div>
              </div>
            </motion.div>
          ))}
          <div className="border-t border-[var(--color-line)]" />
        </div>
      </Section>

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

      <CaptionStrip index="03" label="FAQ" />
      <Section className="p-4 lg:p-8">
        <div className="max-w-2xl">
          <Accordion items={faqItems} />
        </div>
      </Section>

      <CTASection
        title="Ready to"
        accentWord="start?"
        primaryLabel="START A PROJECT"
        primaryHref="/contact"
      />
    </>
  );
}
