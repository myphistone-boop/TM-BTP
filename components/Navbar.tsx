import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Icons } from './Icons';
import { COMPANY_INFO } from '../types';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Dark mode state
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      return localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    }
    return 'light';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'Maison Neuve', path: '/maison-neuve' },
    { name: 'Rénovation', path: '/renovation' },
    { name: 'Photovoltaïque', path: '/photovoltaique' },
    { name: 'Climatisation', path: '/climatisation' },
    { name: 'Réalisations', path: '/realisations' },
  ];

  const closeMenu = () => setIsMobileMenuOpen(false);

  // Determine navbar styling: solid if scrolled OR if mobile menu is open
  const navbarClasses = isScrolled || isMobileMenuOpen
    ? 'bg-white dark:bg-neutral-900 shadow-sm py-3' 
    : 'bg-transparent py-5';

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-[padding,box-shadow] duration-300 ease-in-out ${navbarClasses}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="group" onClick={closeMenu}>
            <div className="flex flex-col">
              <span className="font-display font-bold text-2xl tracking-tight transition-colors text-primary dark:text-white">
                TM BTP
              </span>
              <span className="text-[10px] tracking-[0.2em] text-accent uppercase font-medium">
                Expertise Premium
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium tracking-wide hover:text-accent dark:hover:text-accent transition-colors relative py-1
                  ${location.pathname === link.path 
                    ? 'text-accent' 
                    : 'text-primary dark:text-gray-300'}
                `}
              >
                {link.name}
                {location.pathname === link.path && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent rounded-full"></span>
                )}
              </Link>
            ))}
            
            {/* Theme Toggle */}
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full text-primary dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle Dark Mode"
            >
              {theme === 'dark' ? <Icons.Sun size={20} /> : <Icons.Moon size={20} />}
            </button>

            <Link 
              to="/#devis"
              className="px-5 py-2.5 bg-primary dark:bg-accent text-white dark:text-primary text-xs font-bold uppercase tracking-wider rounded-full hover:bg-secondary dark:hover:bg-white transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 border border-transparent"
            >
              Devis
            </Link>
          </div>

          {/* Mobile Toggle (Hamburger) */}
          <div className="lg:hidden flex items-center space-x-4">
             <button 
              onClick={toggleTheme}
              className="p-2 rounded-full text-primary dark:text-white"
            >
              {theme === 'dark' ? <Icons.Sun size={20} /> : <Icons.Moon size={20} />}
            </button>
            <button 
              onClick={() => setIsMobileMenuOpen(true)}
              className="p-2 text-primary dark:text-white hover:text-accent transition-colors"
            >
              <Icons.Menu size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Full Screen Overlay */}
      <div 
        className={`fixed inset-0 bg-white dark:bg-neutral-900 z-[60] transform transition-transform duration-300 ease-in-out lg:hidden flex flex-col h-[100dvh] ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* INTERNAL HEADER with CLOSE BUTTON */}
        <div className="flex-none flex items-center justify-between px-6 py-4 border-b border-gray-100 dark:border-neutral-800 bg-white dark:bg-neutral-900">
           <div className="flex flex-col">
              <span className="font-display font-bold text-2xl tracking-tight text-primary dark:text-white">
                TM BTP
              </span>
              <span className="text-[10px] tracking-[0.2em] text-accent uppercase font-medium">
                Menu Principal
              </span>
            </div>
            {/* The Requested Close Button */}
            <button 
                onClick={closeMenu}
                className="p-2 -mr-2 bg-gray-50 dark:bg-neutral-800 rounded-full text-primary dark:text-white hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-all border border-transparent hover:border-red-100"
                aria-label="Fermer"
            >
                <Icons.Close size={28} />
            </button>
        </div>

        {/* Scrollable Content Area */}
        <div className="flex-1 overflow-y-auto px-6 pb-4">
            <div className="flex flex-col space-y-6 mt-8">
            {navLinks.map((link) => (
                <Link
                key={link.path}
                to={link.path}
                onClick={closeMenu}
                className="text-xl font-display font-bold text-primary dark:text-white border-b border-gray-100 dark:border-gray-800 pb-4 flex justify-between items-center group"
                >
                <span>{link.name}</span>
                <Icons.ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-accent transition-colors" />
                </Link>
            ))}
            <Link
                to="/#devis"
                onClick={closeMenu}
                className="w-full py-4 bg-primary dark:bg-accent text-white dark:text-primary text-center font-bold rounded-xl shadow-lg mt-4"
            >
                Commencer mon projet
            </Link>
            
            <div className="mt-8 pt-8 border-t border-gray-100 dark:border-gray-800">
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 font-medium uppercase tracking-wider">Contact direct</p>
                
                <a href={`tel:${COMPANY_INFO.phoneClean}`} className="flex items-center text-primary dark:text-white font-bold text-lg mb-4 hover:text-accent transition-colors">
                  <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center mr-3">
                    <Icons.Phone className="w-4 h-4 text-accent" />
                  </div>
                  {COMPANY_INFO.phone}
                </a>

                <a href={`mailto:${COMPANY_INFO.email}`} className="flex items-center text-gray-700 dark:text-gray-300 font-medium text-sm mb-4 hover:text-accent transition-colors">
                   <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center mr-3">
                     <Icons.Mail className="w-4 h-4 text-accent" />
                   </div>
                  {COMPANY_INFO.email}
                </a>

                <div className="flex items-start text-gray-700 dark:text-gray-300 font-medium text-sm mb-4">
                    <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center mr-3 flex-shrink-0">
                      <Icons.Clock className="w-4 h-4 text-accent" />
                    </div>
                   <div className="flex flex-col">
                      <span className="text-xs text-gray-400 font-normal mb-0.5">Horaires</span>
                      <span className="leading-relaxed">{COMPANY_INFO.hours}</span>
                   </div>
                </div>

                <div className="pl-11">
                    <p className="text-xs text-gray-400">
                    {COMPANY_INFO.zone}
                    </p>
                </div>
            </div>
            
            {/* Extra spacer at bottom */}
            <div className="h-24"></div>
            </div>
        </div>

        {/* Fixed Footer with Close Button (Redundant but requested/useful) */}
        <div className="flex-none p-6 border-t border-gray-100 dark:border-neutral-800 bg-white dark:bg-neutral-900 z-50 pb-safe shadow-[0_-5px_15px_rgba(0,0,0,0.05)]">
            <button 
                onClick={closeMenu}
                className="w-full py-4 bg-gray-100 dark:bg-neutral-800 text-red-500 dark:text-red-400 font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-red-50 dark:hover:bg-red-900/20 border border-transparent hover:border-red-100 dark:hover:border-red-900/30 transition-all"
            >
                <Icons.Close className="w-5 h-5" />
                Fermer le menu
            </button>
        </div>
      </div>
    </nav>
  );
};