import { termsOfService } from '../content';
import { CaptionStrip, Section } from '../components/ui';
import { Seo } from '../components/Seo';

export default function Terms() {
  return (
    <>
      <Seo title={termsOfService.title + ' — NOCTURN Studio'} description="Terms and conditions for NOCTURN Studio services." />
      
      <section className="p-4 lg:p-8 pt-12 lg:pt-20">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">{termsOfService.title}</h1>
        <div className="font-mono text-[10px] text-[var(--color-text-dim)] mt-2">Last updated: {termsOfService.lastUpdated}</div>
      </section>

      <CaptionStrip index="01" label="TERMS" />
      <Section className="p-4 lg:p-8">
        <div className="max-w-[720px] space-y-8">
          {termsOfService.sections.map((section, i) => (
            <div key={i}>
              <h2 className="text-lg font-semibold tracking-tight mb-3">{section.heading}</h2>
              <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{section.content}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
