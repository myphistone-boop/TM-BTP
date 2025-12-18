import React from 'react';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';

export const Realizations: React.FC = () => {
  return (
    <div className="pt-24 pb-20 bg-white dark:bg-neutral-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="font-display font-bold text-4xl text-primary dark:text-white mb-4">Nos Réalisations</h1>
          <p className="text-gray-600 dark:text-gray-300">
            La preuve par l'image. Découvrez la qualité de nos finitions et la transformation radicale de nos chantiers de rénovation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <h2 className="font-display font-bold text-2xl text-primary dark:text-white mb-4">Rénovation complète Villa Tarbes</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Ouverture des espaces, pose d'un carrelage grand format, réfection totale de l'électricité et création d'un faux-plafond avec éclairage intégré.
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              <span className="bg-gray-100 dark:bg-neutral-800 text-gray-600 dark:text-gray-300 px-3 py-1 rounded-full text-xs font-bold">Maçonnerie</span>
              <span className="bg-gray-100 dark:bg-neutral-800 text-gray-600 dark:text-gray-300 px-3 py-1 rounded-full text-xs font-bold">Élec</span>
              <span className="bg-gray-100 dark:bg-neutral-800 text-gray-600 dark:text-gray-300 px-3 py-1 rounded-full text-xs font-bold">Sols</span>
            </div>
          </div>
          <div>
            <BeforeAfterSlider 
              beforeImage="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              afterImage="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              label="Salon / Séjour"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Placeholder Project Cards */}
            {[1, 2, 3].map((item) => (
                <div key={item} className="group rounded-2xl overflow-hidden shadow-lg border border-gray-100 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:shadow-2xl transition-all">
                    <div className="h-64 overflow-hidden relative">
                        <img 
                            src={`https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80&sig=${item}`} 
                            alt="Chantier" 
                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                            LIVRÉ
                        </div>
                    </div>
                    <div className="p-6">
                        <h3 className="font-bold text-primary dark:text-white text-lg mb-2">Construction Maison T4</h3>
                        <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">Montauban - 110m²</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                            Projet clé en main. Terrassement, élévation, toiture et second œuvre complet.
                        </p>
                    </div>
                </div>
            ))}
        </div>

      </div>
    </div>
  );
};