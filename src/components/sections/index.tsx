import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { CaptionStrip, Section, MediaCell, Counter, Tag, Ticker } from '../ui';

// PageHeader - used at top of each page
export function PageHeader({ title, accentWord, description, caption }: {
  title: string;
  accentWord: string;
  description: string;
  caption?: { index: string; label: string; right?: string };
}) {
  return (
    <>
      <section className="p-4 lg:p-8 pt-12 lg:pt-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            {title} <span className="italic font-serif text-[var(--color-accent)]">{accentWord}</span>
          </h1>
          <p className="mt-4 text-base text-[var(--color-text-muted)] max-w-lg">{description}</p>
        </div>
      </section>
      {caption && <CaptionStrip index={caption.index} label={caption.label} right={caption.right} />}
    </>
  );
}

// CTA section
export function CTASection({ eyebrow, title, accentWord, description, primaryLabel, primaryHref, secondaryLabel, secondaryHref }: {
  eyebrow?: string;
  title: string;
  accentWord: string;
  description?: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  return (
    <Section className="p-4 lg:p-8 border-t border-[var(--color-line)]">
      <div className="text-center py-12 md:py-20">
        {eyebrow && <div className="font-mono text-[10px] tracking-wider text-[var(--color-accent)] mb-4">{eyebrow}</div>}
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
          {title} <span className="italic font-serif text-[var(--color-accent)]">{accentWord}</span>
        </h2>
        {description && <p className="mt-4 text-sm text-[var(--color-text-muted)] max-w-md mx-auto">{description}</p>}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link to={primaryHref} className="inline-flex items-center gap-2 bg-white text-black font-mono text-[11px] tracking-wider px-6 py-3 hover:bg-[var(--color-accent)] transition-colors">
            {primaryLabel}
          </Link>
          {secondaryLabel && secondaryHref && (
            <Link to={secondaryHref} className="inline-flex items-center gap-2 border border-[var(--color-line-strong)] text-white font-mono text-[11px] tracking-wider px-6 py-3 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors">
              {secondaryLabel}
            </Link>
          )}
        </div>
      </div>
    </Section>
  );
}

// FeatureGrid - for services, behind-the-scenes, etc.
export function FeatureGrid({ items, columns = 3 }: {
  items: { number?: string; title: string; description: string; tags?: string[]; color?: string }[];
  columns?: 2 | 3;
}) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 ${columns === 3 ? 'lg:grid-cols-3' : ''} gap-px bg-[var(--color-line)]`}>
      {items.map((item, i) => (
        <div key={i} className="bg-[var(--color-bg)] p-6 hover:bg-[var(--color-surface)] transition-colors group">
          {item.number && <div className="font-mono text-[10px] text-[var(--color-accent)] tracking-wider mb-3">{item.number}</div>}
          <h3 className="text-lg font-semibold tracking-tight mb-2 group-hover:text-[var(--color-accent)] transition-colors">{item.title}</h3>
          <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-4">{item.description}</p>
          {item.tags && (
            <div className="flex flex-wrap gap-1.5">
              {item.tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

// StatsRow
export function StatsRow({ stats }: { stats: { value: string; label: string }[] }) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-${Math.min(stats.length, 3)} gap-4`}>
      {stats.map((stat) => (
        <Counter key={stat.label} value={stat.value} label={stat.label} />
      ))}
    </div>
  );
}

// LogoStrip
export function LogoStrip({ logos }: { logos: string[] }) {
  return (
    <div className="grid grid-cols-3 md:grid-cols-6 gap-px bg-[var(--color-line)]">
      {logos.map((logo) => (
        <div key={logo} className="bg-[var(--color-bg)] p-6 flex items-center justify-center">
          <span className="font-mono text-xs tracking-wider text-[var(--color-text-dim)] grayscale">{logo}</span>
        </div>
      ))}
    </div>
  );
}

// TestimonialSlider
export function TestimonialSlider({ testimonials }: { testimonials: { quote: string; name: string; role: string; company: string }[] }) {
  return (
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
  );
}

// Hero section (for home page)
export function HeroSection({ name, city, tickerItems }: { name: string; city: string; tickerItems: string[] }) {
  return (
    <section className="relative h-[100vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a1a] via-[#0d1520] to-[#0a0a0a]" />
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }} />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)] via-transparent to-[var(--color-bg)]/50" />
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, var(--color-accent) 0%, transparent 70%)' }}
          animate={{ x: [0, 100, -50, 0], y: [0, -50, 50, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        />
      </div>
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }} className="mb-8">
          <span className="font-mono text-sm tracking-[0.3em] text-[var(--color-text-muted)]">{name}</span>
        </motion.div>
        <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.6 }} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
          <span className="inline-block overflow-hidden">
            <motion.span initial={{ y: '100%' }} animate={{ y: 0 }} transition={{ delay: 0.5, duration: 0.7, ease: [0.16, 1, 0.3, 1] }} className="inline-block">Build </motion.span>
          </span>
          <span className="inline-block overflow-hidden">
            <motion.span initial={{ y: '100%' }} animate={{ y: 0 }} transition={{ delay: 0.65, duration: 0.7, ease: [0.16, 1, 0.3, 1] }} className="inline-block italic font-serif text-[var(--color-accent)]">games.</motion.span>
          </span>
          <span className="inline-block overflow-hidden">
            <motion.span initial={{ y: '100%' }} animate={{ y: 0 }} transition={{ delay: 0.8, duration: 0.7, ease: [0.16, 1, 0.3, 1] }} className="inline-block"> Ship fast.</motion.span>
          </span>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, duration: 0.5 }} className="mt-6 text-base md:text-lg text-[var(--color-text-muted)] max-w-lg mx-auto leading-relaxed">
          Open-source game engine with real-time rendering, physics, ECS, scripting, and multiplayer. Free forever, no royalties.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2, duration: 0.5 }} className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link to="/start" className="inline-flex items-center gap-2 bg-white text-black font-mono text-[11px] tracking-wider px-6 py-3 hover:bg-[var(--color-accent)] transition-colors">
            ↓ DOWNLOAD ENGINE
          </Link>
          <Link to="/work" className="inline-flex items-center gap-2 border border-[var(--color-line-strong)] text-white font-mono text-[11px] tracking-wider px-6 py-3 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors">
            VIEW SHOWCASES
          </Link>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 0.5 }} className="mt-12 font-mono text-[10px] tracking-wider text-[var(--color-text-dim)]">
          REAL-TIME RENDERING · PHYSICS · ECS · SCRIPTING · NETCODE · {city.toUpperCase()}
        </motion.div>
      </div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2, duration: 0.5 }} className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }} className="w-px h-8 bg-gradient-to-b from-transparent to-[var(--color-text-dim)]" />
      </motion.div>
    </section>
  );
}

// ManifestoText - scroll-reveal words
export function ManifestoText({ text }: { text: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const words = text.split(' ');

  return (
    <div ref={ref} className="max-w-4xl text-center">
      <p className="text-xl md:text-3xl lg:text-4xl font-light leading-relaxed tracking-tight">
        {words.map((word, i) => {
          const start = i / words.length;
          const end = start + 1 / words.length;
          return <Word key={i} word={word} range={[start, end]} progress={scrollYProgress} />;
        })}
      </p>
    </div>
  );
}

function Word({ word, range, progress }: { word: string; range: [number, number]; progress: ReturnType<typeof useScroll>['scrollYProgress'] }) {
  const opacity = useTransform(progress, range, [0.2, 1]);
  return (
    <motion.span style={{ opacity }} className="inline-block mr-[0.3em]">
      {word}
    </motion.span>
  );
}
