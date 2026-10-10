import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { STUDIO, projects, services, testimonials, clients } from '../data';
import { CaptionStrip, Section, MediaCell, Ticker, Tag } from '../components/Shared';
import { Play, ArrowRight } from 'lucide-react';

export default function Home() {
  const featuredProjects = projects.filter(p => p.featured).slice(0, 6);

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[100vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background gradient simulating reel video */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a1a] via-[#0d1520] to-[#0a0a0a]" />
          {/* Animated grid */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }} />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)] via-transparent to-[var(--color-bg)]/50" />
          {/* Moving light effect */}
          <motion.div
            className="absolute w-[600px] h-[600px] rounded-full opacity-10"
            style={{ background: 'radial-gradient(circle, var(--color-accent) 0%, transparent 70%)' }}
            animate={{ x: [0, 100, -50, 0], y: [0, -50, 50, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-8"
          >
            <span className="font-mono text-sm tracking-[0.3em] text-[var(--color-text-muted)]">{STUDIO.name}</span>
          </motion.div>

          {/* H1 */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]"
          >
            <span className="inline-block overflow-hidden">
              <motion.span
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ delay: 0.5, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="inline-block"
              >
                We make{' '}
              </motion.span>
            </span>
            <span className="inline-block overflow-hidden">
              <motion.span
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ delay: 0.65, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="inline-block italic font-serif text-[var(--color-accent)]"
              >
                moving
              </motion.span>
            </span>
            <span className="inline-block overflow-hidden">
              <motion.span
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ delay: 0.8, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="inline-block"
              >
                {' '}pictures.
              </motion.span>
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="mt-6 text-base md:text-lg text-[var(--color-text-muted)] max-w-lg mx-auto leading-relaxed"
          >
            AI-assisted video, animation, and storytelling for brands that move fast and think forward.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-4"
          >
            <button className="inline-flex items-center gap-2 bg-white text-black font-mono text-[11px] tracking-wider px-6 py-3 hover:bg-[var(--color-accent)] transition-colors">
              <Play size={12} /> WATCH THE REEL
            </button>
            <Link to="/contact" className="inline-flex items-center gap-2 border border-[var(--color-line-strong)] text-white font-mono text-[11px] tracking-wider px-6 py-3 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors">
              START A PROJECT
            </Link>
          </motion.div>

          {/* Meta */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            className="mt-12 font-mono text-[10px] tracking-wider text-[var(--color-text-dim)]"
          >
            AI FILM · ANIMATION · AUTOMATION · {STUDIO.city.toUpperCase()}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-px h-8 bg-gradient-to-b from-transparent to-[var(--color-text-dim)]"
          />
        </motion.div>
      </section>

      {/* Ticker */}
      <Ticker items={STUDIO.tickerItems} />

      {/* Featured Work */}
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
        <div className="mt-8 text-center sm:hidden">
          <Link to="/work" className="inline-flex items-center gap-2 font-mono text-[11px] tracking-wider text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors border border-[var(--color-line)] px-4 py-2">
            VIEW ALL WORK <ArrowRight size={12} />
          </Link>
        </div>
      </Section>

      {/* Services */}
      <CaptionStrip index="02" label="SERVICES" />
      <Section className="p-4 lg:p-8">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">
          What we <span className="italic font-serif text-[var(--color-accent)]">do.</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--color-line)]">
          {services.map((service) => (
            <div key={service.slug} className="bg-[var(--color-bg)] p-6 hover:bg-[var(--color-surface)] transition-colors group">
              <div className="font-mono text-[10px] text-[var(--color-accent)] tracking-wider mb-3">{service.number}</div>
              <h3 className="text-lg font-semibold tracking-tight mb-2 group-hover:text-[var(--color-accent)] transition-colors">{service.title}</h3>
              <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-4">{service.summary}</p>
              <div className="flex flex-wrap gap-1.5">
                {service.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Process Preview */}
      <CaptionStrip index="03" label="PROCESS" />
      <Section className="p-4 lg:p-8">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">
          How it <span className="italic font-serif text-[var(--color-accent)]">works.</span>
        </h2>
        <div className="relative">
          {/* Connecting line */}
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
        <div className="mt-8 text-center">
          <Link to="/process" className="inline-flex items-center gap-2 font-mono text-[11px] tracking-wider text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors border border-[var(--color-line)] px-4 py-2">
            SEE FULL PROCESS <ArrowRight size={12} />
          </Link>
        </div>
      </Section>

      {/* Proof */}
      <CaptionStrip index="04" label="PROOF" right="FROM CLIENTS" />
      <Section className="p-4 lg:p-8">
        {/* Client logos */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-px bg-[var(--color-line)] mb-12">
          {clients.map((client) => (
            <div key={client} className="bg-[var(--color-bg)] p-6 flex items-center justify-center">
              <span className="font-mono text-xs tracking-wider text-[var(--color-text-dim)] grayscale">{client}</span>
            </div>
          ))}
        </div>
        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <div key={i} className="border border-[var(--color-line)] p-6">
              <p className="text-sm text-[var(--color-text-muted)] leading-relaxed italic mb-4">"{t.quote}"</p>
              <div>
                <div className="text-sm font-medium">{t.name}</div>
                <div className="font-mono text-[10px] text-[var(--color-text-dim)] mt-1">{t.role}, {t.company}</div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Behind the scenes */}
      <CaptionStrip index="05" label="INSIDE THE STUDIO" />
      <Section className="p-4 lg:p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { title: 'Pipeline Architecture', desc: 'ComfyUI node graph for automated video generation', color: '#0d2137' },
            { title: 'Studio Timelapse', desc: 'A week of production compressed into 30 seconds', color: '#1a1a2e' },
            { title: 'Color Session', desc: 'DaVinci Resolve grading session for Aurora brand film', color: '#2d1b4e' },
          ].map((item, i) => (
            <div key={i} className="border border-[var(--color-line)] group hover:border-[var(--color-line-strong)] transition-colors">
              <div className="aspect-video relative overflow-hidden" style={{ backgroundColor: item.color }}>
                <div className="absolute inset-0 opacity-20" style={{
                  backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
                  backgroundSize: '30px 30px',
                }} />
                <div className="absolute bottom-3 left-3 font-mono text-[9px] text-[var(--color-text-dim)] tracking-wider">
                  BTS — {String(i + 1).padStart(2, '0')}
                </div>
              </div>
              <div className="p-4">
                <h4 className="text-sm font-medium">{item.title}</h4>
                <p className="text-xs text-[var(--color-text-muted)] mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section className="p-4 lg:p-8 border-t border-[var(--color-line)]">
        <div className="text-center py-12 md:py-20">
          <div className="font-mono text-[10px] tracking-wider text-[var(--color-accent)] mb-4">BOOKING Q1 2025</div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Let's make <span className="italic font-serif text-[var(--color-accent)]">something.</span>
          </h2>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-black font-mono text-[11px] tracking-wider px-6 py-3 hover:bg-[var(--color-accent)] transition-colors">
              START A PROJECT
            </Link>
            <a href={`mailto:${STUDIO.email}`} className="inline-flex items-center gap-2 border border-[var(--color-line-strong)] text-white font-mono text-[11px] tracking-wider px-6 py-3 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors">
              EMAIL US
            </a>
          </div>
        </div>
      </Section>
    </div>
  );
}
