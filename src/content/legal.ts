import type { LegalPage } from './types';

export const privacyPolicy: LegalPage = {
  slug: 'privacy',
  title: 'Privacy Policy',
  lastUpdated: '2025-01-01',
  sections: [
    {
      heading: 'Introduction',
      content: 'This privacy policy explains how NOCTURN Studio ("we", "us", "our") collects, uses, and protects your personal data when you use our website and services. We are committed to protecting your privacy and handling your data transparently.',
    },
    {
      heading: 'Data We Collect',
      content: 'We collect data you provide directly (name, email, company, project details via contact forms), data collected automatically (IP address, browser type, pages visited via analytics), and data from third parties (if you engage us through a referral).',
    },
    {
      heading: 'How We Use Data',
      content: 'We use your data to: respond to inquiries, provide our services, send project updates, improve our website, and comply with legal obligations. We do not sell your data to third parties.',
    },
    {
      heading: 'Data Retention',
      content: 'We retain contact form submissions for 2 years. Project data is retained for the duration of our business relationship plus 1 year for legal purposes. Analytics data is retained for 12 months.',
    },
    {
      heading: 'Your Rights',
      content: 'You have the right to access, correct, delete, or port your data. You can object to processing or withdraw consent at any time. Contact us at privacy@nocturn.studio to exercise these rights.',
    },
    {
      heading: 'Cookies',
      content: 'We use minimal cookies for website functionality. We use Plausible Analytics which does not use cookies and respects Do Not Track. No advertising or tracking cookies are used.',
    },
    {
      heading: 'Contact',
      content: 'For privacy-related questions, contact us at privacy@nocturn.studio or write to NOCTURN Studio, Berlin, Germany.',
    },
  ],
};

export const termsOfService: LegalPage = {
  slug: 'terms',
  title: 'Terms of Service',
  lastUpdated: '2025-01-01',
  sections: [
    {
      heading: 'Agreement',
      content: 'By engaging NOCTURN Studio for services or using our website, you agree to these terms. If you do not agree, do not use our services or website.',
    },
    {
      heading: 'Services',
      content: 'We provide video production, animation, AI-assisted content creation, and related services as described in our proposals and statements of work. Specific deliverables, timelines, and pricing are agreed per project.',
    },
    {
      heading: 'Payment',
      content: 'Payment terms are 50% upfront, 50% on delivery unless otherwise agreed. Late payments incur 5% monthly interest. All prices are in EUR excluding VAT unless stated.',
    },
    {
      heading: 'Intellectual Property',
      content: 'Upon full payment, we transfer all rights to final deliverables as specified in your package. We retain the right to showcase work in our portfolio unless otherwise agreed. Source files are included per your package tier.',
    },
    {
      heading: 'Revisions',
      content: 'Each package includes a specified number of revision rounds. Additional revisions are billed at our hourly rate. Major scope changes require a change order.',
    },
    {
      heading: 'Limitation of Liability',
      content: 'Our total liability is limited to the project fee paid. We are not liable for indirect, incidental, or consequential damages. We maintain professional indemnity insurance.',
    },
    {
      heading: 'Termination',
      content: 'Either party may terminate with 14 days written notice. On termination, you pay for work completed to date. We deliver all work-in-progress files.',
    },
    {
      heading: 'Governing Law',
      content: 'These terms are governed by German law. Disputes are resolved in Berlin courts unless otherwise agreed.',
    },
  ],
};
