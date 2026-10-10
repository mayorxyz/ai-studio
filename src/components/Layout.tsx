import { ReactNode, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { studio } from '../content';
import { navRoutes, footerRoutes, moreRoutes } from '../config/routes';
import { site } from '../config/site';
import { Menu, X, Instagram } from 'lucide-react';

export default function Layout({ children }: { children: ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)] relative">
      <div className="fixed inset-0 pointer-events-none z-50">
        <div className="absolute left-[44px] top-0 bottom-0 w-px bg-[var(--color-line)] hidden lg:block" />
        <div className="absolute right-[28px] top-0 bottom-0 w-px bg-[var(--color-line)] hidden xl:block" />
        <div className="absolute top-[48px] left-0 right-0 h-px bg-[var(--color-line)]" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-[var(--color-line)]" />
      </div>

      <div className="fixed top-[48px] left-[44px] w-3 h-3 pointer-events-none z-50 hidden lg:block">
        <div className="absolute top-1/2 left-0 right-0 h-px bg-[var(--color-text-dim)]" />
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[var(--color-text-dim)]" />
      </div>
      <div className="fixed top-[48px] right-[28px] w-3 h-3 pointer-events-none z-50 hidden xl:block">
        <div className="absolute top-1/2 left-0 right-0 h-px bg-[var(--color-text-dim)]" />
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[var(--color-text-dim)]" />
      </div>

      <nav className="fixed top-0 left-0 right-0 h-[48px] z-[100] bg-[var(--color-bg)]/95 backdrop-blur-sm">
        <div className="h-full flex items-center">
          <Link to="/" className="h-full px-4 lg:px-0 lg:w-[44px] lg:flex lg:items-center lg:justify-center border-r border-[var(--color-line)] flex-shrink-0">
            <span className="font-mono text-xs font-bold tracking-wider">{studio.name.charAt(0)}{studio.name.charAt(1)}</span>
          </Link>
          <div className="hidden lg:flex items-center h-full">
            {navRoutes.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`h-full px-4 flex items-center border-r border-[var(--color-line)] font-mono text-[11px] tracking-wider transition-colors hover:text-[var(--color-accent)] ${
                  location.pathname === item.path ? 'text-[var(--color-accent)]' : 'text-[var(--color-text-muted)]'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="flex-1" />
          <div className="hidden lg:flex items-center h-full">
            <Link to="/pricing" className={`h-full px-4 flex items-center border-l border-[var(--color-line)] font-mono text-[11px] tracking-wider transition-colors hover:text-[var(--color-accent)] ${location.pathname === '/pricing' ? 'text-[var(--color-accent)]' : 'text-[var(--color-text-muted)]'}`}>PRICING</Link>
            <a href={studio.socials.instagram} target="_blank" rel="noopener" className="h-full w-[48px] flex items-center justify-center border-l border-[var(--color-line)] text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors">
              <Instagram size={14} />
            </a>
            <Link to="/contact" className="h-full px-5 flex items-center bg-white text-black font-mono text-[11px] font-bold tracking-wider hover:bg-[var(--color-accent)] transition-colors">
              START A PROJECT
            </Link>
          </div>
          <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden h-full w-[48px] flex items-center justify-center ml-auto border-l border-[var(--color-line)]">
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[90] bg-[var(--color-bg)] flex flex-col pt-[48px]">
            <div className="flex-1 flex flex-col p-8">
              {[...navRoutes, { path: '/pricing', label: 'PRICING', element: 'Pricing', showInNav: false, showInFooter: true, seo: { title: '', description: '' } }].map((item, i) => (
                <Link key={item.path} to={item.path} className="flex items-baseline gap-4 py-4 border-b border-[var(--color-line)]">
                  <span className="font-mono text-xs text-[var(--color-text-dim)]">{String(i + 1).padStart(2, '0')}</span>
                  <span className="text-3xl font-bold tracking-tight">{item.label}</span>
                </Link>
              ))}
            </div>
            <div className="p-8 border-t border-[var(--color-line)]">
              <Link to="/contact" className="block w-full py-4 bg-white text-black text-center font-mono text-sm font-bold tracking-wider">START A PROJECT</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="fixed right-0 top-[48px] bottom-0 w-[28px] z-40 hidden xl:flex flex-col items-center justify-between py-8">
        <div className="absolute inset-0 flex flex-col">
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className="flex-1 flex items-center justify-center">
              <div className={`w-2 h-px ${i % 5 === 0 ? 'bg-[var(--color-text-dim)]' : 'bg-[var(--color-line)]'}`} />
            </div>
          ))}
        </div>
        <div className="relative z-10 font-mono text-[9px] text-[var(--color-text-dim)]" style={{ writingMode: 'vertical-rl' }}>
          {Math.round(scrollY)}px
        </div>
      </div>

      <main className="pt-[48px] lg:pl-[44px] xl:pr-[28px]">
        <motion.div key={location.pathname} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.35 }}>
          {children}
        </motion.div>
      </main>

      <footer className="border-t border-[var(--color-line)] lg:ml-[44px] xl:mr-[28px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 p-8 lg:p-12">
          <div className="md:col-span-1">
            <div className="font-mono text-xs text-[var(--color-text-dim)] mb-4">© 2025</div>
            <div className="text-lg font-bold tracking-tight">{site.fullName}</div>
            <div className="font-mono text-[11px] text-[var(--color-text-muted)] mt-2">{studio.city}</div>
          </div>
          {site.footer.groups.map((group) => (
            <div key={group.title}>
              <div className="font-mono text-[10px] text-[var(--color-text-dim)] mb-3 tracking-wider">{group.title}</div>
              <div className="flex flex-col gap-2">
                {group.links.map((link) => (
                  <a key={link.label} href={link.path} className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors">
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
          <div>
            <div className="font-mono text-[10px] text-[var(--color-text-dim)] mb-3 tracking-wider">MORE</div>
            <div className="flex flex-col gap-2">
              {moreRoutes.map((route) => (
                <Link key={route.path} to={route.path} className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors">
                  {route.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-[var(--color-line)] px-8 py-4 flex flex-wrap items-center justify-between gap-4">
          <div className="font-mono text-[10px] text-[var(--color-text-dim)]">
            {site.fullName} — {studio.tagline}
          </div>
          <div className="flex gap-4">
            <Link to="/privacy" className="font-mono text-[10px] text-[var(--color-text-dim)] hover:text-[var(--color-text-muted)]">PRIVACY</Link>
            <Link to="/terms" className="font-mono text-[10px] text-[var(--color-text-dim)] hover:text-[var(--color-text-muted)]">TERMS</Link>
          </div>
        </div>
      </footer>

      <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden">
        <Link to="/contact" className="block w-full py-3 bg-white text-black text-center font-mono text-xs font-bold tracking-wider">START A PROJECT</Link>
      </div>
    </div>
  );
}
