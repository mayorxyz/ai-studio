import { Seo } from '../components/Seo';
import { routes } from '../config/routes';
import { studio } from '../content';

export default function About() {
  const seo = routes.find(r => r.path === '/about')!.seo;

  return (
    <>
      <Seo title={seo.title} description={seo.description} />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a1a] via-[#0d1520] to-[#0a0a0a]" />
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }} />
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="font-mono text-[10px] tracking-wider text-[var(--color-accent)] mb-4">01 / ABOUT</div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            We are <span className="text-[var(--color-accent)]">NOCTURN.</span>
          </h1>
          <p className="text-lg md:text-xl text-[var(--color-text-muted)] max-w-2xl mx-auto">
            An independent game studio based in Berlin, crafting immersive experiences since 2022.
          </p>
        </div>
      </section>

      {/* Studio Story */}
      <section className="py-16 px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="font-mono text-[10px] tracking-wider text-[var(--color-accent)] mb-4">02 / OUR STORY</div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                Building worlds since <span className="text-[var(--color-accent)]">2022.</span>
              </h2>
              <div className="space-y-4 text-[var(--color-text-muted)] leading-relaxed">
                <p>
                  NOCTURN GAMES was founded with a simple mission: create games that players remember. We're a team of passionate developers, artists, and designers who believe in the power of interactive storytelling.
                </p>
                <p>
                  Starting with a small team in Berlin, we've grown to ship six titles across multiple genres. From the procedural dungeons of Ember to the vast open world of Verdant, each game represents our commitment to quality and innovation.
                </p>
                <p>
                  We build with our own custom engine, giving us complete control over performance and the ability to push technical boundaries. This independence allows us to take creative risks and deliver unique experiences that stand out in today's gaming landscape.
                </p>
              </div>
            </div>
            
            <div className="aspect-square bg-[var(--color-surface)] border border-[var(--color-line)] flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl font-bold text-[var(--color-accent)] mb-4">2022</div>
                <div className="font-mono text-[10px] text-[var(--color-text-dim)] tracking-wider">FOUNDED IN BERLIN</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4 lg:px-8 border-t border-[var(--color-line)]">
        <div className="max-w-7xl mx-auto">
          <div className="font-mono text-[10px] tracking-wider text-[var(--color-accent)] mb-8">03 / BY THE NUMBERS</div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-[var(--color-accent)] mb-2">6</div>
              <div className="font-mono text-[10px] text-[var(--color-text-dim)] tracking-wider">GAMES SHIPPED</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-[var(--color-accent)] mb-2">3+</div>
              <div className="font-mono text-[10px] text-[var(--color-text-dim)] tracking-wider">YEARS ACTIVE</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-[var(--color-accent)] mb-2">8M+</div>
              <div className="font-mono text-[10px] text-[var(--color-text-dim)] tracking-wider">PLAYERS WORLDWIDE</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-[var(--color-accent)] mb-2">12</div>
              <div className="font-mono text-[10px] text-[var(--color-text-dim)] tracking-wider">TEAM MEMBERS</div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-16 px-4 lg:px-8 border-t border-[var(--color-line)]">
        <div className="max-w-7xl mx-auto">
          <div className="font-mono text-[10px] tracking-wider text-[var(--color-accent)] mb-8">04 / PHILOSOPHY</div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12">
            What we <span className="text-[var(--color-accent)]">believe.</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border border-[var(--color-line)] p-6">
              <div className="text-4xl font-bold text-[var(--color-accent)] mb-4">01</div>
              <h3 className="text-xl font-bold mb-3">Player First</h3>
              <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                Every decision we make starts with the player experience. We build games we want to play, and we listen to our community.
              </p>
            </div>
            
            <div className="border border-[var(--color-line)] p-6">
              <div className="text-4xl font-bold text-[var(--color-accent)] mb-4">02</div>
              <h3 className="text-xl font-bold mb-3">Technical Excellence</h3>
              <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                We invest in our tools and technology. Performance and polish are non-negotiable.
              </p>
            </div>
            
            <div className="border border-[var(--color-line)] p-6">
              <div className="text-4xl font-bold text-[var(--color-accent)] mb-4">03</div>
              <h3 className="text-xl font-bold mb-3">Creative Freedom</h3>
              <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                Independence allows us to take risks and explore unique ideas. We follow our vision, not trends.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 px-4 lg:px-8 border-t border-[var(--color-line)]">
        <div className="max-w-7xl mx-auto">
          <div className="font-mono text-[10px] tracking-wider text-[var(--color-accent)] mb-8">05 / THE TEAM</div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12">
            The people behind <span className="text-[var(--color-accent)]">NOCTURN.</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Alex Chen', role: 'Creative Director', bio: '10+ years in game development. Passionate about immersive storytelling.' },
              { name: 'Maya Torres', role: 'Technical Director', bio: 'Engine architect with expertise in real-time rendering and optimization.' },
              { name: 'Jonas Weber', role: 'Art Director', bio: 'Creating visual identities for games. Believes in atmosphere over spectacle.' },
              { name: 'Priya Sharma', role: 'Lead Designer', bio: 'Systems designer focused on player agency and emergent gameplay.' },
              { name: 'Luca Rossi', role: 'Lead Programmer', bio: 'Gameplay programmer specializing in physics and multiplayer systems.' },
              { name: 'Sara Kim', role: 'Audio Director', bio: 'Creating soundscapes that enhance immersion and emotional impact.' },
            ].map((member, index) => (
              <div key={index} className="border border-[var(--color-line)] p-6">
                <div className="aspect-square bg-[var(--color-surface)] mb-4 flex items-center justify-center">
                  <div className="text-4xl font-bold text-[var(--color-text-dim)]">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-1">{member.name}</h3>
                <div className="font-mono text-[10px] text-[var(--color-accent)] tracking-wider mb-3">{member.role}</div>
                <p className="text-sm text-[var(--color-text-muted)]">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 px-4 lg:px-8 border-t border-[var(--color-line)]">
        <div className="max-w-7xl mx-auto text-center">
          <div className="font-mono text-[10px] tracking-wider text-[var(--color-accent)] mb-4">06 / GET IN TOUCH</div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            Want to work <span className="text-[var(--color-accent)]">with us?</span>
          </h2>
          <p className="text-[var(--color-text-muted)] mb-8 max-w-2xl mx-auto">
            We're always looking for talented people to join our team. If you're passionate about making great games, we'd love to hear from you.
          </p>
          <a 
            href={`mailto:${studio.email}`}
            className="inline-flex items-center gap-2 bg-white text-black font-mono text-[11px] tracking-wider px-6 py-3 hover:bg-[var(--color-accent)] transition-colors"
          >
            CONTACT US →
          </a>
        </div>
      </section>
    </>
  );
}
