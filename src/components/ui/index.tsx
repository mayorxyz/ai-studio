import { ReactNode, useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

// Caption Strip
export function CaptionStrip({ index, label, right }: { index: string; label: string; right?: string }) {
  return (
    <div className="border-t border-b border-[var(--color-line)] px-4 lg:px-8 py-3 flex items-center justify-between">
      <div className="font-mono text-[10px] tracking-wider text-[var(--color-text-dim)]">
        {index} / {label}
      </div>
      {right && (
        <div className="font-mono text-[10px] tracking-wider text-[var(--color-text-dim)]">
          {right}
        </div>
      )}
    </div>
  );
}

// Section wrapper
export function Section({ children, className = '', id }: { children: ReactNode; className?: string; id?: string }) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.section
      ref={ref}
      id={id}
      className={className}
      initial={{ opacity: 0, y: 16 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      {children}
    </motion.section>
  );
}

// Media Cell
export function MediaCell({ 
  title, 
  description, 
  category, 
  index, 
  color, 
  href,
  year,
  image,
  video,
  poster,
}: { 
  title: string; 
  description: string; 
  category: string; 
  index: string; 
  color: string;
  href: string;
  year?: number;
  image?: string;
  video?: string;
  poster?: string;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      if (isHovered && video) {
        videoRef.current.play().catch(() => {});
      } else {
        videoRef.current.pause();
      }
    }
  }, [isHovered, video]);

  return (
    <a
      href={href}
      className="group block border border-[var(--color-line)] hover:border-[var(--color-line-strong)] transition-colors duration-150"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center justify-between px-3 py-2 border-b border-[var(--color-line)]">
        <span className="font-mono text-[10px] tracking-wider text-[var(--color-text-dim)]">{category}</span>
        <span className={`font-mono text-[10px] tracking-wider transition-colors ${isHovered ? 'text-[var(--color-accent)]' : 'text-[var(--color-text-dim)]'}`}>{index}</span>
      </div>
      <div className="relative aspect-video overflow-hidden" style={{ backgroundColor: color }}>
        {video && isHovered ? (
          <video
            ref={videoRef}
            src={video}
            poster={poster || image}
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (image || poster) ? (
          <img src={image || poster} alt={title} className="absolute inset-0 w-full h-full object-cover" />
        ) : (
          <>
            <div className="absolute inset-0 opacity-40" style={{ background: `linear-gradient(135deg, ${color} 0%, ${color}dd 50%, ${color}88 100%)` }} />
            <div className="absolute inset-0 opacity-20" style={{
              backgroundImage: 'linear-gradient(#ffffff08 1px, transparent 1px), linear-gradient(90deg, #ffffff08 1px, transparent 1px)',
              backgroundSize: '20px 20px',
            }} />
          </>
        )}
        <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-200 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <div className="w-10 h-10 border border-white/30 flex items-center justify-center">
            <div className="w-0 h-0 border-l-[8px] border-l-white border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent ml-1" />
          </div>
        </div>
      </div>
      <div className="px-3 py-3 border-t border-[var(--color-line)]">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="text-sm font-medium tracking-tight">{title}</h3>
            <p className="text-xs text-[var(--color-text-muted)] mt-1">{description}</p>
          </div>
          {year && <span className="font-mono text-[10px] text-[var(--color-text-dim)] flex-shrink-0">{year}</span>}
        </div>
      </div>
    </a>
  );
}

// Tag
export function Tag({ children, accent }: { children: ReactNode; accent?: boolean }) {
  return (
    <span className={`inline-block px-2 py-0.5 border font-mono text-[10px] tracking-wider ${
      accent ? 'border-[var(--color-accent)] text-[var(--color-accent)]' : 'border-[var(--color-line-strong)] text-[var(--color-text-muted)]'
    }`}>
      {children}
    </span>
  );
}

// Button
export function Button({ 
  children, 
  variant = 'primary', 
  className = '', 
  onClick,
  href,
  type = 'button',
}: { 
  children: ReactNode; 
  variant?: 'primary' | 'outline' | 'ghost'; 
  className?: string;
  onClick?: () => void;
  href?: string;
  type?: 'button' | 'submit' | 'reset';
}) {
  const base = 'inline-flex items-center justify-center gap-2 font-mono text-[11px] tracking-wider px-5 py-3 transition-all duration-180 cursor-pointer';
  const variants = {
    primary: 'bg-white text-black hover:bg-[var(--color-accent)] hover:text-black',
    outline: 'border border-[var(--color-line-strong)] text-[var(--color-text)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]',
    ghost: 'text-[var(--color-text-muted)] hover:text-[var(--color-accent)]',
  };

  if (href) {
    return (
      <a href={href} className={`${base} ${variants[variant]} ${className}`}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
}

// Ticker
export function Ticker({ items }: { items: string[] }) {
  const doubled = [...items, ...items];
  return (
    <div className="border-t border-b border-[var(--color-line)] overflow-hidden py-3">
      <div className="flex animate-ticker whitespace-nowrap">
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-4 mx-4">
            <span className="w-1.5 h-1.5 bg-[var(--color-accent)] rounded-full flex-shrink-0" />
            <span className="font-mono text-[11px] tracking-wider text-[var(--color-text-muted)]">{item}</span>
          </span>
        ))}
      </div>
    </div>
  );
}

// Counter
export function Counter({ value, label }: { value: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const [display, setDisplay] = useState('0');

  useEffect(() => {
    if (!isInView) return;
    const numericPart = value.replace(/[^0-9.]/g, '');
    const suffix = value.replace(/[0-9.]/g, '');
    const target = parseFloat(numericPart);
    if (isNaN(target)) {
      setDisplay(value);
      return;
    }
    
    const duration = 1200;
    const start = Date.now();
    const tick = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(target * eased);
      setDisplay(current + suffix);
      if (progress < 1) requestAnimationFrame(tick);
      else setDisplay(value);
    };
    requestAnimationFrame(tick);
  }, [isInView, value]);

  return (
    <div ref={ref} className="border border-[var(--color-line)] p-6 text-center">
      <div className="text-4xl lg:text-5xl font-bold tracking-tight">{display}</div>
      <div className="font-mono text-[10px] tracking-wider text-[var(--color-text-dim)] mt-2">{label}</div>
    </div>
  );
}

// Accordion
export function Accordion({ items }: { items: { q: string; a: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="border border-[var(--color-line)]">
      {items.map((item, i) => (
        <div key={i} className="border-b border-[var(--color-line)] last:border-b-0">
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex items-center justify-between px-4 py-4 text-left hover:bg-[var(--color-surface)] transition-colors"
            aria-expanded={openIndex === i}
          >
            <span className="text-sm font-medium pr-4">{item.q}</span>
            <span className={`font-mono text-xs text-[var(--color-text-dim)] transition-transform ${openIndex === i ? 'rotate-45' : ''}`}>+</span>
          </button>
          <motion.div
            initial={false}
            animate={{ height: openIndex === i ? 'auto' : 0, opacity: openIndex === i ? 1 : 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-4 text-sm text-[var(--color-text-muted)] leading-relaxed">
              {item.a}
            </div>
          </motion.div>
        </div>
      ))}
    </div>
  );
}
