import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { services } from '../content';
import { CaptionStrip, Section, Tag, Ticker } from '../components/ui';
import { PageHeader, CTASection } from '../components/sections';
import { Seo } from '../components/Seo';
import { routes } from '../config/routes';
import { ArrowRight } from 'lucide-react';

export default function Services() {
  const seo = routes.find(r => r.path === '/services')!.seo;

  return (
    <>
      <Seo title={seo.title} description={seo.description} />
      <PageHeader
        title="What we"
        accentWord="make."
        description="From AI-generated content to hand-crafted animation. Every service is built around your story, your timeline, and your audience."
        caption={{ index: '01', label: 'SERVICES', right: `${services.length} CAPABILITIES` }}
      />
      <Section className="p-4 lg:p-8">
        <div className="space-y-px bg-[var(--color-line)]">
          {services.map((service, i) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className={`grid grid-cols-1 lg:grid-cols-2 bg-[var(--color-bg)] ${i % 2 === 1 ? 'lg:[direction:rtl]' : ''}`}
            >
              <div className={`p-6 lg:p-10 ${i % 2 === 1 ? 'lg:[direction:ltr]' : ''}`}>
                <div className="font-mono text-[10px] text-[var(--color-accent)] tracking-wider mb-4">{service.number}</div>
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">{service.title}</h3>
                <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-6">{service.summary}</p>
                <ul className="space-y-2 mb-6">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-center gap-3 text-sm text-[var(--color-text-muted)]">
                      <span className="w-1 h-1 bg-[var(--color-accent)] rounded-full flex-shrink-0" />
                      {bullet}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
                  <div className="font-mono text-[11px] text-[var(--color-text-dim)]">
                    FROM <span className="text-[var(--color-text)]">{service.priceFrom}</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {service.tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}
                  </div>
                </div>
              </div>
              <div className={`relative min-h-[200px] lg:min-h-[300px] ${i % 2 === 1 ? 'lg:[direction:ltr]' : ''}`} style={{ backgroundColor: service.color }}>
                <div className="absolute inset-0 opacity-20" style={{
                  backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
                  backgroundSize: '30px 30px',
                }} />
                <div className="absolute bottom-3 left-3 font-mono text-[9px] text-[var(--color-text-dim)] tracking-wider">
                  {service.number} — {service.title.toUpperCase()}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      <CaptionStrip index="02" label="TOOL STACK" />
      <Ticker items={['BLENDER', 'HOUDINI', 'AFTER EFFECTS', 'DAVINCI RESOLVE', 'COMFYUI', 'RUNWAY', 'MIDJOURNEY', 'ELEVENLABS', 'CINEMA 4D', 'PREMIERE PRO']} />

      <CTASection
        title="Need something"
        accentWord="specific?"
        description="Every project is different. Let's talk about what you need and how we can help."
        primaryLabel="START A PROJECT"
        primaryHref="/contact"
        secondaryLabel="VIEW PRICING"
        secondaryHref="/pricing"
      />
    </>
  );
}
