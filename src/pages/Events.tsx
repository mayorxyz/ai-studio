import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { events } from '../content';
import { CaptionStrip, Section, Tag } from '../components/ui';
import { PageHeader } from '../components/sections';
import { Seo } from '../components/Seo';
import { routes } from '../config/routes';
import { ExternalLink, Calendar, MapPin } from 'lucide-react';

export default function Events() {
  const [filter, setFilter] = useState<'ALL' | 'UPCOMING' | 'PAST'>('ALL');
  const seo = routes.find(r => r.path === '/events')!.seo;

  const filtered = useMemo(() => {
    if (filter === 'ALL') return events;
    if (filter === 'UPCOMING') return events.filter(e => !e.past);
    return events.filter(e => e.past);
  }, [filter]);

  return (
    <>
      <Seo title={seo.title} description={seo.description} />
      <PageHeader
        title="Upcoming"
        accentWord="events."
        description="Talks, workshops, and screenings."
        caption={{ index: '01', label: 'EVENTS', right: `${events.length} EVENTS` }}
      />
      <Section className="p-4 lg:p-8">
        <div className="flex gap-2 mb-8">
          {(['ALL', 'UPCOMING', 'PAST'] as const).map((f) => (
            <button key={f} onClick={() => setFilter(f)} className={`px-3 py-1.5 font-mono text-[11px] tracking-wider border transition-all ${filter === f ? 'border-[var(--color-accent)] text-[var(--color-accent)] bg-[var(--color-accent)]/5' : 'border-[var(--color-line)] text-[var(--color-text-muted)] hover:border-[var(--color-line-strong)]'}`}>
              {f}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filtered.map((event, i) => (
            <motion.div key={event.slug} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: i * 0.05 }}>
              <div className="border border-[var(--color-line)] p-6 hover:border-[var(--color-accent)]/50 transition-colors h-full flex flex-col">
                <div className="aspect-video relative overflow-hidden mb-4" style={{ backgroundColor: event.color }}>
                  <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '25px 25px' }} />
                  <div className="absolute top-3 left-3">
                    <Tag accent>{event.type.toUpperCase()}</Tag>
                  </div>
                  {event.past && (
                    <div className="absolute top-3 right-3">
                      <span className="px-2 py-0.5 bg-[var(--color-text-dim)] text-black font-mono text-[9px] tracking-wider">PAST</span>
                    </div>
                  )}
                </div>
                <h3 className="text-lg font-semibold tracking-tight mb-2">{event.title}</h3>
                <p className="text-sm text-[var(--color-text-muted)] mb-4 flex-1">{event.description}</p>
                <div className="flex items-center gap-4 text-xs text-[var(--color-text-muted)] mb-4">
                  <span className="flex items-center gap-1"><Calendar size={12} /> {event.date}</span>
                  <span className="flex items-center gap-1"><MapPin size={12} /> {event.location}</span>
                </div>
                {event.link && !event.past && (
                  <a href={event.link} target="_blank" rel="noopener" className="inline-flex items-center gap-2 font-mono text-[11px] tracking-wider text-[var(--color-accent)] hover:underline">
                    <ExternalLink size={12} /> LEARN MORE
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </Section>
    </>
  );
}
