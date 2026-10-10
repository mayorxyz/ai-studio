import { useParams, Link } from 'react-router-dom';
import { services, projects } from '../content';
import { CaptionStrip, Section, Tag } from '../components/ui';
import { CTASection } from '../components/sections';
import { Seo } from '../components/Seo';
import { ArrowLeft } from 'lucide-react';

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = services.find(s => s.slug === slug);

  if (!service) {
    return (
      <div className="p-8 text-center">
        <h1 className="text-2xl font-bold">Service not found</h1>
        <Link to="/services" className="mt-4 inline-block text-[var(--color-accent)] font-mono text-sm">← Back to services</Link>
      </div>
    );
  }

  const relatedProjects = service.relatedProjects
    ? projects.filter(p => service.relatedProjects!.includes(p.slug))
    : [];

  return (
    <>
      <Seo title={`${service.title} — NOCTURN Services`} description={service.summary} />
      
      <section className="p-4 lg:p-8 pt-12 lg:pt-20">
        <Link to="/services" className="inline-flex items-center gap-2 font-mono text-[11px] tracking-wider text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors mb-8">
          <ArrowLeft size={12} /> ALL SERVICES
        </Link>
        <div className="flex items-start gap-4">
          <div className="font-mono text-4xl text-[var(--color-accent)]/30">{service.number}</div>
          <div>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight">{service.title}</h1>
            <p className="mt-4 text-base text-[var(--color-text-muted)] max-w-lg">{service.summary}</p>
            <div className="mt-4 font-mono text-sm text-[var(--color-text-dim)]">FROM {service.priceFrom}</div>
          </div>
        </div>
      </section>

      <CaptionStrip index="01" label="DELIVERABLES" />
      <Section className="p-4 lg:p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {service.bullets.map((bullet, i) => (
            <div key={i} className="border border-[var(--color-line)] p-4 flex items-center gap-3">
              <span className="w-2 h-2 bg-[var(--color-accent)] rounded-full flex-shrink-0" />
              <span className="text-sm">{bullet}</span>
            </div>
          ))}
        </div>
      </Section>

      {service.process && (
        <>
          <CaptionStrip index="02" label="PROCESS" />
          <Section className="p-4 lg:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {service.process.map((step, i) => (
                <div key={i} className="border border-[var(--color-line)] p-4">
                  <div className="font-mono text-[10px] text-[var(--color-accent)] mb-2">STEP {step.step}</div>
                  <h4 className="text-sm font-semibold mb-1">{step.title}</h4>
                  <p className="text-xs text-[var(--color-text-muted)]">{step.desc}</p>
                </div>
              ))}
            </div>
          </Section>
        </>
      )}

      {relatedProjects.length > 0 && (
        <>
          <CaptionStrip index="03" label="RELATED WORK" />
          <Section className="p-4 lg:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {relatedProjects.map((project) => (
                <Link key={project.slug} to={`/work/${project.slug}`} className="border border-[var(--color-line)] hover:border-[var(--color-line-strong)] transition-colors group">
                  <div className="aspect-video relative overflow-hidden" style={{ backgroundColor: project.color }}>
                    <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '25px 25px' }} />
                  </div>
                  <div className="p-4">
                    <h4 className="text-sm font-medium group-hover:text-[var(--color-accent)] transition-colors">{project.title}</h4>
                    <p className="text-xs text-[var(--color-text-muted)] mt-1">{project.summary}</p>
                  </div>
                </Link>
              ))}
            </div>
          </Section>
        </>
      )}

      <CTASection title="Interested in" accentWord="this service?" primaryLabel="GET A QUOTE" primaryHref="/contact" />
    </>
  );
}
