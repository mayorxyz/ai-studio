import { useParams, Link } from 'react-router-dom';
import { journalPosts } from '../content';
import { CaptionStrip, Section, Tag } from '../components/ui';
import { CTASection } from '../components/sections';
import { Seo } from '../components/Seo';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function JournalPost() {
  const { slug } = useParams();
  const post = journalPosts.find(p => p.slug === slug);
  const currentIndex = journalPosts.findIndex(p => p.slug === slug);
  const prevPost = currentIndex > 0 ? journalPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < journalPosts.length - 1 ? journalPosts[currentIndex + 1] : null;

  if (!post) {
    return (
      <div className="p-8 text-center">
        <h1 className="text-2xl font-bold">Post not found</h1>
        <Link to="/journal" className="mt-4 inline-block text-[var(--color-accent)] font-mono text-sm">← Back to journal</Link>
      </div>
    );
  }

  return (
    <>
      <Seo title={`${post.title} — NOCTURN Journal`} description={post.excerpt} />
      
      <section className="p-4 lg:p-8 pt-12 lg:pt-20">
        <Link to="/journal" className="inline-flex items-center gap-2 font-mono text-[11px] tracking-wider text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors mb-8">
          <ArrowLeft size={12} /> BACK TO JOURNAL
        </Link>
        <div className="max-w-[720px]">
          <div className="flex items-center gap-3 mb-4">
            <Tag accent>{post.category}</Tag>
            <span className="font-mono text-[10px] text-[var(--color-text-dim)]">{post.date} · {post.readTime}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">{post.title}</h1>
          <p className="mt-4 text-base text-[var(--color-text-muted)] leading-relaxed">{post.excerpt}</p>
        </div>
      </section>

      <CaptionStrip index="01" label="ARTICLE" />
      <Section className="p-4 lg:p-8">
        <div className="max-w-[720px]">
          <div className="aspect-video relative overflow-hidden mb-8 border border-[var(--color-line)]" style={{ backgroundColor: post.color }}>
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
          </div>
          <div className="prose prose-invert max-w-none">
            <p className="text-base text-[var(--color-text-muted)] leading-relaxed mb-6">{post.body}</p>
            <p className="text-base text-[var(--color-text-muted)] leading-relaxed mb-6">
              This is placeholder content for the article body. In production, this would contain the full article text with rich formatting, images, and embeds.
            </p>
            <blockquote className="border-l-2 border-[var(--color-accent)] pl-4 my-8 italic font-serif text-xl text-[var(--color-text)]">
              "The best work happens at the intersection of constraints and creativity."
            </blockquote>
            <p className="text-base text-[var(--color-text-muted)] leading-relaxed">
              More article content would continue here with detailed explanations, examples, and insights from the project.
            </p>
          </div>
        </div>
      </Section>

      <CaptionStrip index="02" label="NAVIGATE" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[var(--color-line)] border-t border-[var(--color-line)]">
        {prevPost && (
          <Link to={`/journal/${prevPost.slug}`} className="bg-[var(--color-bg)] p-6 hover:bg-[var(--color-surface)] transition-colors group">
            <div className="font-mono text-[10px] text-[var(--color-text-dim)] mb-2 flex items-center gap-2"><ArrowLeft size={10} /> PREVIOUS</div>
            <div className="text-sm font-medium group-hover:text-[var(--color-accent)] transition-colors">{prevPost.title}</div>
          </Link>
        )}
        {nextPost && (
          <Link to={`/journal/${nextPost.slug}`} className="bg-[var(--color-bg)] p-6 hover:bg-[var(--color-surface)] transition-colors group text-right">
            <div className="font-mono text-[10px] text-[var(--color-text-dim)] mb-2 flex items-center gap-2 justify-end">NEXT <ArrowRight size={10} /></div>
            <div className="text-sm font-medium group-hover:text-[var(--color-accent)] transition-colors">{nextPost.title}</div>
          </Link>
        )}
      </div>

      <CTASection title="Enjoyed this?" accentWord="article?" primaryLabel="READ MORE" primaryHref="/journal" />
    </>
  );
}
