import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { journalPosts } from '../content';
import { CaptionStrip, Section, Tag } from '../components/ui';
import { PageHeader } from '../components/sections';
import { Seo } from '../components/Seo';
import { routes } from '../config/routes';

export default function Journal() {
  const [activeFilter, setActiveFilter] = useState('ALL');
  const seo = routes.find(r => r.path === '/journal')!.seo;
  const categories = ['ALL', ...Array.from(new Set(journalPosts.map(p => p.category)))];

  const filtered = useMemo(() => {
    if (activeFilter === 'ALL') return journalPosts;
    return journalPosts.filter(p => p.category === activeFilter);
  }, [activeFilter]);

  return (
    <>
      <Seo title={seo.title} description={seo.description} />
      <PageHeader
        title="The"
        accentWord="journal."
        description="Behind the scenes, tutorials, and insights from our studio."
        caption={{ index: '01', label: 'JOURNAL', right: `${journalPosts.length} POSTS` }}
      />
      <Section className="p-4 lg:p-8">
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button key={cat} onClick={() => setActiveFilter(cat)} className={`px-3 py-1.5 font-mono text-[11px] tracking-wider border transition-all ${activeFilter === cat ? 'border-[var(--color-accent)] text-[var(--color-accent)] bg-[var(--color-accent)]/5' : 'border-[var(--color-line)] text-[var(--color-text-muted)] hover:border-[var(--color-line-strong)]'}`}>
              {cat}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((post, i) => (
            <motion.div key={post.slug} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: i * 0.05 }}>
              <Link to={`/journal/${post.slug}`} className="block border border-[var(--color-line)] hover:border-[var(--color-line-strong)] transition-colors group">
                <div className="aspect-video relative overflow-hidden" style={{ backgroundColor: post.color }}>
                  <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '25px 25px' }} />
                  <div className="absolute top-3 left-3">
                    <Tag accent>{post.category}</Tag>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-medium tracking-tight group-hover:text-[var(--color-accent)] transition-colors">{post.title}</h3>
                  <p className="text-xs text-[var(--color-text-muted)] mt-2">{post.excerpt}</p>
                  <div className="flex items-center gap-3 mt-3 font-mono text-[10px] text-[var(--color-text-dim)]">
                    <span>{post.date}</span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Section>
    </>
  );
}
