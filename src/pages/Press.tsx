import { motion } from 'framer-motion';
import { pressItems, studio } from '../content';
import { CaptionStrip, Section, Tag } from '../components/ui';
import { PageHeader, CTASection } from '../components/sections';
import { Seo } from '../components/Seo';
import { routes } from '../config/routes';
import { ExternalLink, Download } from 'lucide-react';

export default function Press() {
  const seo = routes.find(r => r.path === '/press')!.seo;

  return (
    <>
      <Seo title={seo.title} description={seo.description} />
      <PageHeader
        title="In the"
        accentWord="press."
        description="Media coverage, awards, and mentions."
        caption={{ index: '01', label: 'PRESS', right: `${pressItems.length} MENTIONS` }}
      />
      <Section className="p-4 lg:p-8">
        <div className="space-y-4">
          {pressItems.map((item, i) => (
            <motion.div key={item.slug} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: i * 0.05 }}>
              <div className="border border-[var(--color-line)] p-6 hover:border-[var(--color-accent)]/50 transition-colors">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Tag accent>{item.type.toUpperCase()}</Tag>
                      <span className="font-mono text-[10px] text-[var(--color-text-dim)]">{item.date}</span>
                    </div>
                    <h3 className="text-lg font-semibold tracking-tight mb-1">{item.title}</h3>
                    <p className="text-sm text-[var(--color-text-muted)]">{item.outlet}</p>
                  </div>
                  {item.url && (
                    <a href={item.url} target="_blank" rel="noopener" className="flex-shrink-0 w-10 h-10 border border-[var(--color-line)] flex items-center justify-center hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors">
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      <CaptionStrip index="02" label="PRESS KIT" />
      <Section className="p-4 lg:p-8">
        <div className="border border-[var(--color-line)] p-8 text-center">
          <h3 className="text-xl font-bold tracking-tight mb-4">Download Press Kit</h3>
          <p className="text-sm text-[var(--color-text-muted)] mb-6">High-res logos, team photos, and brand guidelines.</p>
          <a href="/press-kit.zip" className="inline-flex items-center gap-2 bg-white text-black font-mono text-[11px] tracking-wider px-6 py-3 hover:bg-[var(--color-accent)] transition-colors">
            <Download size={12} /> DOWNLOAD PRESS KIT
          </a>
        </div>
      </Section>

      <CTASection title="Media" accentWord="inquiries?" description={`Contact us at ${studio.email}`} primaryLabel="EMAIL US" primaryHref={`mailto:${studio.email}`} />
    </>
  );
}
