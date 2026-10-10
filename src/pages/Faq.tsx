import { useState, useMemo } from 'react';
import { faqItems } from '../content';
import { CaptionStrip, Section, Accordion } from '../components/ui';
import { PageHeader } from '../components/sections';
import { Seo } from '../components/Seo';
import { routes } from '../config/routes';

export default function Faq() {
  const [search, setSearch] = useState('');
  const [activeGroup, setActiveGroup] = useState('ALL');
  const seo = routes.find(r => r.path === '/faq')!.seo;

  const groups = ['ALL', ...Array.from(new Set(faqItems.map(f => f.group || 'General')))];

  const filtered = useMemo(() => {
    let items = faqItems;
    if (activeGroup !== 'ALL') {
      items = items.filter(f => (f.group || 'General') === activeGroup);
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      items = items.filter(f => f.q.toLowerCase().includes(q) || f.a.toLowerCase().includes(q));
    }
    return items;
  }, [search, activeGroup]);

  return (
    <>
      <Seo title={seo.title} description={seo.description} />
      <PageHeader
        title="Frequently"
        accentWord="asked."
        description="Answers to common questions about our services, process, and pricing."
        caption={{ index: '01', label: 'FAQ', right: `${faqItems.length} QUESTIONS` }}
      />
      
      <Section className="p-4 lg:p-8">
        <div className="max-w-2xl mx-auto">
          <input
            type="text"
            placeholder="Search questions..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-transparent border border-[var(--color-line)] px-4 py-3 text-sm focus:border-[var(--color-accent)] focus:outline-none transition-colors mb-6"
          />
          <div className="flex flex-wrap gap-2 mb-8">
            {groups.map((group) => (
              <button
                key={group}
                onClick={() => setActiveGroup(group)}
                className={`px-3 py-1.5 font-mono text-[11px] tracking-wider border transition-all ${
                  activeGroup === group
                    ? 'border-[var(--color-accent)] text-[var(--color-accent)] bg-[var(--color-accent)]/5'
                    : 'border-[var(--color-line)] text-[var(--color-text-muted)] hover:border-[var(--color-line-strong)]'
                }`}
              >
                {group}
              </button>
            ))}
          </div>
          {filtered.length > 0 ? (
            <Accordion items={filtered} />
          ) : (
            <div className="text-center py-12 text-[var(--color-text-muted)]">
              No questions match your search.
            </div>
          )}
        </div>
      </Section>
    </>
  );
}
