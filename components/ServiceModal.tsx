import React, { useEffect, useState } from 'react';
import { Icons } from './Icons';
import { MaisonNeuve } from '../pages/MaisonNeuve';
import { Renovation } from '../pages/Renovation';
import { Photovoltaique } from '../pages/Photovoltaique';
import { Climatisation } from '../pages/Climatisation';
import { Service } from '../types';

interface ServiceModalProps {
  isOpen: boolean;
  serviceId: string;
  onClose: () => void;
  onSwitch: (id: string) => void;
  services: Service[];
}

export const ServiceModal: React.FC<ServiceModalProps> = ({ isOpen, serviceId, onClose, onSwitch, services }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const currentServiceIndex = services.findIndex(s => s.id === serviceId);
  const nextService = services[(currentServiceIndex + 1) % services.length];

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      // Close menu when modal opens/changes
      setIsMenuOpen(false); 
      
      // Add keyboard navigation support
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose();
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = 'auto';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const renderContent = () => {
    switch (serviceId) {
      case 'maison-neuve': return <MaisonNeuve />;
      case 'renovation': return <Renovation />;
      case 'photovoltaique': return <Photovoltaique />;
      case 'clim': return <Climatisation />;
      default: return <MaisonNeuve />;
    }
  };

  const scrollToTop = () => {
    const scrollContainer = document.querySelector('.modal-scroll-container');
    if(scrollContainer) scrollContainer.scrollTop = 0;
  };

  return (
    <div className="fixed inset-0 z-[60] bg-white dark:bg-neutral-950 flex flex-col">
      {/* Modal Header */}
      <div className="absolute top-0 left-0 w-full h-20 bg-white/95 dark:bg-neutral-950/95 backdrop-blur-md z-50 flex items-center justify-between px-4 border-b border-gray-100 dark:border-neutral-800 shadow-sm">
        <div className="flex items-center">
            <span className="font-display font-bold text-primary dark:text-white text-lg">
                TM BTP <span className="text-accent text-sm ml-2 font-normal hidden sm:inline">Expertise</span>
            </span>
        </div>
        
        {/* Navigation Controls */}
        <div className="flex items-center gap-2">
          
          {/* Dropdown Menu Trigger */}
          <div className="relative mr-2">
            <button
              onClick={() => setIsMenuOpen(true)}
              className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-neutral-800 hover:bg-gray-200 dark:hover:bg-neutral-700 rounded-full text-sm font-bold text-primary dark:text-white transition-all relative z-30"
            >
              <span className="hidden sm:inline">Choix de l'expertise</span>
              <span className="sm:hidden">Expertises</span>
              <Icons.ChevronRight className="w-4 h-4" />
            </button>

            {isMenuOpen && (
              <>
                {/* Desktop Backdrop */}
                <div 
                  className="hidden md:block fixed inset-0 z-20 cursor-default bg-neutral-900/20 backdrop-blur-sm transition-all animate-fade-in" 
                  onClick={() => setIsMenuOpen(false)}
                ></div>

                {/* 
                   MOBILE MENU REWRITE - BULLETPROOF SOLID BACKGROUND
                   We use h-[100dvh] to ensure it covers the full viewport including browser bars.
                   bg-white is applied to the root, header, and content to prevent ANY transparency.
                */}
                <div className="md:hidden fixed inset-0 z-[100] bg-white dark:bg-neutral-950 flex flex-col h-[100dvh] w-screen">
                    {/* Header Fixed - Solid Background */}
                    <div className="flex-none flex items-center justify-between px-6 py-4 border-b border-gray-100 dark:border-neutral-800 bg-white dark:bg-neutral-950 z-20 shadow-sm">
                        <span className="font-display font-bold text-xl text-primary dark:text-white">Nos Expertises</span>
                        <button 
                            onClick={() => setIsMenuOpen(false)}
                            className="p-2 -mr-2 bg-gray-50 dark:bg-neutral-800 rounded-full text-gray-500 hover:text-primary transition-colors"
                        >
                            <Icons.Close className="w-6 h-6" />
                        </button>
                    </div>
                    
                    {/* Scrollable Content - Solid Background */}
                    <div className="flex-1 overflow-y-auto bg-gray-50 dark:bg-neutral-900 p-6 space-y-4 overscroll-contain relative">
                        {services.map((s) => (
                            <button
                                key={s.id}
                                onClick={() => {
                                    onSwitch(s.id);
                                    scrollToTop();
                                    setIsMenuOpen(false);
                                }}
                                className={`w-full text-left p-5 rounded-2xl shadow-sm border transition-all flex items-center justify-between group ${
                                    s.id === serviceId 
                                    ? 'bg-primary text-white border-primary shadow-lg ring-2 ring-primary/20' 
                                    : 'bg-white dark:bg-neutral-800 border-gray-100 dark:border-neutral-700 text-primary dark:text-gray-200'
                                }`}
                            >
                                <span className="font-bold text-lg">{s.title}</span>
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                                    s.id === serviceId ? 'bg-white/20 text-white' : 'bg-gray-100 dark:bg-neutral-700 text-gray-400'
                                }`}>
                                     {s.id === serviceId ? <Icons.Check className="w-5 h-5" /> : <Icons.ChevronRight className="w-5 h-5" />}
                                </div>
                            </button>
                        ))}
                         {/* Bottom spacer */}
                         <div className="h-4"></div>
                    </div>

                    {/* FIXED BOTTOM CLOSE BUTTON */}
                    <div className="flex-none p-6 border-t border-gray-100 dark:border-neutral-800 bg-white dark:bg-neutral-950 z-20 pb-safe shadow-[0_-5px_15px_rgba(0,0,0,0.05)]">
                             <button 
                                onClick={() => setIsMenuOpen(false)}
                                className="w-full py-4 bg-white dark:bg-neutral-800 text-red-500 dark:text-red-400 font-bold rounded-xl border-2 border-red-100 dark:border-red-900/30 flex items-center justify-center gap-2 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors shadow-sm"
                            >
                                <Icons.Close className="w-5 h-5" />
                                FERMER
                            </button>
                    </div>
                 </div>
                
                {/* Desktop Dropdown Menu */}
                <div className="hidden md:block absolute top-full right-0 mt-3 w-72 bg-white dark:bg-neutral-900 rounded-xl shadow-2xl border border-gray-100 dark:border-neutral-800 overflow-hidden py-2 animate-fade-in z-30">
                  {services.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => {
                        onSwitch(s.id);
                        scrollToTop();
                        setIsMenuOpen(false);
                      }}
                      className={`w-full text-left px-5 py-3 text-sm font-medium hover:bg-gray-50 dark:hover:bg-neutral-800 transition-colors flex items-center justify-between group ${
                        s.id === serviceId ? 'text-accent bg-accent/5' : 'text-gray-700 dark:text-gray-300'
                      }`}
                    >
                        <span className="flex items-center">
                           <span className={`w-1.5 h-1.5 rounded-full mr-3 ${s.id === serviceId ? 'bg-accent' : 'bg-gray-300 dark:bg-gray-600 group-hover:bg-accent'}`}></span>
                           {s.title}
                        </span>
                        {s.id === serviceId && <Icons.Check className="w-4 h-4" />}
                    </button>
                  ))}
                  {/* Desktop Dropdown Close Button */}
                  <div className="border-t border-gray-100 dark:border-neutral-800 mt-2 pt-2 px-2">
                       <button 
                            onClick={() => setIsMenuOpen(false)}
                            className="w-full py-2 text-xs font-bold text-gray-500 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors flex items-center justify-center gap-1"
                        >
                            <Icons.Close className="w-3 h-3" />
                            Fermer
                        </button>
                  </div>
                </div>
              </>
            )}
          </div>

          <button 
            onClick={onClose}
            className="w-10 h-10 bg-gray-100 dark:bg-neutral-800 rounded-full flex items-center justify-center text-primary dark:text-white hover:bg-red-50 hover:text-red-500 dark:hover:bg-red-900/20 dark:hover:text-red-400 transition-colors z-20"
            title="Fermer"
          >
            <Icons.Close className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Content Container (Scrollable) */}
      <div className="flex-grow overflow-y-auto overflow-x-hidden bg-white dark:bg-neutral-950 relative modal-scroll-container">
        {/* We use a negative margin top to pull the content up under the transparent header if needed, 
            but pages have pt-20. Since our header is fixed, pt-20 works perfectly to spacing. */}
        <div className="min-h-screen">
            {renderContent()}
        </div>
        
        {/* Footer spacer */}
        <div className="h-24"></div>
      </div>

      {/* Floating Bottom Nav (Mobile Only) */}
      <div className="absolute bottom-6 left-0 w-full z-50 px-4 flex justify-center pointer-events-none md:hidden">
        <div className="bg-primary/90 dark:bg-neutral-800/90 backdrop-blur-md text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-4 pointer-events-auto border border-white/10 max-w-sm w-full justify-between">
           <span className="text-xs font-medium text-gray-300 uppercase tracking-wider">Expertise suivante</span>
           <button 
             onClick={() => {
                scrollToTop();
                onSwitch(nextService.id);
             }}
             className="flex items-center font-bold text-sm hover:text-accent transition-colors"
           >
              {nextService.title}
              <Icons.ChevronRight className="w-4 h-4 ml-1" />
           </button>
        </div>
      </div>
    </div>
  );
};