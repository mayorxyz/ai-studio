import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Seo } from '../components/Seo';
import { Check } from 'lucide-react';

export default function ThankYou() {
  return (
    <>
      <Seo title="Thank You — NOCTURN Studio" description="Your message has been received." />
      
      <div className="min-h-[80vh] flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="text-center max-w-md"
        >
          <div className="w-16 h-16 border-2 border-[var(--color-accent)] flex items-center justify-center mx-auto mb-6">
            <Check size={28} className="text-[var(--color-accent)]" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Message <span className="italic font-serif text-[var(--color-accent)]">received.</span>
          </h1>
          <p className="text-base text-[var(--color-text-muted)] leading-relaxed mb-8">
            Thanks for reaching out. We'll review your project details and get back to you within 24 hours with a plan and quote.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/" className="inline-flex items-center gap-2 bg-white text-black font-mono text-[11px] tracking-wider px-6 py-3 hover:bg-[var(--color-accent)] transition-colors">
              BACK TO HOME
            </Link>
            <Link to="/work" className="inline-flex items-center gap-2 border border-[var(--color-line-strong)] text-white font-mono text-[11px] tracking-wider px-6 py-3 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors">
              VIEW OUR WORK
            </Link>
          </div>
        </motion.div>
      </div>
    </>
  );
}
