import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { services } from '../data';
import { CaptionStrip, Section, Tag, Ticker } from '../components/Shared';
import { ArrowRight } from 'lucide-react';

export default function Services() {
  return (
    <div>
      {/* Hero */}
      <section className="p-4 lg:p-8 pt-12 lg:pt-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            What we <span className="italic font-serif text-[var(--color-accent)]">make.</span>
          </h1>
          <p className="mt-4 text-base text-[var(--color-text-muted)] max-w-lg">
            From AI-generated content to hand-crafted animation. Every service is built around your story, your timeline, and your audience.
          </p>
        </div>
      </section>

      <CaptionStrip index="01" label="SERVICES" right={`${services.length} CAPABILITIES`} />

      {/* Service blocks */}
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
              {/* Text side */}
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
                    {service.tags.map((tag) => (
                      <Tag key={tag}>{tag}</Tag>
                    ))}
                  </div>
                </div>
              </div>
              {/* Media side */}
              <div className={`relative min-h-[200px] lg:min-h-[300px] ${i % 2 === 1 ? 'lg:[direction:ltr]' : ''}`} style={{ backgroundColor: service.color }}>
                <div className="absolute inset-0 opacity-20" style={{
                  backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
                  backgroundSize: '30px 30px',
                }} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 border border-white/20 flex items-center justify-center">
                    <div className="w-0 h-0 border-l-[8px] border-l-white/50 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-3 left-3 font-mono text-[9px] text-[var(--color-text-dim)] tracking-wider">
                  {service.number} — {service.title.toUpperCase()}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Tool stack ticker */}
      <CaptionStrip index="02" label="TOOL STACK" />
      <Ticker items={['BLENDER', 'HOUDINI', 'AFTER EFFECTS', 'DAVINCI RESOLVE', 'COMFYUI', 'RUNWAY', 'MIDJOURNEY', 'ELEVENLABS', 'CINEMA 4D', 'PREMIERE PRO']} />

      {/* CTA */}
      <Section className="p-4 lg:p-8 border-t border-[var(--color-line)]">
        <div className="text-center py-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Need something <span className="italic font-serif text-[var(--color-accent)]">specific?</span>
          </h2>
          <p className="mt-4 text-sm text-[var(--color-text-muted)] max-w-md mx-auto">
            Every project is different. Let's talk about what you need and how we can help.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-black font-mono text-[11px] tracking-wider px-6 py-3 hover:bg-[var(--color-accent)] transition-colors">
              START A PROJECT
            </Link>
            <Link to="/pricing" className="inline-flex items-center gap-2 border border-[var(--color-line-strong)] text-white font-mono text-[11px] tracking-wider px-6 py-3 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors">
              VIEW PRICING <ArrowRight size={12} />
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
}
