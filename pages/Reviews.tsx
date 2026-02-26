import React, { useState, useRef } from 'react';
import { Icons } from '../components/Icons';
import { COMPANY_INFO } from '../types';

import { MobileHorizontalScroll } from '../components/MobileHorizontalScroll';

const reviews = [
  {
    name: "Aimane Betis",
    rating: 5,
    text: "J’ai fait appel à ce plombier pour la rénovation de ma salle de bain, résultat au top, sérieux et prix correct, je recommande."
  },
  {
    name: "DIDIER BOUSQUET",
    rating: 5,
    text: "Cela fait deux fois que je fais intervenir Monsieur Serin Morgan. Très content de sa prestation. Travail sérieux. Prix correct."
  },
  {
    name: "Julien",
    rating: 5,
    text: "Super intervention rapide et je le remercie pour cela et je vous le recommande à 100 %. Encore 1000 mercis."
  },
  {
    name: "Caroline Marc",
    rating: 5,
    text: "Professionnel disponible, aimable et compétent. Nous ne sommes jamais déçus lorsque nous faisons appel à cette entreprise que je recommande aussi bien pour le service de plomberie que celui de la climatisation."
  },
  {
    name: "Samira",
    rating: 5,
    text: "Nous avons fait appel à l’entreprise Serin Plomberie pour une pose d’un gainable Mitsubishi en rénovation et nous sommes ravis du résultat, je vous le recommande pour vos installations de climatisation."
  },
  {
    name: "Calta LV",
    rating: 5,
    text: "C’est le troisième projet que je confie à cette entreprise (clim dans mes trois pièces, création d’une douche à l’italienne, pose de WC suspendu carrelé). Le travail est de grande qualité et les tarifs maîtrisés. Je recommande vivement."
  },
  {
    name: "Val Jau",
    rating: 5,
    text: "Réactif, efficace, sérieux et compétent, je recommande vivement M. SERIN."
  }
];

const galleryImages = [
  "https://storage.googleapis.com/novelec_assets/Serin_Plomberie/Chauffage.webp",
  "https://storage.googleapis.com/novelec_assets/Serin_Plomberie/Douche.webp",
  "https://storage.googleapis.com/novelec_assets/Serin_Plomberie/Sol.webp",
  "https://storage.googleapis.com/novelec_assets/Serin_Plomberie/Toilettes.webp",
  "https://storage.googleapis.com/novelec_assets/Serin_Plomberie/photo-002.webp",
  "https://storage.googleapis.com/novelec_assets/Serin_Plomberie/photo-003.webp",
  "https://storage.googleapis.com/novelec_assets/Serin_Plomberie/photo-010.webp",
  "https://storage.googleapis.com/novelec_assets/Serin_Plomberie/photo-013.webp",
  "https://storage.googleapis.com/novelec_assets/Serin_Plomberie/photo-014.webp"
];

export const Reviews: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <div className="pt-20 pb-10 bg-white dark:bg-neutral-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="font-display font-bold text-4xl md:text-5xl text-primary dark:text-white mb-4">Avis Clients</h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Découvrez les témoignages de nos clients satisfaits sur Google Maps. Votre satisfaction est notre priorité.
          </p>
          <div className="w-20 h-1 bg-accent mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Reviews Carousel */}
        <div className="relative mb-12 group">
          <div 
            ref={scrollRef}
            className="flex overflow-x-auto gap-6 pb-8 scrollbar-hide snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {reviews.map((review, idx) => (
              <div 
                key={idx} 
                className="flex-shrink-0 w-full md:w-[400px] bg-neutral-50 dark:bg-neutral-900 p-8 rounded-2xl border border-gray-100 dark:border-neutral-800 snap-center shadow-sm"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Icons.Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-gray-700 dark:text-gray-300 italic mb-6 leading-relaxed">
                  "{review.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center text-accent font-bold">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-primary dark:text-white text-sm">{review.name}</p>
                    <p className="text-xs text-gray-500">Client Google Maps</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 w-10 h-10 bg-white dark:bg-neutral-800 rounded-full shadow-xl flex items-center justify-center text-primary dark:text-white hover:bg-accent hover:text-white transition-all z-10 opacity-100 flex"
          >
            <Icons.ChevronLeft size={20} />
          </button>
          <button 
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 w-10 h-10 bg-white dark:bg-neutral-800 rounded-full shadow-xl flex items-center justify-center text-primary dark:text-white hover:bg-accent hover:text-white transition-all z-10 opacity-100 flex"
          >
            <Icons.ChevronRight size={20} />
          </button>
        </div>

        {/* Photo Gallery Section */}
        <div className="border-t border-gray-100 dark:border-neutral-800 pt-10">
          <div className="text-center mb-6">
            <h2 className="font-display font-bold text-3xl text-primary dark:text-white mb-4">Nos Interventions</h2>
            <p className="text-gray-600 dark:text-gray-400">Un aperçu de notre savoir-faire en images.</p>
          </div>

          <MobileHorizontalScroll className="lg:block lg:columns-3 lg:gap-6 lg:space-y-6 lg:overflow-visible lg:pb-0">
            {galleryImages.map((img, idx) => (
              <div key={idx} className="break-inside-avoid rounded-2xl overflow-hidden shadow-lg border-4 border-white dark:border-neutral-800 hover:scale-[1.02] transition-transform duration-300 h-full mb-6 lg:mb-0">
                <img 
                  src={img} 
                  alt={`Intervention ${idx + 1}`} 
                  className="w-full h-64 lg:h-auto object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </MobileHorizontalScroll>
        </div>
      </div>
    </div>
  );
};
