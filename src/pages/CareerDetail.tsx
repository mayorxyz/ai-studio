import { useParams, Link } from 'react-router-dom';
import { careers } from '../content';
import { CaptionStrip, Section, Tag } from '../components/ui';
import { CTASection } from '../components/sections';
import { Seo } from '../components/Seo';
import { ArrowLeft, Check } from 'lucide-react';

export default function CareerDetail() {
  const { slug } = useParams();
  const role = careers.find(c => c.slug === slug);

  if (!role) {
    return (
      <div className="p-8 text-center">
        <h1 className="text-2xl font-bold">Role not found</h1>
        <Link to="/careers" className="mt-4 inline-block text-[var(--color-accent)] font-mono text-sm">← Back to careers</Link>
      </div>
    );
  }

  return (
    <>
      <Seo title={`${role.title} — NOCTURN Careers`} description={role.description} />
      
      <section className="p-4 lg:p-8 pt-12 lg:pt-20">
        <Link to="/careers" className="inline-flex items-center gap-2 font-mono text-[11px] tracking-wider text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors mb-8">
          <ArrowLeft size={12} /> ALL ROLES
        </Link>
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight">{role.title}</h1>
        <div className="flex flex-wrap items-center gap-3 mt-4">
          <Tag accent>{role.department}</Tag>
          <span className="font-mono text-[11px] text-[var(--color-text-muted)]">{role.location}</span>
          <span className="text-[var(--color-text-dim)]">·</span>
          <span className="font-mono text-[11px] text-[var(--color-text-muted)]">{role.type}</span>
        </div>
      </section>

      <CaptionStrip index="01" label="ABOUT THE ROLE" />
      <Section className="p-4 lg:p-8">
        <div className="max-w-[720px]">
          <p className="text-base text-[var(--color-text-muted)] leading-relaxed">{role.description}</p>
        </div>
      </Section>

      <CaptionStrip index="02" label="REQUIREMENTS" />
      <Section className="p-4 lg:p-8">
        <div className="max-w-[720px]">
          <ul className="space-y-3">
            {role.requirements.map((req, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-[var(--color-text-muted)]">
                <span className="w-1 h-1 bg-[var(--color-accent)] rounded-full flex-shrink-0 mt-2" />
                {req}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <CaptionStrip index="03" label="BENEFITS" />
      <Section className="p-4 lg:p-8">
        <div className="max-w-[720px]">
          <ul className="space-y-3">
            {role.benefits.map((benefit, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-[var(--color-text-muted)]">
                <Check size={14} className="text-[var(--color-accent)] flex-shrink-0 mt-0.5" />
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <CTASection
        title="Interested in"
        accentWord="this role?"
        description="Send us your portfolio and tell us why you'd be a great fit."
        primaryLabel="APPLY NOW"
        primaryHref="/contact"
      />
    </>
  );
}
