import { motion } from 'framer-motion';
import { partners } from '../content';
import { CaptionStrip, Section, Tag } from '../components/ui';
import { PageHeader, CTASection } from '../components/sections';
import { Seo } from '../components/Seo';
import { routes } from '../config/routes';
import { Check } from 'lucide-react';

const tierBenefits = {
  bronze: ['Referral commission', 'Partner badge', 'Newsletter mention'],
  silver: ['Priority scheduling', 'Co-marketing', 'Case study features', '10% discount'],
  gold: ['Dedicated support', 'White-label options', 'Strategic planning', '20% discount', 'Exclusive access'],
};

export default function Partners() {
  const seo = routes.find(r => r.path === '/partners')!.seo;

  return (
    <>
      <Seo title={seo.title} description={seo.description} />
      <PageHeader
        title="Partner"
        accentWord="with us."
        description="Collaborate with NOCTURN and grow together."
        caption={{ index: '01', label: 'PARTNERS' }}
      />
      <Section className="p-4 lg:p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {partners.map((partner, i) => (
            <motion.div key={partner.slug} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: i * 0.1 }}>
              <div className={`border p-8 h-full flex flex-col ${partner.tier === 'gold' ? 'border-[var(--color-accent)]' : 'border-[var(--color-line)]'} hover:border-[var(--color-accent)]/50 transition-colors`}>
                {partner.tier === 'gold' && (
                  <div className="absolute top-0 right-0 px-2 py-1 bg-[var(--color-accent)] text-black font-mono text-[9px] tracking-wider">BEST VALUE</div>
                )}
                <div className="aspect-video relative overflow-hidden mb-6" style={{ backgroundColor: partner.color }}>
                  <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '25px 25px' }} />
                </div>
                <Tag accent>{partner.tier.toUpperCase()} TIER</Tag>
                <h3 className="text-2xl font-bold tracking-tight mt-3 mb-3">{partner.name}</h3>
                <p className="text-sm text-[var(--color-text-muted)] mb-6 flex-1">{partner.description}</p>
                <div className="space-y-2">
                  {tierBenefits[partner.tier].map((benefit, j) => (
                    <div key={j} className="flex items-start gap-2 text-sm text-[var(--color-text-muted)]">
                      <Check size={14} className="text-[var(--color-accent)] flex-shrink-0 mt-0.5" />
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>
      <CTASection title="Ready to" accentWord="partner?" primaryLabel="APPLY NOW" primaryHref="/contact" />
    </>
  );
}
