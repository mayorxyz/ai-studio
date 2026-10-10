import { statusSlots } from '../content';
import { CaptionStrip, Section } from '../components/ui';
import { PageHeader, CTASection } from '../components/sections';
import { Seo } from '../components/Seo';
import { routes } from '../config/routes';

export default function Status() {
  const seo = routes.find(r => r.path === '/status')!.seo;
  const nextAvailable = statusSlots.find(s => s.booked < s.slots);

  return (
    <>
      <Seo title={seo.title} description={seo.description} />
      <PageHeader
        title="Release"
        accentWord="roadmap."
        description="Current development status and upcoming releases."
        caption={{ index: '01', label: 'ROADMAP' }}
      />
      
      <Section className="p-4 lg:p-8">
        {nextAvailable && (
          <div className="border border-[var(--color-accent)] p-6 mb-8">
            <div className="font-mono text-[10px] tracking-wider text-[var(--color-accent)] mb-2">NEXT AVAILABLE</div>
            <div className="text-2xl font-bold">{nextAvailable.month}</div>
            <div className="text-sm text-[var(--color-text-muted)] mt-1">{nextAvailable.slots - nextAvailable.booked} slots remaining</div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {statusSlots.map((slot, i) => {
            const available = slot.slots - slot.booked;
            const percentage = (slot.booked / slot.slots) * 100;
            
            return (
              <div key={i} className="border border-[var(--color-line)] p-6">
                <div className="font-mono text-[10px] tracking-wider text-[var(--color-text-dim)] mb-2">{slot.month.toUpperCase()}</div>
                <div className="text-3xl font-bold mb-2">{available}/{slot.slots}</div>
                <div className="text-xs text-[var(--color-text-muted)] mb-4">slots available</div>
                <div className="h-2 bg-[var(--color-line)] overflow-hidden">
                  <div className="h-full bg-[var(--color-accent)] transition-all" style={{ width: `${percentage}%` }} />
                </div>
                {available === 0 && (
                  <div className="mt-3 font-mono text-[10px] text-[var(--color-text-dim)]">FULLY BOOKED</div>
                )}
              </div>
            );
          })}
        </div>
      </Section>

      <CTASection title="Ready to" accentWord="book?" description="Secure your slot before they're gone." primaryLabel="START A PROJECT" primaryHref="/start" />
    </>
  );
}
