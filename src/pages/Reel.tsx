import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CaptionStrip, Section } from '../components/ui';
import { PageHeader } from '../components/sections';
import { Seo } from '../components/Seo';
import { routes } from '../config/routes';
import { X, Play } from 'lucide-react';

export default function Reel() {
  const [isPlaying, setIsPlaying] = useState(false);
  const seo = routes.find(r => r.path === '/reel')!.seo;

  return (
    <>
      <Seo title={seo.title} description={seo.description} />
      <PageHeader
        title="Engine"
        accentWord="reel."
        description="See what Nocturn Engine can do. Real-time rendering, physics, and multiplayer in action."
      />
      
      <Section className="p-4 lg:p-8">
        <div className="relative aspect-video max-w-5xl mx-auto border border-[var(--color-line)] overflow-hidden bg-[var(--color-surface)]">
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }} />
          <div className="absolute inset-0 flex items-center justify-center">
            {!isPlaying ? (
              <button
                onClick={() => setIsPlaying(true)}
                className="w-20 h-20 border-2 border-white/30 flex items-center justify-center hover:border-[var(--color-accent)] hover:bg-[var(--color-accent)]/10 transition-all group"
                aria-label="Play showreel"
              >
                <Play size={28} className="text-white group-hover:text-[var(--color-accent)] ml-1" />
              </button>
            ) : (
              <div className="text-center">
                <div className="font-mono text-sm text-[var(--color-accent)] mb-2">PLAYING</div>
                <div className="text-xs text-[var(--color-text-muted)]">Showreel placeholder — video would play here</div>
                <button
                  onClick={() => setIsPlaying(false)}
                  className="mt-4 w-10 h-10 border border-[var(--color-line)] flex items-center justify-center hover:border-[var(--color-accent)] transition-colors"
                  aria-label="Close player"
                >
                  <X size={16} />
                </button>
              </div>
            )}
          </div>
          <div className="absolute bottom-4 left-4 font-mono text-[10px] text-[var(--color-text-dim)] tracking-wider">
            NOCTURN SHOWREEL 2025
          </div>
          <div className="absolute bottom-4 right-4 font-mono text-[10px] text-[var(--color-text-dim)] tracking-wider">
            01:30
          </div>
        </div>
      </Section>

      <CaptionStrip index="01" label="HIGHLIGHTS" />
      <Section className="p-4 lg:p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {['Rendering', 'Physics', 'Multiplayer'].map((category, i) => (
            <div key={category} className="border border-[var(--color-line)] p-6 text-center hover:border-[var(--color-accent)]/30 transition-colors">
              <div className="font-mono text-[10px] text-[var(--color-accent)] mb-2">CHAPTER {String(i + 1).padStart(2, '0')}</div>
              <div className="text-lg font-semibold">{category}</div>
              <div className="font-mono text-[10px] text-[var(--color-text-dim)] mt-2">00:{String(20 + i * 15).padStart(2, '0')}</div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
