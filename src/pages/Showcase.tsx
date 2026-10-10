import { useParams, Link } from 'react-router-dom';
import { showcases, projects } from '../content';
import { CaptionStrip, Section, Tag } from '../components/ui';
import { PageHeader, CTASection } from '../components/sections';
import { Seo } from '../components/Seo';
import { ArrowLeft } from 'lucide-react';

export default function Showcase() {
  const { slug } = useParams();
  const showcase = showcases.find(s => s.slug === slug);
  const project = showcase ? projects.find(p => p.slug === showcase.projectSlug) : null;

  if (!showcase) {
    return (
      <div className="p-8 text-center">
        <h1 className="text-2xl font-bold">Showcase not found</h1>
        <Link to="/work" className="mt-4 inline-block text-[var(--color-accent)] font-mono text-sm">← Back to work</Link>
      </div>
    );
  }

  return (
    <>
      <Seo title={`${showcase.title} — NOCTURN Showcase`} description={`Behind the scenes of ${project?.title || 'this project'}`} />
      
      <section className="p-4 lg:p-8 pt-12 lg:pt-20">
        <Link to={`/work/${showcase.projectSlug}`} className="inline-flex items-center gap-2 font-mono text-[11px] tracking-wider text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors mb-8">
          <ArrowLeft size={12} /> BACK TO PROJECT
        </Link>
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
          Behind the <span className="italic font-serif text-[var(--color-accent)]">scenes.</span>
        </h1>
        <p className="mt-4 text-base text-[var(--color-text-muted)] max-w-lg">{showcase.title}</p>
      </section>

      <CaptionStrip index="01" label="PROCESS" />
      <Section className="p-4 lg:p-8">
        <div className="space-y-8">
          {showcase.steps.map((step, i) => (
            <div key={i} className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 border-t border-[var(--color-line)] pt-8 first:border-t-0 first:pt-0">
              <div className="lg:col-span-2">
                <div className="font-mono text-[10px] text-[var(--color-accent)] tracking-wider">STEP {String(i + 1).padStart(2, '0')}</div>
              </div>
              <div className="lg:col-span-6">
                <h3 className="text-xl font-bold tracking-tight mb-2">{step.title}</h3>
                <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{step.description}</p>
              </div>
              <div className="lg:col-span-4">
                <div className="aspect-video relative overflow-hidden border border-[var(--color-line)]" style={{ backgroundColor: showcase.color }}>
                  <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <CaptionStrip index="02" label="TOOLS USED" />
      <Section className="p-4 lg:p-8">
        <div className="flex flex-wrap gap-2">
          {showcase.tools.map((tool) => <Tag key={tool} accent>{tool}</Tag>)}
        </div>
      </Section>

      {showcase.prompts && showcase.prompts.length > 0 && (
        <>
          <CaptionStrip index="03" label="AI PROMPTS" />
          <Section className="p-4 lg:p-8">
            <div className="max-w-[720px] space-y-4">
              {showcase.prompts.map((prompt, i) => (
                <div key={i} className="border border-[var(--color-line)] p-4">
                  <div className="font-mono text-[10px] text-[var(--color-text-dim)] mb-2">PROMPT {String(i + 1).padStart(2, '0')}</div>
                  <p className="text-sm text-[var(--color-text-muted)] italic">"{prompt}"</p>
                </div>
              ))}
            </div>
          </Section>
        </>
      )}

      <CTASection title="Interested in" accentWord="this approach?" primaryLabel="START A PROJECT" primaryHref="/contact" />
    </>
  );
}
