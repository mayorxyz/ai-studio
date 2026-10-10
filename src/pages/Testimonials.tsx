import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { testimonials, services } from '../content';
import { CaptionStrip, Section, Tag } from '../components/ui';
import { PageHeader } from '../components/sections';
import { Seo } from '../components/Seo';
import { routes } from '../config/routes';

export default function Testimonials() {
  const [filter, setFilter] = useState('ALL');
  const seo = routes.find(r => r.path === '/testimonials')!.seo;
  const serviceNames = ['ALL', ...services.map(s => s.title)];

  const filtered = useMemo(() => {
    if (filter === 'ALL') return testimonials;
    return testimonials.filter(t => t.company.toLowerCase().includes(filter.toLowerCase()));
  }, [filter]);

  return (
    <>
      <Seo title={seo.title} description={seo.description} />
      <PageHeader
        title="Client"
        accentWord="voices."
        description="What our clients say about working with us."
        caption={{ index: '01', label: 'TESTIMONIALS', right: `${testimonials.length} REVIEWS` }}
      />
      <Section className="p-4 lg:p-8">
        <div className="flex flex-wrap gap-2 mb-8">
          {serviceNames.map((name) => (
            <button key={name} onClick={() => setFilter(name)} className={`px-3 py-1.5 font-mono text-[11px] tracking-wider border transition-all ${filter === name ? 'border-[var(--color-accent)] text-[var(--color-accent)] bg-[var(--color-accent)]/5' : 'border-[var(--color-line)] text-[var(--color-text-muted)] hover:border-[var(--color-line-strong)]'}`}>
              {name}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((t, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: i * 0.05 }}>
              <div className="border border-[var(--color-line)] p-6 h-full">
                <p className="text-sm text-[var(--color-text-muted)] leading-relaxed italic mb-4">"{t.quote}"</p>
                <div>
                  <div className="text-sm font-medium">{t.name}</div>
                  <div className="font-mono text-[10px] text-[var(--color-text-dim)] mt-1">{t.role}, {t.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>
    </>
  );
}
