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
import { QuoteWizard } from './components/QuoteWizard';

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const timer = setTimeout(() => {
        const element = document.getElementById(hash.replace('#', ''));
        if (element) element.scrollIntoView({ behavior: 'smooth' });
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
            <Route path="/devis" element={
              <div className="pt-32 pb-20 px-4">
                <div className="text-center mb-12">
                  <h1 className="text-3xl font-display font-bold text-primary dark:text-white">Demande de Devis</h1>
                </div>
                <div className="max-w-4xl mx-auto">
                  <QuoteWizard />
                </div>
              </div>
            } />
          </Routes>
        </main>
        <Footer />
        <StickyMobileBar />
      </div>
    </Router>
  );
};

export default App;