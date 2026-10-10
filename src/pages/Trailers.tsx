import { projects } from '../content';
import { Seo } from '../components/Seo';
import { routes } from '../config/routes';
import { Play } from 'lucide-react';

export default function Trailers() {
  const seo = routes.find(r => r.path === '/trailers')!.seo;

  return (
    <>
      <Seo title={seo.title} description={seo.description} />
      
      <section className="min-h-screen pt-24 pb-16 px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <div className="font-mono text-[10px] tracking-wider text-[var(--color-accent)] mb-4">01 / TRAILERS</div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Game <span className="text-[var(--color-accent)]">trailers.</span>
            </h1>
            <p className="text-lg text-[var(--color-text-muted)] max-w-2xl">
              Watch trailers and gameplay footage from our games. See our worlds in motion.
            </p>
          </div>

          <div className="space-y-16">
            {projects.map((game, index) => (
              <div key={game.slug} className="border border-[var(--color-line)] hover:border-[var(--color-accent)] transition-colors">
                {/* Video Placeholder */}
                <div className="relative aspect-video bg-black overflow-hidden group cursor-pointer">
                  {game.thumbnail ? (
                    <img 
                      src={game.thumbnail} 
                      alt={`${game.title} trailer`}
                      className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity"
                    />
                  ) : (
                    <div className="w-full h-full" style={{ backgroundColor: game.color }}>
                      <div className="w-full h-full opacity-20" style={{
                        backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
                        backgroundSize: '40px 40px',
                      }} />
                    </div>
                  )}
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 border-2 border-[var(--color-accent)] flex items-center justify-center bg-black/50 group-hover:bg-[var(--color-accent)]/20 transition-colors">
                      <Play size={32} className="text-[var(--color-accent)] ml-1" />
                    </div>
                  </div>

                  {/* Video Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent">
                    <div className="font-mono text-[10px] text-[var(--color-accent)] mb-2">
                      {String(index + 1).padStart(2, '0')} / OFFICIAL TRAILER
                    </div>
                    <h3 className="text-3xl font-bold mb-2">{game.title}</h3>
                    <p className="text-sm text-[var(--color-text-muted)]">{game.summary}</p>
                  </div>
                </div>

                {/* Game Info */}
                <div className="p-6 bg-[var(--color-bg)]">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                      <div className="font-mono text-[10px] text-[var(--color-text-dim)] mb-2">PLATFORMS</div>
                      <div className="text-sm">
                        {game.results.find(r => r.label === 'PLATFORMS')?.value || 'Multiple'}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Content */}
          <div className="mt-24 border-t border-[var(--color-line)] pt-16">
            <div className="font-mono text-[10px] tracking-wider text-[var(--color-accent)] mb-4">02 / BEHIND THE SCENES</div>
            <h2 className="text-3xl font-bold tracking-tight mb-8">Development footage</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border border-[var(--color-line)] p-6">
                <div className="aspect-video bg-[var(--color-surface)] mb-4 flex items-center justify-center">
                  <div className="text-center">
                    <Play size={48} className="text-[var(--color-text-dim)] mx-auto mb-2" />
                    <div className="font-mono text-[10px] text-[var(--color-text-dim)]">DEVLOG #01</div>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">Building Ember's procedural system</h3>
                <p className="text-sm text-[var(--color-text-muted)]">
                  A deep dive into how we created the procedural dungeon generation system that makes every run unique.
                </p>
              </div>

              <div className="border border-[var(--color-line)] p-6">
                <div className="aspect-video bg-[var(--color-surface)] mb-4 flex items-center justify-center">
                  <div className="text-center">
                    <Play size={48} className="text-[var(--color-text-dim)] mx-auto mb-2" />
                    <div className="font-mono text-[10px] text-[var(--color-text-dim)]">DEVLOG #02</div>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">Horizon's physics engine</h3>
                <p className="text-sm text-[var(--color-text-muted)]">
                  How we built a custom physics system to deliver the tight, responsive racing feel players expect.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
