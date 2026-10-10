import { clients, testimonials } from '../content';
import { CaptionStrip, Section } from '../components/ui';
import { PageHeader, LogoStrip, TestimonialSlider } from '../components/sections';
import { Seo } from '../components/Seo';
import { routes } from '../config/routes';

const metrics = [
  { value: '50+', label: 'PROJECTS DELIVERED' },
  { value: '98%', label: 'CLIENT SATISFACTION' },
  { value: '2.4M', label: 'TOTAL VIEWS' },
  { value: '12', label: 'AWARDS & RECOGNITION' },
];

export default function Clients() {
  const seo = routes.find(r => r.path === '/clients')!.seo;

  return (
    <>
      <Seo title={seo.title} description={seo.description} />
      <PageHeader
        title="Trusted"
        accentWord="by."
        description="We work with forward-thinking brands and startups who value craft, innovation, and results."
        caption={{ index: '01', label: 'CLIENTS' }}
      />
      
      <Section className="p-4 lg:p-8">
        <LogoStrip logos={clients} />
      </Section>

      <CaptionStrip index="02" label="METRICS" />
      <Section className="p-4 lg:p-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {metrics.map((metric) => (
            <div key={metric.label} className="border border-[var(--color-line)] p-6 text-center">
              <div className="text-3xl lg:text-4xl font-bold tracking-tight">{metric.value}</div>
              <div className="font-mono text-[10px] tracking-wider text-[var(--color-text-dim)] mt-2">{metric.label}</div>
            </div>
          ))}
        </div>
      </Section>

      <CaptionStrip index="03" label="TESTIMONIALS" right="FROM CLIENTS" />
      <Section className="p-4 lg:p-8">
        <TestimonialSlider testimonials={testimonials} />
      </Section>
    </>
  );
}
