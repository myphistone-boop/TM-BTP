import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { StickyMobileBar } from './components/StickyMobileBar';
import { Home } from './pages/Home';
import { Realizations } from './pages/Realizations';
import { MaisonNeuve } from './pages/MaisonNeuve';
import { Renovation } from './pages/Renovation';
import { Photovoltaique } from './pages/Photovoltaique';
import { Climatisation } from './pages/Climatisation';

// Simple placeholder components for other pages to keep file count within limits
const PagePlaceholder: React.FC<{ title: string }> = ({ title }) => (
  <div className="pt-32 pb-20 px-4 max-w-7xl mx-auto text-center">
    <h1 className="text-4xl font-display font-bold text-primary dark:text-white mb-6">{title}</h1>
    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12">
      Cette page détaille nos services en {title.toLowerCase()}. Nous proposons une expertise technique complète et un suivi rigoureux.
    </p>
    <div className="bg-neutral-50 dark:bg-neutral-900 p-12 rounded-2xl border border-neutral-100 dark:border-neutral-800">
      <p className="font-bold text-gray-400">Contenu détaillé en cours de rédaction.</p>
      <a href="/#/devis" className="mt-6 inline-block px-6 py-3 bg-primary dark:bg-accent text-white dark:text-primary rounded-full font-bold">Demander un devis pour ce service</a>
    </div>
  </div>
);

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Small timeout to ensure DOM is ready during page transitions
      const timer = setTimeout(() => {
        const element = document.getElementById(hash.replace('#', ''));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      return () => clearTimeout(timer);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen font-sans bg-white dark:bg-neutral-950 text-neutral-900 dark:text-gray-100 transition-colors duration-300">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/maison-neuve" element={<MaisonNeuve />} />
            <Route path="/renovation" element={<Renovation />} />
            <Route path="/photovoltaique" element={<Photovoltaique />} />
            <Route path="/climatisation" element={<Climatisation />} />
            <Route path="/realisations" element={<Realizations />} />
            <Route path="/devis" element={<div className="pt-32 pb-20 px-4"><div className="text-center mb-12"><h1 className="text-3xl font-display font-bold text-primary dark:text-white">Demande de Devis</h1></div><div className="max-w-4xl mx-auto"><div className="bg-white dark:bg-neutral-900 rounded-2xl p-1"><QuoteWizard /></div></div></div>} />
            <Route path="/contact" element={<div className="pt-32"><PagePlaceholder title="Contact" /></div>} />
          </Routes>
        </main>
        <Footer />
        <StickyMobileBar />
      </div>
    </Router>
  );
};

// Explicit export for QuoteWizard to be used in Devis route if needed outside
import { QuoteWizard } from './components/QuoteWizard';

export default App;