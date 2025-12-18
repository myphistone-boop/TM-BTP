import React from 'react';
import { Icons } from './Icons';
import { COMPANY_INFO } from '../types';

export const StickyMobileBar: React.FC = () => {
  const message = "Bonjour TM BTP, je souhaiterais obtenir un devis pour mon projet de construction ou rénovation. Pourriez-vous me recontacter ?";
  const whatsappUrl = `https://wa.me/${COMPANY_INFO.phoneClean.replace('+', '')}?text=${encodeURIComponent(message)}`;

  return (
    <div className="md:hidden fixed bottom-6 right-6 z-50">
      <a 
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-[0_10px_25px_rgba(37,211,102,0.4)] transition-all hover:scale-110 active:scale-95 animate-float"
        aria-label="Contactez-nous sur WhatsApp"
      >
        <Icons.Mobile className="w-7 h-7" />
        {/* Pulsing effect */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 -z-10"></span>
      </a>
    </div>
  );
};