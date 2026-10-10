// Barrel export for all content
export { studio } from './studio';
export { projects } from './projects';
export { services } from './services';
export { plans } from './plans';
export { team } from './team';
export { testimonials } from './testimonials';
export { processSteps } from './process';
export { journalPosts } from './journal';
export { clients, clientLogos } from './clients';
export { faqItems } from './faq';
export { careers } from './careers';
export { privacyPolicy, termsOfService } from './legal';

// Re-export types
export type {
  Project,
  Service,
  Plan,
  TeamMember,
  Testimonial,
  ProcessStep,
  JournalPost,
  Career,
  LegalPage,
  StudioInfo,
  RouteConfig,
  FAQ,
} from './types';
