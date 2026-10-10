import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../content';
import { CaptionStrip, Section, MediaCell } from '../components/ui';
import { PageHeader } from '../components/sections';
import { Seo } from '../components/Seo';
import { routes } from '../config/routes';

const categories = ['ALL', 'FILM', 'ANIMATION', 'AI VIDEO', 'BRAND', 'AUTOMATION'];

export default function Work() {
  const [activeFilter, setActiveFilter] = useState('ALL');
  const seo = routes.find(r => r.path === '/work')!.seo;

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'ALL') return projects;
    return projects.filter(p => p.category.includes(activeFilter));
  }, [activeFilter]);

  return (
    <>
      <Seo title={seo.title} description={seo.description} />
      <PageHeader
        title="The"
        accentWord="work."
        description="A selection of films, animations, AI-generated content, and brand work from the past two years."
        caption={{ index: '01', label: 'WORK', right: `${projects.length} PROJECTS` }}
      />
      <Section className="p-4 lg:p-8">
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-3 py-1.5 font-mono text-[11px] tracking-wider border transition-all ${
                activeFilter === cat
                  ? 'border-[var(--color-accent)] text-[var(--color-accent)] bg-[var(--color-accent)]/5'
                  : 'border-[var(--color-line)] text-[var(--color-text-muted)] hover:border-[var(--color-line-strong)] hover:text-[var(--color-text)]'
              }`}
            >
              {cat}
            </button>
          ))}
          <span className="ml-auto self-center font-mono text-[10px] text-[var(--color-text-dim)]">
            {filteredProjects.length} results
          </span>
        </div>
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--color-line)]">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
              >
                <MediaCell
                  title={project.title}
                  description={project.summary}
                  category={project.category[0]}
                  index={String(i + 1).padStart(2, '0')}
                  color={project.color}
                  href={`/work/${project.slug}`}
                  year={project.year}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </Section>
    </>
  );
}
