import { Link } from 'react-router-dom';
import { studio, projects, services, testimonials, clients } from '../content';
import { CaptionStrip, Section, MediaCell, Ticker } from '../components/ui';
import { HeroSection, CTASection, FeatureGrid, LogoStrip, TestimonialSlider } from '../components/sections';
import { Seo } from '../components/Seo';
import { routes } from '../config/routes';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  const featuredProjects = projects.filter(p => p.featured).slice(0, 6);
  const seo = routes.find(r => r.path === '/')!.seo;

  return (
    <>
      <Seo title={seo.title} description={seo.description} />
      
      <HeroSection name={studio.name} city={studio.city} tickerItems={studio.tickerItems} />
      
      <Ticker items={studio.tickerItems} />

      <CaptionStrip index="01" label="SELECTED WORK" right="REAL FOOTAGE — NO MOCKUPS" />
      <Section className="p-4 lg:p-8">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Selected <span className="italic font-serif text-[var(--color-accent)]">work.</span>
          </h2>
          <Link to="/work" className="hidden sm:inline-flex items-center gap-2 font-mono text-[11px] tracking-wider text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors">
            VIEW ALL WORK <ArrowRight size={12} />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[var(--color-line)]">
          {featuredProjects.map((project, i) => (
            <MediaCell
              key={project.slug}
              title={project.title}
              description={project.summary}
              category={project.category[0]}
              index={String(i + 1).padStart(2, '0')}
              color={project.color}
              href={`/work/${project.slug}`}
              year={project.year}
            />
          ))}
        </div>
      </Section>

      <CaptionStrip index="02" label="SERVICES" />
      <Section className="p-4 lg:p-8">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">
          What we <span className="italic font-serif text-[var(--color-accent)]">do.</span>
        </h2>
        <FeatureGrid
          columns={3}
          items={services.map(s => ({
            number: s.number,
            title: s.title,
            description: s.summary,
            tags: s.tags,
          }))}
        />
      </Section>

      <CaptionStrip index="03" label="PROCESS" />
      <Section className="p-4 lg:p-8">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">
          How it <span className="italic font-serif text-[var(--color-accent)]">works.</span>
        </h2>
        <div className="relative">
          <div className="absolute top-6 left-0 right-0 h-px bg-[var(--color-line)] hidden lg:block" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-0">
            {[
              { num: '01', title: 'Brief', desc: 'We align on goals, scope, and timeline.' },
              { num: '02', title: 'Story & Boards', desc: 'Concept, script, and storyboard approval.' },
              { num: '03', title: 'Production', desc: 'Shooting, animating, or generating.' },
              { num: '04', title: 'Polish', desc: 'Color, sound, VFX, and revisions.' },
              { num: '05', title: 'Delivery', desc: 'Final files in all formats.' },
            ].map((step, i) => (
              <div key={i} className="relative lg:px-4">
                <div className="relative z-10 w-12 h-12 border border-[var(--color-line)] flex items-center justify-center mb-4 bg-[var(--color-bg)]">
                  <span className="font-mono text-xs text-[var(--color-accent)]">{step.num}</span>
                </div>
                <h4 className="text-sm font-semibold mb-1">{step.title}</h4>
                <p className="text-xs text-[var(--color-text-muted)]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <CaptionStrip index="04" label="PROOF" right="FROM CLIENTS" />
      <Section className="p-4 lg:p-8">
        <LogoStrip logos={clients} />
        <div className="mt-12">
          <TestimonialSlider testimonials={testimonials} />
        </div>
      </Section>

      <CTASection
        eyebrow="BOOKING Q1 2025"
        title="Let's make"
        accentWord="something."
        primaryLabel="START A PROJECT"
        primaryHref="/contact"
        secondaryLabel="EMAIL US"
        secondaryHref={`mailto:${studio.email}`}
      />
    </>
  );
}
