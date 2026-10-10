import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { careers } from '../content';
import { CaptionStrip, Section, Tag } from '../components/ui';
import { PageHeader, CTASection } from '../components/sections';
import { Seo } from '../components/Seo';
import { routes } from '../config/routes';

export default function Careers() {
  const seo = routes.find(r => r.path === '/careers')!.seo;

  return (
    <>
      <Seo title={seo.title} description={seo.description} />
      <PageHeader
        title="Join"
        accentWord="us."
        description="We're building the future of visual storytelling. Looking for talented people who care about craft and innovation."
        caption={{ index: '01', label: 'CAREERS', right: `${careers.length} OPEN ROLES` }}
      />
      
      <Section className="p-4 lg:p-8">
        <div className="space-y-4">
          {careers.map((role, i) => (
            <motion.div
              key={role.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <Link to={`/careers/${role.slug}`} className="block border border-[var(--color-line)] p-6 hover:border-[var(--color-accent)]/50 transition-colors group">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold tracking-tight group-hover:text-[var(--color-accent)] transition-colors">{role.title}</h3>
                    <div className="flex flex-wrap items-center gap-3 mt-2">
                      <span className="font-mono text-[11px] text-[var(--color-text-muted)]">{role.department}</span>
                      <span className="text-[var(--color-text-dim)]">·</span>
                      <span className="font-mono text-[11px] text-[var(--color-text-muted)]">{role.location}</span>
                      <span className="text-[var(--color-text-dim)]">·</span>
                      <span className="font-mono text-[11px] text-[var(--color-text-muted)]">{role.type}</span>
                    </div>
                    <p className="text-sm text-[var(--color-text-muted)] mt-3 line-clamp-2">{role.description}</p>
                  </div>
                  <div className="font-mono text-[11px] text-[var(--color-text-dim)] group-hover:text-[var(--color-accent)] transition-colors">
                    VIEW →
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Section>

      <CTASection
        title="Don't see your"
        accentWord="role?"
        description="We're always interested in meeting talented people. Send us your portfolio."
        primaryLabel="SEND YOUR PORTFOLIO"
        primaryHref="/contact"
      />
    </>
  );
}
