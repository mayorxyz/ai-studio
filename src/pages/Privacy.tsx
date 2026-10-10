import { privacyPolicy } from '../content';
import { CaptionStrip, Section } from '../components/ui';
import { Seo } from '../components/Seo';

export default function Privacy() {
  return (
    <>
      <Seo title={privacyPolicy.title + ' — NOCTURN Studio'} description="How NOCTURN Studio handles your personal data." />
      
      <section className="p-4 lg:p-8 pt-12 lg:pt-20">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">{privacyPolicy.title}</h1>
        <div className="font-mono text-[10px] text-[var(--color-text-dim)] mt-2">Last updated: {privacyPolicy.lastUpdated}</div>
      </section>

      <CaptionStrip index="01" label="POLICY" />
      <Section className="p-4 lg:p-8">
        <div className="max-w-[720px] space-y-8">
          {privacyPolicy.sections.map((section, i) => (
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
