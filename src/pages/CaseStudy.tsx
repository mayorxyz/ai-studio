import { useParams, Link } from 'react-router-dom';
import { projects } from '../data';
import { CaptionStrip, Section, Counter, Tag } from '../components/Shared';
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
    <div>
      {/* Hero */}
      <section className="relative">
        <div className="aspect-[21/9] relative overflow-hidden" style={{ backgroundColor: project.color }}>
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }} />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)] via-transparent to-transparent" />
          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="w-16 h-16 border border-white/30 flex items-center justify-center hover:border-[var(--color-accent)] hover:bg-[var(--color-accent)]/10 transition-all group">
              <Play size={20} className="text-white group-hover:text-[var(--color-accent)] ml-1" />
            </button>
          </div>
          <div className="absolute bottom-4 left-4 font-mono text-[10px] text-[var(--color-text-dim)] tracking-wider">
            PROJECT — {project.title.toUpperCase()}
          </div>
          <div className="absolute bottom-4 right-4 font-mono text-[10px] text-[var(--color-text-dim)] tracking-wider">
            PLAY WITH SOUND
          </div>
        </div>
      </section>

      {/* Meta row */}
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

      {/* Brief */}
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
            <div className="border border-[var(--color-line)] p-4 lg:sticky lg:top-24">
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
                <div>
                  <div className="font-mono text-[10px] text-[var(--color-text-dim)]">DURATION</div>
                  <div className="text-sm mt-1">2-4 WEEKS</div>
                </div>
                <div>
                  <div className="font-mono text-[10px] text-[var(--color-text-dim)]">DELIVERABLES</div>
                  <div className="text-sm mt-1">Film + Social Cuts</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Process */}
      <CaptionStrip index="02" label="PROCESS" />
      <Section className="p-4 lg:p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { step: '01', title: 'Storyboard', desc: 'Initial frames and visual direction', color: project.color },
            { step: '02', title: 'Frame Test', desc: 'Testing look and feel with key frames', color: project.color },
            { step: '03', title: 'Final Frame', desc: 'Polished final output ready for delivery', color: project.color },
          ].map((item, i) => (
            <div key={i} className="border border-[var(--color-line)] group">
              <div className="aspect-[4/3] relative overflow-hidden" style={{ backgroundColor: item.color }}>
                <div className="absolute inset-0 opacity-10" style={{
                  backgroundImage: `radial-gradient(circle at ${30 + i * 20}% ${40 + i * 10}%, rgba(255,255,255,0.1) 0%, transparent 50%)`,
                }} />
                <div className="absolute top-3 left-3 font-mono text-[9px] text-[var(--color-text-dim)] tracking-wider">STEP {item.step}</div>
              </div>
              <div className="p-4 border-t border-[var(--color-line)]">
                <h4 className="text-sm font-medium">{item.title}</h4>
                <p className="text-xs text-[var(--color-text-muted)] mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Gallery */}
      <CaptionStrip index="03" label="GALLERY" />
      <Section className="p-4 lg:p-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className={`relative overflow-hidden cursor-pointer group ${i === 0 ? 'col-span-2 row-span-2' : ''}`}
              style={{ backgroundColor: project.color }}
            >
              <div className={`${i === 0 ? 'aspect-square' : 'aspect-square'} relative`}>
                <div className="absolute inset-0 opacity-20" style={{
                  backgroundImage: `linear-gradient(${135 + i * 30}deg, rgba(255,255,255,0.05) 0%, transparent 50%)`,
                }} />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <span className="font-mono text-[10px] text-white opacity-0 group-hover:opacity-100 transition-opacity">VIEW</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Results */}
      <CaptionStrip index="04" label="RESULTS" />
      <Section className="p-4 lg:p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {project.results.map((r) => (
            <Counter key={r.label} value={r.value} label={r.label} />
          ))}
        </div>
      </Section>

      {/* Next project */}
      <CaptionStrip index="05" label="UP NEXT" />
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

      {/* CTA */}
      <Section className="p-4 lg:p-8 border-t border-[var(--color-line)]">
        <div className="text-center py-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Have a <span className="italic font-serif text-[var(--color-accent)]">project?</span>
          </h2>
          <div className="mt-6">
            <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-black font-mono text-[11px] tracking-wider px-6 py-3 hover:bg-[var(--color-accent)] transition-colors">
              START A PROJECT
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
}
