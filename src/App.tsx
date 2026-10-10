import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Layout from './components/Layout';
import Home from './pages/Home';
import Work from './pages/Work';
import CaseStudy from './pages/CaseStudy';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Process from './pages/Process';
import Studio from './pages/Studio';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import Journal from './pages/Journal';
import JournalPost from './pages/JournalPost';
import Reel from './pages/Reel';
import Clients from './pages/Clients';
import Careers from './pages/Careers';
import CareerDetail from './pages/CareerDetail';
import Faq from './pages/Faq';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import ThankYou from './pages/ThankYou';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <div className="noise-overlay" />
      <Layout>
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
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
