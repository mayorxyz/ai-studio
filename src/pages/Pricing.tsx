import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { plans, faqItems } from '../content';
import { CaptionStrip, Section, Accordion } from '../components/ui';
import { PageHeader, CTASection } from '../components/sections';
import { Seo } from '../components/Seo';
import { routes } from '../config/routes';
import { Check } from 'lucide-react';

export default function Pricing() {
  const [isRetainer, setIsRetainer] = useState(false);
  const seo = routes.find(r => r.path === '/pricing')!.seo;

  return (
    <>
      <Seo title={seo.title} description={seo.description} />
      <PageHeader
        title="Free"
        accentWord="forever."
        description="No royalties, no revenue cap. Pay only for cloud services and team features."
        caption={{ index: '01', label: 'LICENSING' }}
      />
      <Section className="p-4 lg:p-8">
        <div className="flex items-center justify-center mb-8">
          <div className="inline-flex border border-[var(--color-line)]">
            <button onClick={() => setIsRetainer(false)} className={`px-4 py-2 font-mono text-[11px] tracking-wider transition-all ${!isRetainer ? 'bg-white text-black' : 'text-[var(--color-text-muted)] hover:text-white'}`}>LICENSES</button>
            <button onClick={() => setIsRetainer(true)} className={`px-4 py-2 font-mono text-[11px] tracking-wider border-l border-[var(--color-line)] transition-all ${isRetainer ? 'bg-white text-black' : 'text-[var(--color-text-muted)] hover:text-white'}`}>CLOUD</button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--color-line)]">
          {plans.map((plan, i) => (
            <motion.div key={plan.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }} className={`bg-[var(--color-bg)] p-6 flex flex-col relative ${plan.highlighted ? 'ring-1 ring-[var(--color-accent)]' : ''}`}>
              {plan.badge && (
                <div className={`absolute top-0 right-0 px-2 py-1 font-mono text-[9px] tracking-wider ${plan.highlighted ? 'bg-[var(--color-accent)] text-black' : 'bg-[var(--color-line-strong)] text-[var(--color-text-muted)]'}`}>{plan.badge}</div>
              )}
              <div className="mb-6">
                <h3 className="text-lg font-bold tracking-tight">{plan.name}</h3>
                <p className="font-mono text-[10px] text-[var(--color-text-dim)] tracking-wider mt-1">{plan.tagline}</p>
              </div>
              <div className="mb-6">
                <div className="text-3xl font-bold tracking-tight">{isRetainer ? plan.priceRetainer : plan.priceProject}</div>
                <div className="font-mono text-[10px] text-[var(--color-text-dim)] mt-1">{plan.name === 'Custom' ? '' : isRetainer ? 'PER MONTH' : 'STARTING FROM'}</div>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-[var(--color-text-muted)]">
                    <Check size={14} className="text-[var(--color-accent)] flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link to="/contact" className={`block text-center py-3 font-mono text-[11px] tracking-wider transition-colors ${plan.highlighted ? 'bg-[var(--color-accent)] text-black hover:bg-white' : 'border border-[var(--color-line-strong)] text-[var(--color-text)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]'}`}>
                {plan.name === 'Custom' ? 'CONTACT US' : 'GET STARTED'}
              </Link>
            </motion.div>
          ))}
        </div>
      </Section>

      <CaptionStrip index="02" label="GUARANTEES" />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[var(--color-line)]">
        {['NO ROYALTIES', 'SOURCE CODE ACCESS', 'ALL PLATFORMS', 'COMMERCIAL USE'].map((item) => (
          <div key={item} className="bg-[var(--color-bg)] p-4 text-center">
            <span className="font-mono text-[10px] tracking-wider text-[var(--color-text-muted)]">{item}</span>
          </div>
        ))}
      </div>

      <CaptionStrip index="03" label="FAQ" />
      <Section className="p-4 lg:p-8">
        <div className="max-w-2xl">
          <Accordion items={faqItems} />
        </div>
      </Section>

      <CTASection title="Still have" accentWord="questions?" description="Every project is unique. Let's discuss your specific needs." primaryLabel="TALK TO US" primaryHref="/contact" />
    </>
  );
}
