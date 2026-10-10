import { useState } from 'react';
import { motion } from 'framer-motion';
import { STUDIO } from '../data';
import { CaptionStrip, Section } from '../components/Shared';
import { Copy, Check, Send, Instagram, Play } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: '',
    references: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(STUDIO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      {/* Hero */}
      <section className="p-4 lg:p-8 pt-12 lg:pt-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Start a <span className="italic font-serif text-[var(--color-accent)]">project.</span>
          </h1>
          <p className="mt-4 text-base text-[var(--color-text-muted)] max-w-lg">
            Tell us about your project and we'll get back to you within 24 hours with a plan and quote.
          </p>
        </div>
      </section>

      <CaptionStrip index="01" label="CONTACT" />

      {/* Two columns */}
      <Section className="p-4 lg:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left: info */}
          <div>
            <div className="space-y-6 mb-8">
              {/* Email */}
              <div className="border border-[var(--color-line)] p-4">
                <div className="font-mono text-[10px] tracking-wider text-[var(--color-text-dim)] mb-2">EMAIL</div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">{STUDIO.email}</span>
                  <button onClick={copyEmail} className="p-1 hover:text-[var(--color-accent)] transition-colors">
                    {copied ? <Check size={14} className="text-[var(--color-accent)]" /> : <Copy size={14} />}
                  </button>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="border border-[var(--color-line)] p-4">
                <div className="font-mono text-[10px] tracking-wider text-[var(--color-text-dim)] mb-2">WHATSAPP</div>
                <span className="text-sm">{STUDIO.whatsapp}</span>
              </div>

              {/* Socials */}
              <div className="border border-[var(--color-line)] p-4">
                <div className="font-mono text-[10px] tracking-wider text-[var(--color-text-dim)] mb-3">SOCIALS</div>
                <div className="flex gap-3">
                  <a href={STUDIO.socials.instagram} className="w-8 h-8 border border-[var(--color-line)] flex items-center justify-center hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors">
                    <Instagram size={14} />
                  </a>
                  <a href={STUDIO.socials.vimeo} className="w-8 h-8 border border-[var(--color-line)] flex items-center justify-center hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors">
                    <Play size={14} />
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="border border-[var(--color-line)] p-4">
                <div className="font-mono text-[10px] tracking-wider text-[var(--color-text-dim)] mb-2">STUDIO HOURS</div>
                <div className="text-sm text-[var(--color-text-muted)]">Mon–Fri, 09:00–18:00 CET</div>
                <div className="text-xs text-[var(--color-text-dim)] mt-1">Berlin, Germany</div>
              </div>
            </div>

            {/* Booking embed placeholder */}
            <div className="border border-[var(--color-line)] p-6 text-center">
              <div className="font-mono text-[10px] tracking-wider text-[var(--color-text-dim)] mb-3">OR BOOK A CALL</div>
              <a href={STUDIO.bookingUrl} target="_blank" rel="noopener" className="inline-flex items-center gap-2 border border-[var(--color-line-strong)] px-4 py-2 font-mono text-[11px] tracking-wider hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors">
                SCHEDULE ON CAL.COM →
              </a>
            </div>
          </div>

          {/* Right: form */}
          <div>
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="border border-[var(--color-accent)] p-8 text-center"
              >
                <div className="w-12 h-12 border border-[var(--color-accent)] flex items-center justify-center mx-auto mb-4">
                  <Check size={20} className="text-[var(--color-accent)]" />
                </div>
                <h3 className="text-xl font-bold mb-2">Message sent.</h3>
                <p className="text-sm text-[var(--color-text-muted)]">
                  We'll get back to you within 24 hours. Check your email for a confirmation.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <label className="block font-mono text-[10px] tracking-wider text-[var(--color-text-dim)] mb-2">NAME *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-transparent border border-[var(--color-line)] px-3 py-2.5 text-sm focus:border-[var(--color-accent)] focus:outline-none transition-colors"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block font-mono text-[10px] tracking-wider text-[var(--color-text-dim)] mb-2">EMAIL *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-transparent border border-[var(--color-line)] px-3 py-2.5 text-sm focus:border-[var(--color-accent)] focus:outline-none transition-colors"
                  />
                </div>

                {/* Company */}
                <div>
                  <label className="block font-mono text-[10px] tracking-wider text-[var(--color-text-dim)] mb-2">COMPANY</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full bg-transparent border border-[var(--color-line)] px-3 py-2.5 text-sm focus:border-[var(--color-accent)] focus:outline-none transition-colors"
                  />
                </div>

                {/* Project type */}
                <div>
                  <label className="block font-mono text-[10px] tracking-wider text-[var(--color-text-dim)] mb-2">PROJECT TYPE</label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full bg-[var(--color-bg)] border border-[var(--color-line)] px-3 py-2.5 text-sm focus:border-[var(--color-accent)] focus:outline-none transition-colors appearance-none"
                  >
                    <option value="">Select...</option>
                    <option value="film">Brand Film</option>
                    <option value="animation">Animation</option>
                    <option value="ai-video">AI Video</option>
                    <option value="automation">Video Automation</option>
                    <option value="motion">Motion Design</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Budget */}
                <div>
                  <label className="block font-mono text-[10px] tracking-wider text-[var(--color-text-dim)] mb-2">BUDGET RANGE</label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full bg-[var(--color-bg)] border border-[var(--color-line)] px-3 py-2.5 text-sm focus:border-[var(--color-accent)] focus:outline-none transition-colors appearance-none"
                  >
                    <option value="">Select...</option>
                    <option value="3-5k">€3,000 – €5,000</option>
                    <option value="5-10k">€5,000 – €10,000</option>
                    <option value="10-20k">€10,000 – €20,000</option>
                    <option value="20k+">€20,000+</option>
                    <option value="retainer">Monthly Retainer</option>
                  </select>
                </div>

                {/* Timeline */}
                <div>
                  <label className="block font-mono text-[10px] tracking-wider text-[var(--color-text-dim)] mb-2">TIMELINE</label>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full bg-[var(--color-bg)] border border-[var(--color-line)] px-3 py-2.5 text-sm focus:border-[var(--color-accent)] focus:outline-none transition-colors appearance-none"
                  >
                    <option value="">Select...</option>
                    <option value="asap">ASAP</option>
                    <option value="2-4weeks">2–4 weeks</option>
                    <option value="1-2months">1–2 months</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block font-mono text-[10px] tracking-wider text-[var(--color-text-dim)] mb-2">PROJECT DETAILS *</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-transparent border border-[var(--color-line)] px-3 py-2.5 text-sm focus:border-[var(--color-accent)] focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your project, goals, and any specific requirements..."
                  />
                </div>

                {/* References */}
                <div>
                  <label className="block font-mono text-[10px] tracking-wider text-[var(--color-text-dim)] mb-2">REFERENCE LINKS</label>
                  <input
                    type="text"
                    name="references"
                    value={formData.references}
                    onChange={handleChange}
                    placeholder="Links to work you admire..."
                    className="w-full bg-transparent border border-[var(--color-line)] px-3 py-2.5 text-sm focus:border-[var(--color-accent)] focus:outline-none transition-colors"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full bg-white text-black py-3 font-mono text-[11px] tracking-wider font-bold hover:bg-[var(--color-accent)] transition-colors flex items-center justify-center gap-2"
                >
                  <Send size={12} /> SEND MESSAGE
                </button>
              </form>
            )}
          </div>
        </div>
      </Section>
    </div>
  );
}
