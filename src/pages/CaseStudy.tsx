import { useParams, Link } from 'react-router-dom';
import { projects } from '../content';
import { CaptionStrip, Section, Counter, Tag } from '../components/ui';
import { CTASection } from '../components/sections';
import { Seo } from '../components/Seo';
import { Play, ArrowRight } from 'lucide-react';

export default function CaseStudy() {
  const { slug } = useParams();
  const project = projects.find(p => p.slug === slug);
  const currentIndex = projects.findIndex(p => p.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  if (!project) {
    return (
      <div className="p-8 text-center">
        <h1 className="text-2xl font-bold">Project not found</h1>
        <Link to="/work" className="mt-4 inline-block text-[var(--color-accent)] font-mono text-sm">← Back to work</Link>
      </div>
    );
  }

  return (
    <>
      <Seo title={`${project.title} — NOCTURN Studio`} description={project.summary} />
      
      <section className="relative">
        <div className="aspect-[21/9] relative overflow-hidden" style={{ backgroundColor: project.color }}>
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }} />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)] via-transparent to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="w-16 h-16 border border-white/30 flex items-center justify-center hover:border-[var(--color-accent)] hover:bg-[var(--color-accent)]/10 transition-all group">
              <Play size={20} className="text-white group-hover:text-[var(--color-accent)] ml-1" />
            </button>
          </div>
          <div className="absolute bottom-4 left-4 font-mono text-[10px] text-[var(--color-text-dim)] tracking-wider">
            PROJECT — {project.title.toUpperCase()}
          </div>
        </div>
      </section>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[var(--color-line)] border-b border-[var(--color-line)]">
        {[
          { label: 'CLIENT', value: project.client },
          { label: 'YEAR', value: String(project.year) },
          { label: 'ROLE', value: project.role },
          { label: 'TOOLS', value: project.tools.join(', ') },
        ].map((item) => (
          <div key={item.label} className="bg-[var(--color-bg)] p-4">
            <div className="font-mono text-[10px] tracking-wider text-[var(--color-text-dim)] mb-1">{item.label}</div>
            <div className="text-sm">{item.value}</div>
          </div>
        ))}
      </div>

      <CaptionStrip index="01" label="THE BRIEF" />
      <Section className="p-4 lg:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              The <span className="italic font-serif text-[var(--color-accent)]">brief.</span>
            </h2>
            <p className="text-base text-[var(--color-text-muted)] leading-relaxed mb-4">{project.brief}</p>
            <p className="text-base text-[var(--color-text-muted)] leading-relaxed">{project.description}</p>
          </div>
          <div className="lg:col-span-1">
            <div className="border border-[var(--color-line)] p-4">
              <div className="font-mono text-[10px] tracking-wider text-[var(--color-text-dim)] mb-3">CREDITS</div>
              <div className="space-y-3">
                <div>
                  <div className="font-mono text-[10px] text-[var(--color-text-dim)]">CATEGORY</div>
                  <div className="text-sm mt-1">{project.category.join(' / ')}</div>
                </div>
                <div>
                  <div className="font-mono text-[10px] text-[var(--color-text-dim)]">TOOLS</div>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {project.tools.map(t => <Tag key={t}>{t}</Tag>)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <CaptionStrip index="02" label="RESULTS" />
      <Section className="p-4 lg:p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {project.results.map((r) => (
            <Counter key={r.label} value={r.value} label={r.label} />
          ))}
        </div>
      </Section>

      <CaptionStrip index="03" label="UP NEXT" />
      <Link to={`/work/${nextProject.slug}`} className="block border-t border-[var(--color-line)] group">
        <div className="relative aspect-[3/1] overflow-hidden" style={{ backgroundColor: nextProject.color }}>
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }} />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="font-mono text-[10px] tracking-wider text-[var(--color-text-dim)] mb-2">NEXT PROJECT</div>
              <div className="text-2xl md:text-4xl font-bold tracking-tight group-hover:text-[var(--color-accent)] transition-colors">
                {nextProject.title}
              </div>
              <div className="mt-4 inline-flex items-center gap-2 font-mono text-[11px] tracking-wider text-[var(--color-text-muted)]">
                VIEW PROJECT <ArrowRight size={12} />
              </div>
            </div>
          </div>
        </div>
      </Link>

      <CTASection
        title="Have a"
        accentWord="project?"
        primaryLabel="START A PROJECT"
        primaryHref="/contact"
      />
    </>
  );
}
