import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { CaptionStrip, Section } from '../components/ui';
import { Seo } from '../components/Seo';
import { routes } from '../config/routes';
import { ArrowRight, ArrowLeft } from 'lucide-react';

const steps = [
  {
    title: 'What are you building?',
    options: ['2D Game', '3D Game', 'VR/AR Experience', 'Simulation', 'Multiplayer Game', 'Other'],
  },
  {
    title: 'Team size?',
    options: ['Solo developer', '2-5 people', '6-20 people', '20+ people', 'Enterprise'],
  },
  {
    title: 'Target platforms?',
    options: ['PC (Windows/Mac/Linux)', 'Mobile (iOS/Android)', 'Console (PS/Xbox/Switch)', 'Web (WebAssembly)', 'VR Headsets'],
  },
];

export default function Start() {
  const [currentStep, setCurrentStep] = useState(0);
  const [selections, setSelections] = useState<string[]>([]);
  const navigate = useNavigate();
  const seo = routes.find(r => r.path === '/start')!.seo;

  const handleSelect = (option: string) => {
    const newSelections = [...selections, option];
    setSelections(newSelections);
    
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Navigate to thank you with selections
      navigate('/thank-you');
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      setSelections(selections.slice(0, -1));
    }
  };

  return (
    <>
      <Seo title={seo.title} description={seo.description} />
      
      <section className="min-h-[80vh] flex items-center justify-center p-4">
        <div className="max-w-2xl w-full">
          <div className="mb-8">
            <div className="font-mono text-[10px] tracking-wider text-[var(--color-accent)] mb-2">STEP {currentStep + 1} OF {steps.length}</div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
              Get <span className="italic font-serif text-[var(--color-accent)]">started.</span>
            </h1>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-xl font-semibold mb-6">{steps[currentStep].title}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {steps[currentStep].options.map((option) => (
                  <button
                    key={option}
                    onClick={() => handleSelect(option)}
                    className="border border-[var(--color-line)] p-4 text-left hover:border-[var(--color-accent)] hover:bg-[var(--color-accent)]/5 transition-all"
                  >
                    <span className="text-sm">{option}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {currentStep > 0 && (
            <button onClick={handleBack} className="mt-6 inline-flex items-center gap-2 font-mono text-[11px] tracking-wider text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors">
              <ArrowLeft size={12} /> BACK
            </button>
          )}

          <div className="mt-8 flex gap-2">
            {steps.map((_, i) => (
              <div key={i} className={`h-1 flex-1 ${i <= currentStep ? 'bg-[var(--color-accent)]' : 'bg-[var(--color-line)]'}`} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
