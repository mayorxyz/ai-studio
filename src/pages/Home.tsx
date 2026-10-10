import { Link } from 'react-router-dom';
import { studio, projects } from '../content';
import { CaptionStrip, Section, MediaCell, Ticker } from '../components/ui';
import { CTASection } from '../components/sections';
import { Seo } from '../components/Seo';
import { routes } from '../config/routes';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  const featuredGames = projects.filter(p => p.featured).slice(0, 6);
  const seo = routes.find(r => r.path === '/')!.seo;

  return (
    <>
      <Seo title={seo.title} description={seo.description} />
      
      {/* Hero */}
      <section className="relative h-[100vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a1a] via-[#0d1520] to-[#0a0a0a]" />
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }} />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)] via-transparent to-[var(--color-bg)]/50" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="mb-8">
            <span className="font-mono text-sm tracking-[0.3em] text-[var(--color-text-muted)]">{studio.name} GAMES</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
            We make <span className="text-[var(--color-accent)]">games.</span>
          </h1>
          <p className="mt-6 text-base md:text-lg text-[var(--color-text-muted)] max-w-lg mx-auto leading-relaxed">
            Independent game studio crafting immersive experiences across multiple genres and platforms.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link to="/games" className="inline-flex items-center gap-2 bg-white text-black font-mono text-[11px] tracking-wider px-6 py-3 hover:bg-[var(--color-accent)] transition-colors">
              VIEW OUR GAMES
            </Link>
            <Link to="/trailers" className="inline-flex items-center gap-2 border border-[var(--color-line-strong)] text-white font-mono text-[11px] tracking-wider px-6 py-3 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors">
              WATCH TRAILERS
            </Link>
          </div>
          <div className="mt-12 font-mono text-[10px] tracking-wider text-[var(--color-text-dim)]">
            {studio.tickerItems.slice(0, 5).join(' · ')}
          </div>
        </div>
      </section>

      <Ticker items={studio.tickerItems} />

      <CaptionStrip index="01" label="OUR GAMES" right={`${projects.length} TITLES`} />
      <Section className="p-4 lg:p-8">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Shipped <span className="text-[var(--color-accent)]">titles.</span>
          </h2>
          <Link to="/games" className="hidden sm:inline-flex items-center gap-2 font-mono text-[11px] tracking-wider text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors">
            ALL GAMES <ArrowRight size={12} />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[var(--color-line)]">
          {featuredGames.map((game, i) => (
            <MediaCell
              key={game.slug}
              title={game.title}
              description={game.summary}
              category={game.category[0]}
              index={String(i + 1).padStart(2, '0')}
              color={game.color}
              href={`/games/${game.slug}`}
              year={game.year}
              image={game.thumbnail}
            />
          ))}
        </div>
      </Section>

      <CaptionStrip index="02" label="GENRES" />
      <Section className="p-4 lg:p-8">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">
          What we <span className="text-[var(--color-accent)]">build.</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--color-line)]">
          {[
            { num: '01', title: 'Roguelikes', desc: 'Procedural dungeons, permadeath, endless replayability.' },
            { num: '02', title: 'Racing', desc: 'High-speed arcade racing with custom physics.' },
            { num: '03', title: 'FPS', desc: 'Tactical multiplayer shooters with unique mechanics.' },
            { num: '04', title: 'Open World', desc: 'Vast explorable worlds with living ecosystems.' },
            { num: '05', title: 'Strategy', desc: 'Deep RTS with advanced AI and magical warfare.' },
            { num: '06', title: 'VR', desc: 'Immersive virtual reality experiences.' },
          ].map((genre) => (
            <div key={genre.num} className="bg-[var(--color-bg)] p-6 hover:bg-[var(--color-surface)] transition-colors">
              <div className="font-mono text-[10px] text-[var(--color-accent)] tracking-wider mb-3">{genre.num}</div>
              <h3 className="text-lg font-semibold tracking-tight mb-2">{genre.title}</h3>
              <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{genre.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <CTASection
        eyebrow="NOW AVAILABLE"
        title="Play our"
        accentWord="games."
        primaryLabel="VIEW ALL GAMES"
        primaryHref="/games"
        secondaryLabel="WATCH TRAILERS"
        secondaryHref="/trailers"
      />
    </>
  );
}
