import { compareRows } from '../content';
import { CaptionStrip, Section } from '../components/ui';
import { PageHeader, CTASection } from '../components/sections';
import { Seo } from '../components/Seo';
import { routes } from '../config/routes';
import { Check, X } from 'lucide-react';

export default function Compare() {
  const seo = routes.find(r => r.path === '/compare')!.seo;

  const renderCell = (value: boolean | string) => {
    if (value === true) return <Check size={16} className="text-[var(--color-accent)]" />;
    if (value === false) return <X size={16} className="text-[var(--color-text-dim)]" />;
    return <span className="text-sm text-[var(--color-text-muted)]">{value}</span>;
  };

  return (
    <>
      <Seo title={seo.title} description={seo.description} />
      <PageHeader
        title="Nocturn vs"
        accentWord="others."
        description="See how Nocturn Engine compares to Unity, Unreal, and other game engines."
        caption={{ index: '01', label: 'COMPARE' }}
      />
      <Section className="p-4 lg:p-8">
        <div className="overflow-x-auto">
          <table className="w-full border border-[var(--color-line)]">
            <thead>
              <tr className="border-b border-[var(--color-line)] bg-[var(--color-surface)]">
                <th className="text-left px-4 py-3 font-mono text-[10px] tracking-wider text-[var(--color-text-dim)]">FEATURE</th>
                <th className="text-center px-4 py-3 font-mono text-[10px] tracking-wider text-[var(--color-accent)]">NOCTURN ENGINE</th>
                <th className="text-center px-4 py-3 font-mono text-[10px] tracking-wider text-[var(--color-text-dim)]">UNITY / UNREAL</th>
                <th className="text-center px-4 py-3 font-mono text-[10px] tracking-wider text-[var(--color-text-dim)]">CUSTOM ENGINE</th>
              </tr>
            </thead>
            <tbody>
              {compareRows.map((row, i) => (
                <tr key={i} className="border-b border-[var(--color-line)] last:border-b-0">
                  <td className="px-4 py-3 text-sm">{row.feature}</td>
                  <td className="px-4 py-3 text-center">{renderCell(row.studio)}</td>
                  <td className="px-4 py-3 text-center">{renderCell(row.agency)}</td>
                  <td className="px-4 py-3 text-center">{renderCell(row.inHouse)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>
      <CTASection title="Ready to" accentWord="compare?" description="Let's discuss your specific needs." primaryLabel="GET A QUOTE" primaryHref="/contact" />
    </>
  );
}
