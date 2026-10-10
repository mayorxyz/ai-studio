import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { resources } from '../content';
import { CaptionStrip, Section, Tag } from '../components/ui';
import { PageHeader } from '../components/sections';
import { Seo } from '../components/Seo';
import { routes } from '../config/routes';
import { Download } from 'lucide-react';

export default function Resources() {
  const [activeFilter, setActiveFilter] = useState('ALL');
  const seo = routes.find(r => r.path === '/resources')!.seo;
  const tags = ['ALL', ...Array.from(new Set(resources.flatMap(r => r.tags)))];

  const filtered = useMemo(() => {
    if (activeFilter === 'ALL') return resources;
    return resources.filter(r => r.tags.includes(activeFilter));
  }, [activeFilter]);

  return (
    <>
      <Seo title={seo.title} description={seo.description} />
      <PageHeader
        title="Free"
        accentWord="resources."
        description="Download templates, guides, and assets to level up your workflow."
        caption={{ index: '01', label: 'RESOURCES', right: `${resources.length} DOWNLOADS` }}
      />
      <Section className="p-4 lg:p-8">
        <div className="flex flex-wrap gap-2 mb-8">
          {tags.map((tag) => (
            <button key={tag} onClick={() => setActiveFilter(tag)} className={`px-3 py-1.5 font-mono text-[11px] tracking-wider border transition-all ${activeFilter === tag ? 'border-[var(--color-accent)] text-[var(--color-accent)] bg-[var(--color-accent)]/5' : 'border-[var(--color-line)] text-[var(--color-text-muted)] hover:border-[var(--color-line-strong)]'}`}>
              {tag}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filtered.map((resource, i) => (
            <motion.div key={resource.slug} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: i * 0.05 }}>
              <div className="border border-[var(--color-line)] p-6 hover:border-[var(--color-accent)]/50 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 flex-shrink-0 relative overflow-hidden" style={{ backgroundColor: resource.color }}>
                    <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '10px 10px' }} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Tag accent>{resource.type}</Tag>
                    </div>
                    <h3 className="text-lg font-semibold tracking-tight mb-2">{resource.title}</h3>
                    <p className="text-sm text-[var(--color-text-muted)] mb-3">{resource.description}</p>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {resource.tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}
                    </div>
                    <a href={resource.fileUrl} className="inline-flex items-center gap-2 font-mono text-[11px] tracking-wider text-[var(--color-accent)] hover:underline">
                      <Download size={12} /> DOWNLOAD
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>
    </>
  );
}
