import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Layout from './components/Layout';

// Lazy load all pages
const Home = lazy(() => import('./pages/Home'));
const Work = lazy(() => import('./pages/Work'));
const CaseStudy = lazy(() => import('./pages/CaseStudy'));
const Services = lazy(() => import('./pages/Services'));
const ServiceDetail = lazy(() => import('./pages/ServiceDetail'));
const Process = lazy(() => import('./pages/Process'));
const Studio = lazy(() => import('./pages/Studio'));
const Pricing = lazy(() => import('./pages/Pricing'));
const Contact = lazy(() => import('./pages/Contact'));
const Journal = lazy(() => import('./pages/Journal'));
const JournalPost = lazy(() => import('./pages/JournalPost'));
const Reel = lazy(() => import('./pages/Reel'));
const Clients = lazy(() => import('./pages/Clients'));
const Careers = lazy(() => import('./pages/Careers'));
const CareerDetail = lazy(() => import('./pages/CareerDetail'));
const Faq = lazy(() => import('./pages/Faq'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Terms = lazy(() => import('./pages/Terms'));
const ThankYou = lazy(() => import('./pages/ThankYou'));
const Showcase = lazy(() => import('./pages/Showcase'));
const Tools = lazy(() => import('./pages/Tools'));
const Resources = lazy(() => import('./pages/Resources'));
const Press = lazy(() => import('./pages/Press'));
const Events = lazy(() => import('./pages/Events'));
const Workshops = lazy(() => import('./pages/Workshops'));
const Partners = lazy(() => import('./pages/Partners'));
const Testimonials = lazy(() => import('./pages/Testimonials'));
const Compare = lazy(() => import('./pages/Compare'));
const Start = lazy(() => import('./pages/Start'));
const Status = lazy(() => import('./pages/Status'));
const NotFound = lazy(() => import('./pages/NotFound'));

function Loading() {
  return (
    <div className="min-h-[50vh] flex items-center justify-center">
      <div className="font-mono text-[11px] tracking-wider text-[var(--color-text-dim)]">LOADING</div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="noise-overlay" />
      <Layout>
        <Suspense fallback={<Loading />}>
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/work" element={<Work />} />
              <Route path="/work/:slug" element={<CaseStudy />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/:slug" element={<ServiceDetail />} />
              <Route path="/process" element={<Process />} />
              <Route path="/studio" element={<Studio />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/journal" element={<Journal />} />
              <Route path="/journal/:slug" element={<JournalPost />} />
              <Route path="/reel" element={<Reel />} />
              <Route path="/clients" element={<Clients />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/careers/:slug" element={<CareerDetail />} />
              <Route path="/faq" element={<Faq />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/thank-you" element={<ThankYou />} />
              <Route path="/showcase/:slug" element={<Showcase />} />
              <Route path="/tools" element={<Tools />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/press" element={<Press />} />
              <Route path="/events" element={<Events />} />
              <Route path="/workshops" element={<Workshops />} />
              <Route path="/partners" element={<Partners />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/compare" element={<Compare />} />
              <Route path="/start" element={<Start />} />
              <Route path="/status" element={<Status />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AnimatePresence>
        </Suspense>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
