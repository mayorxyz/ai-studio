import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { routes } from '../config/routes';
import { Seo } from '../components/Seo';
import { Search } from 'lucide-react';

export default function NotFound() {
  const [search, setSearch] = useState('');
  const filteredRoutes = routes.filter(r => 
    r.label.toLowerCase().includes(search.toLowerCase()) ||
    r.path.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Seo title="404 — NOCTURN Studio" description="Page not found." />
      <div className="min-h-[80vh] flex items-center justify-center p-4">
        <div className="text-center max-w-2xl w-full">
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
          
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="mt-8">
            <div className="relative max-w-md mx-auto mb-8">
              <input
                type="text"
                placeholder="Search pages..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-transparent border border-[var(--color-line)] px-4 py-3 pl-10 text-sm focus:border-[var(--color-accent)] focus:outline-none transition-colors"
              />
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-text-dim)]" />
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-left">
              {filteredRoutes.slice(0, 12).map((route) => (
                <Link key={route.path} to={route.path} className="border border-[var(--color-line)] px-3 py-2 font-mono text-[11px] tracking-wider text-[var(--color-text-muted)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors">
                  {route.label}
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
