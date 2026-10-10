import { useParams, Link } from 'react-router-dom';
import { projects } from '../content';
import { Seo } from '../components/Seo';
import { ArrowLeft } from 'lucide-react';

export default function GameDetail() {
  const { slug } = useParams();
  const game = projects.find(p => p.slug === slug);

  if (!game) {
    return (
      <section className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Game Not Found</h1>
          <Link to="/games" className="text-[var(--color-accent)] hover:underline">
            ← Back to Games
          </Link>
        </div>
      </section>
    );
  }

  const currentIndex = projects.findIndex(p => p.slug === slug);
  const nextGame = projects[(currentIndex + 1) % projects.length];

  return (
    <>
      <Seo 
        title={`${game.title} — NOCTURN GAMES`} 
        description={game.description}
        image={game.thumbnail}
      />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        {game.thumbnail ? (
          <img 
            src={game.thumbnail} 
            alt={game.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full" style={{ backgroundColor: game.color }}>
            <div className="w-full h-full opacity-20" style={{
              backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }} />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-16">
          <div className="max-w-7xl mx-auto">
            <Link to="/games" className="inline-flex items-center gap-2 text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors mb-8">
              <ArrowLeft size={16} />
              <span className="font-mono text-[11px] tracking-wider">ALL GAMES</span>
            </Link>
            
            <div className="font-mono text-[10px] text-[var(--color-accent)] mb-4">
              {game.year} · {game.role}
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
              {game.title}
            </h1>
            <p className="text-xl text-[var(--color-text-muted)] max-w-3xl">
              {game.summary}
            </p>
            <div className="flex flex-wrap gap-2 mt-6">
              {game.category.map((cat) => (
                <span key={cat} className="px-3 py-1 border border-[var(--color-line)] font-mono text-[10px] tracking-wider text-[var(--color-text-muted)]">
                  {cat}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Game Details */}
      <section className="py-16 px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="font-mono text-[10px] tracking-wider text-[var(--color-accent)] mb-4">01 / ABOUT</div>
              <h2 className="text-3xl font-bold tracking-tight mb-6">About the game</h2>
              <p className="text-[var(--color-text-muted)] leading-relaxed mb-8 text-lg">
                {game.description}
              </p>
              
              <div className="font-mono text-[10px] tracking-wider text-[var(--color-accent)] mb-4">02 / DETAILS</div>
              <h2 className="text-3xl font-bold tracking-tight mb-6">The experience</h2>
              <p className="text-[var(--color-text-muted)] leading-relaxed mb-8">
                {game.brief}
              </p>

              {/* Tools Used */}
              <div className="font-mono text-[10px] tracking-wider text-[var(--color-accent)] mb-4">03 / TECHNOLOGY</div>
              <h2 className="text-3xl font-bold tracking-tight mb-6">Built with</h2>
              <div className="flex flex-wrap gap-2 mb-12">
                {game.tools.map((tool) => (
                  <span key={tool} className="px-4 py-2 border border-[var(--color-line)] font-mono text-[11px] tracking-wider text-[var(--color-text-muted)]">
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="border border-[var(--color-line)] p-6 sticky top-24">
                <div className="font-mono text-[10px] tracking-wider text-[var(--color-text-dim)] mb-6">GAME INFO</div>
                
                <div className="space-y-6">
                  <div>
                    <div className="font-mono text-[10px] text-[var(--color-text-dim)] mb-2">RELEASED</div>
                    <div className="text-lg font-bold">{game.year}</div>
                  </div>
                  
                  <div>
                    <div className="font-mono text-[10px] text-[var(--color-text-dim)] mb-2">GENRE</div>
                    <div className="flex flex-wrap gap-2">
                      {game.category.map((cat) => (
                        <span key={cat} className="text-sm">{cat}</span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <div className="font-mono text-[10px] text-[var(--color-text-dim)] mb-2">ROLE</div>
                    <div className="text-sm">{game.role}</div>
                  </div>

                  <div className="pt-6 border-t border-[var(--color-line)]">
                    <div className="font-mono text-[10px] text-[var(--color-text-dim)] mb-4">STATS</div>
                    <div className="space-y-4">
                      {game.results.map((result) => (
                        <div key={result.label}>
                          <div className="text-2xl font-bold text-[var(--color-accent)]">{result.value}</div>
                          <div className="font-mono text-[10px] text-[var(--color-text-dim)] mt-1">{result.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Game */}
      <section className="border-t border-[var(--color-line)]">
        <Link to={`/games/${nextGame.slug}`} className="block group">
          <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16">
            <div className="font-mono text-[10px] tracking-wider text-[var(--color-text-dim)] mb-4">NEXT GAME</div>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-4xl md:text-5xl font-bold tracking-tight group-hover:text-[var(--color-accent)] transition-colors">
                  {nextGame.title}
                </h3>
                <p className="text-[var(--color-text-muted)] mt-2">{nextGame.summary}</p>
              </div>
              <div className="text-[var(--color-accent)] text-2xl">→</div>
            </div>
          </div>
        </Link>
      </section>
    </>
  );
}
