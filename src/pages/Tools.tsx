import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { tools } from '../content';
import { CaptionStrip, Section, Tag } from '../components/ui';
import { PageHeader, CTASection } from '../components/sections';
import { Seo } from '../components/Seo';
import { routes } from '../config/routes';

export default function Tools() {
  const [activeFilter, setActiveFilter] = useState('ALL');
  const seo = routes.find(r => r.path === '/tools')!.seo;
  const categories = ['ALL', ...Array.from(new Set(tools.map(t => t.category)))];

  const filtered = useMemo(() => {
    if (activeFilter === 'ALL') return tools;
    return tools.filter(t => t.category === activeFilter);
  }, [activeFilter]);

  return (
    <>
      <Seo title={seo.title} description={seo.description} />
      <PageHeader
        title="Our"
        accentWord="tools."
        description="The AI and creative tools we use to bring ideas to life."
        caption={{ index: '01', label: 'TOOLS', right: `${tools.length} TOOLS` }}
      />
      <Section className="p-4 lg:p-8">
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button key={cat} onClick={() => setActiveFilter(cat)} className={`px-3 py-1.5 font-mono text-[11px] tracking-wider border transition-all ${activeFilter === cat ? 'border-[var(--color-accent)] text-[var(--color-accent)] bg-[var(--color-accent)]/5' : 'border-[var(--color-line)] text-[var(--color-text-muted)] hover:border-[var(--color-line-strong)]'}`}>
              {cat}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((tool, i) => (
            <motion.div key={tool.slug} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: i * 0.05 }}>
              <div className="border border-[var(--color-line)] p-6 hover:border-[var(--color-accent)]/50 transition-colors h-full">
                <div className="aspect-square relative overflow-hidden mb-4" style={{ backgroundColor: tool.color }}>
                  <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-4xl font-bold text-white/20">{tool.name.charAt(0)}</span>
                  </div>
                </div>
                <Tag accent>{tool.category}</Tag>
                <h3 className="text-lg font-semibold tracking-tight mt-3 mb-2">{tool.name}</h3>
                <p className="text-xs text-[var(--color-text-muted)] mb-2">{tool.useCase}</p>
                <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{tool.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>
      <CTASection title="Want to" accentWord="learn more?" primaryLabel="GET IN TOUCH" primaryHref="/contact" />
    </>
  );
}
