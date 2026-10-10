import { motion } from 'framer-motion';
import { workshops } from '../content';
import { CaptionStrip, Section, Tag } from '../components/ui';
import { PageHeader, CTASection } from '../components/sections';
import { Seo } from '../components/Seo';
import { routes } from '../config/routes';
import { Check, Clock, Euro } from 'lucide-react';

export default function Workshops() {
  const seo = routes.find(r => r.path === '/workshops')!.seo;

  return (
    <>
      <Seo title={seo.title} description={seo.description} />
      <PageHeader
        title="Learn"
        accentWord="with us."
        description="Paid training workshops on AI video production and automation."
        caption={{ index: '01', label: 'WORKSHOPS', right: `${workshops.length} COURSES` }}
      />
      <Section className="p-4 lg:p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {workshops.map((workshop, i) => (
            <motion.div key={workshop.slug} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: i * 0.1 }}>
              <div className="border border-[var(--color-line)] p-8 hover:border-[var(--color-accent)]/50 transition-colors h-full flex flex-col">
                <div className="aspect-video relative overflow-hidden mb-6" style={{ backgroundColor: workshop.color }}>
                  <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
                </div>
                <h3 className="text-2xl font-bold tracking-tight mb-3">{workshop.title}</h3>
                <p className="text-sm text-[var(--color-text-muted)] mb-6">{workshop.description}</p>
                <div className="flex items-center gap-4 mb-6 text-sm">
                  <span className="flex items-center gap-2 text-[var(--color-text-muted)]"><Clock size={14} /> {workshop.duration}</span>
                  <span className="flex items-center gap-2 text-[var(--color-accent)] font-semibold"><Euro size={14} /> {workshop.price}</span>
                </div>
                <div className="mb-6">
                  <div className="font-mono text-[10px] tracking-wider text-[var(--color-text-dim)] mb-3">CURRICULUM</div>
                  <ul className="space-y-2">
                    {workshop.curriculum.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-[var(--color-text-muted)]">
                        <Check size={14} className="text-[var(--color-accent)] flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <a href="/contact" className="mt-auto block text-center py-3 bg-white text-black font-mono text-[11px] tracking-wider hover:bg-[var(--color-accent)] transition-colors">
                  ENROLL NOW
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>
      <CTASection title="Custom" accentWord="training?" description="We offer bespoke workshops for teams." primaryLabel="GET IN TOUCH" primaryHref="/contact" />
    </>
  );
}
