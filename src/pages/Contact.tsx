import { useState } from 'react';
import { motion } from 'framer-motion';
import { studio } from '../content';
import { CaptionStrip, Section } from '../components/ui';
import { PageHeader } from '../components/sections';
import { Seo } from '../components/Seo';
import { routes } from '../config/routes';
import { Copy, Check, Send, Instagram, Play } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const seo = routes.find(r => r.path === '/contact')!.seo;

  const copyEmail = () => {
    navigator.clipboard.writeText(studio.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Seo title={seo.title} description={seo.description} />
      <PageHeader
        title="Start a"
        accentWord="project."
        description="Tell us about your project and we'll get back to you within 24 hours with a plan and quote."
        caption={{ index: '01', label: 'CONTACT' }}
      />
      <Section className="p-4 lg:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div>
            <div className="space-y-6 mb-8">
              <div className="border border-[var(--color-line)] p-4">
                <div className="font-mono text-[10px] tracking-wider text-[var(--color-text-dim)] mb-2">EMAIL</div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">{studio.email}</span>
                  <button onClick={copyEmail} className="p-1 hover:text-[var(--color-accent)] transition-colors">
                    {copied ? <Check size={14} className="text-[var(--color-accent)]" /> : <Copy size={14} />}
                  </button>
                </div>
              </div>
              <div className="border border-[var(--color-line)] p-4">
                <div className="font-mono text-[10px] tracking-wider text-[var(--color-text-dim)] mb-2">WHATSAPP</div>
                <span className="text-sm">{studio.whatsapp}</span>
              </div>
              <div className="border border-[var(--color-line)] p-4">
                <div className="font-mono text-[10px] tracking-wider text-[var(--color-text-dim)] mb-3">SOCIALS</div>
                <div className="flex gap-3">
                  <a href={studio.socials.instagram} className="w-8 h-8 border border-[var(--color-line)] flex items-center justify-center hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors">
                    <Instagram size={14} />
                  </a>
                  <a href={studio.socials.vimeo} className="w-8 h-8 border border-[var(--color-line)] flex items-center justify-center hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors">
                    <Play size={14} />
                  </a>
                </div>
              </div>
              <div className="border border-[var(--color-line)] p-4">
                <div className="font-mono text-[10px] tracking-wider text-[var(--color-text-dim)] mb-2">STUDIO HOURS</div>
                <div className="text-sm text-[var(--color-text-muted)]">Mon–Fri, 09:00–18:00 CET</div>
                <div className="text-xs text-[var(--color-text-dim)] mt-1">Berlin, Germany</div>
              </div>
            </div>
            <div className="border border-[var(--color-line)] p-6 text-center">
              <div className="font-mono text-[10px] tracking-wider text-[var(--color-text-dim)] mb-3">OR BOOK A CALL</div>
              <a href={studio.bookingUrl} target="_blank" rel="noopener" className="inline-flex items-center gap-2 border border-[var(--color-line-strong)] px-4 py-2 font-mono text-[11px] tracking-wider hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors">
                SCHEDULE ON CAL.COM →
              </a>
            </div>
          </div>
          <div>
            {submitted ? (
              <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} className="border border-[var(--color-accent)] p-8 text-center">
                <div className="w-12 h-12 border border-[var(--color-accent)] flex items-center justify-center mx-auto mb-4">
                  <Check size={20} className="text-[var(--color-accent)]" />
                </div>
                <h3 className="text-xl font-bold mb-2">Message sent.</h3>
                <p className="text-sm text-[var(--color-text-muted)]">We'll get back to you within 24 hours.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block font-mono text-[10px] tracking-wider text-[var(--color-text-dim)] mb-2">NAME *</label>
                  <input type="text" required className="w-full bg-transparent border border-[var(--color-line)] px-3 py-2.5 text-sm focus:border-[var(--color-accent)] focus:outline-none transition-colors" />
                </div>
                <div>
                  <label className="block font-mono text-[10px] tracking-wider text-[var(--color-text-dim)] mb-2">EMAIL *</label>
                  <input type="email" required className="w-full bg-transparent border border-[var(--color-line)] px-3 py-2.5 text-sm focus:border-[var(--color-accent)] focus:outline-none transition-colors" />
                </div>
                <div>
                  <label className="block font-mono text-[10px] tracking-wider text-[var(--color-text-dim)] mb-2">PROJECT DETAILS *</label>
                  <textarea required rows={4} className="w-full bg-transparent border border-[var(--color-line)] px-3 py-2.5 text-sm focus:border-[var(--color-accent)] focus:outline-none transition-colors resize-none" placeholder="Tell us about your project..." />
                </div>
                <button type="submit" className="w-full bg-white text-black py-3 font-mono text-[11px] tracking-wider font-bold hover:bg-[var(--color-accent)] transition-colors flex items-center justify-center gap-2">
                  <Send size={12} /> SEND MESSAGE
                </button>
              </form>
            )}
          </div>
        </div>
      </Section>
    </>
  );
}
