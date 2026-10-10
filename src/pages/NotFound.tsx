import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Seo } from '../components/Seo';

export default function NotFound() {
  return (
    <>
      <Seo title="404 — NOCTURN Studio" description="Page not found." />
      <div className="min-h-[80vh] flex items-center justify-center p-4">
        <div className="text-center">
          <div className="flex items-end justify-center gap-1 mb-8">
            {[40, 30, 20, 10, 5].map((h, i) => (
              <motion.div key={i} initial={{ height: 0 }} animate={{ height: h }} transition={{ delay: i * 0.1, duration: 0.4 }} className="w-2 bg-[var(--color-line-strong)]" style={{ height: h }} />
            ))}
          </div>
          <div className="border border-[var(--color-line)] px-6 py-3 inline-block mb-8">
            <span className="font-mono text-[11px] tracking-wider text-[var(--color-accent)]">SIGNAL LOST</span>
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
            <div className="text-6xl md:text-8xl font-bold tracking-tight text-[var(--color-text-dim)]">404</div>
            <p className="mt-4 text-base text-[var(--color-text-muted)] max-w-sm mx-auto">This page doesn't exist. The signal was lost somewhere in the void.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link to="/" className="inline-flex items-center gap-2 bg-white text-black font-mono text-[11px] tracking-wider px-6 py-3 hover:bg-[var(--color-accent)] transition-colors">GO HOME</Link>
            <Link to="/work" className="inline-flex items-center gap-2 border border-[var(--color-line-strong)] text-white font-mono text-[11px] tracking-wider px-6 py-3 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors">VIEW WORK</Link>
            <Link to="/services" className="inline-flex items-center gap-2 border border-[var(--color-line-strong)] text-white font-mono text-[11px] tracking-wider px-6 py-3 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors">SERVICES</Link>
            <Link to="/contact" className="inline-flex items-center gap-2 border border-[var(--color-line-strong)] text-white font-mono text-[11px] tracking-wider px-6 py-3 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors">CONTACT</Link>
          </motion.div>
        </div>
      </div>
    </>
  );
}
