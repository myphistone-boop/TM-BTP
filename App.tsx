import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { StickyMobileBar } from './components/StickyMobileBar';
import { Home } from './pages/Home';
import { Interventions } from './pages/Interventions';
import { GrosOeuvre } from './pages/GrosOeuvre';
import { About } from './pages/About';
import { Reviews } from './pages/Reviews';
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
            <Route path="/interventions" element={<Interventions />} />
            <Route path="/gros-oeuvre" element={<GrosOeuvre />} />
            <Route path="/a-propos" element={<About />} />
            <Route path="/avis" element={<Reviews />} />
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