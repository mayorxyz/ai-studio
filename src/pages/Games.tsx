import { Link } from 'react-router-dom';
import { projects } from '../content';
import { Seo } from '../components/Seo';
import { routes } from '../config/routes';

export default function Games() {
  const seo = routes.find(r => r.path === '/games')!.seo;

  return (
    <>
      <Seo title={seo.title} description={seo.description} />
      
      <section className="min-h-screen pt-24 pb-16 px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <div className="font-mono text-[10px] tracking-wider text-[var(--color-accent)] mb-4">01 / GAMES</div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Our <span className="text-[var(--color-accent)]">games.</span>
            </h1>
            <p className="text-lg text-[var(--color-text-muted)] max-w-2xl">
              Six titles shipped across multiple genres and platforms. Each game represents our commitment to crafting unique, immersive experiences.
            </p>
          </div>

          <div className="space-y-24">
            {projects.map((game, index) => (
              <div key={game.slug} className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                {index % 2 === 0 ? (
                  <>
                    <Link to={`/games/${game.slug}`} className="group relative aspect-video overflow-hidden border border-[var(--color-line)] hover:border-[var(--color-accent)] transition-colors">
                      {game.thumbnail ? (
                        <img 
                          src={game.thumbnail} 
                          alt={game.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full" style={{ backgroundColor: game.color }}>
                          <div className="w-full h-full opacity-20" style={{
                            backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
                            backgroundSize: '40px 40px',
                          }} />
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <div className="font-mono text-[10px] text-[var(--color-accent)] mb-2">{String(index + 1).padStart(2, '0')} / {game.category[0]}</div>
                        <h3 className="text-3xl font-bold mb-2">{game.title}</h3>
                        <p className="text-sm text-[var(--color-text-muted)]">{game.summary}</p>
                      </div>
                    </Link>
                    <div>
                      <div className="font-mono text-[10px] text-[var(--color-text-dim)] mb-4">{game.year} · {game.role}</div>
                      <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">{game.title}</h2>
                      <p className="text-[var(--color-text-muted)] leading-relaxed mb-6">{game.description}</p>
                      <div className="grid grid-cols-3 gap-4 mb-6">
                        {game.results.map((result) => (
                          <div key={result.label}>
                            <div className="text-2xl font-bold text-[var(--color-accent)]">{result.value}</div>
                            <div className="font-mono text-[10px] text-[var(--color-text-dim)] mt-1">{result.label}</div>
                          </div>
                        ))}
                      </div>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {game.category.map((cat) => (
                          <span key={cat} className="px-3 py-1 border border-[var(--color-line)] font-mono text-[10px] tracking-wider text-[var(--color-text-muted)]">
                            {cat}
                          </span>
                        ))}
                      </div>
                      <Link 
                        to={`/games/${game.slug}`}
                        className="inline-flex items-center gap-2 bg-white text-black font-mono text-[11px] tracking-wider px-6 py-3 hover:bg-[var(--color-accent)] transition-colors"
                      >
                        VIEW GAME →
                      </Link>
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <div className="font-mono text-[10px] text-[var(--color-text-dim)] mb-4">{game.year} · {game.role}</div>
                      <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">{game.title}</h2>
                      <p className="text-[var(--color-text-muted)] leading-relaxed mb-6">{game.description}</p>
                      <div className="grid grid-cols-3 gap-4 mb-6">
                        {game.results.map((result) => (
                          <div key={result.label}>
                            <div className="text-2xl font-bold text-[var(--color-accent)]">{result.value}</div>
                            <div className="font-mono text-[10px] text-[var(--color-text-dim)] mt-1">{result.label}</div>
                          </div>
                        ))}
                      </div>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {game.category.map((cat) => (
                          <span key={cat} className="px-3 py-1 border border-[var(--color-line)] font-mono text-[10px] tracking-wider text-[var(--color-text-muted)]">
                            {cat}
                          </span>
                        ))}
                      </div>
                      <Link 
                        to={`/games/${game.slug}`}
                        className="inline-flex items-center gap-2 bg-white text-black font-mono text-[11px] tracking-wider px-6 py-3 hover:bg-[var(--color-accent)] transition-colors"
                      >
                        VIEW GAME →
                      </Link>
                    </div>
                    <Link to={`/games/${game.slug}`} className="group relative aspect-video overflow-hidden border border-[var(--color-line)] hover:border-[var(--color-accent)] transition-colors">
                      {game.thumbnail ? (
                        <img 
                          src={game.thumbnail} 
                          alt={game.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full" style={{ backgroundColor: game.color }}>
                          <div className="w-full h-full opacity-20" style={{
                            backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
                            backgroundSize: '40px 40px',
                          }} />
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <div className="font-mono text-[10px] text-[var(--color-accent)] mb-2">{String(index + 1).padStart(2, '0')} / {game.category[0]}</div>
                        <h3 className="text-3xl font-bold mb-2">{game.title}</h3>
                        <p className="text-sm text-[var(--color-text-muted)]">{game.summary}</p>
                      </div>
                    </Link>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
