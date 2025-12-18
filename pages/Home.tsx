
import React from 'react';
import { HeroBlueprint } from '../components/HeroBlueprint';
import { ServiceCard } from '../components/ServiceCard';
import { QuoteWizard } from '../components/QuoteWizard';
import { InteractiveAreaMap } from '../components/InteractiveAreaMap';
import { COMPANY_INFO } from '../types';
import { Icons } from '../components/Icons';

export const Home: React.FC = () => {
  const services = [
    {
      id: 'maison-neuve',
      title: 'Maison Neuve',
      description: 'Construction intégrale de A à Z. Nous gérons terrassement, fondations, maçonnerie et finitions pour une maison moderne.',
      icon: 'NewBuild',
      features: ['RT 2020 / RE 2020', 'Gros œuvre maîtrisé', 'Finitions Premium'],
      link: '/maison-neuve'
    },
    {
      id: 'renovation',
      title: 'Rénovation',
      description: 'Transformation complète de l’existant. Redistribution des pièces, isolation et mise aux normes.',
      icon: 'Renovation',
      features: ['Démolition soignée', 'Isolation haute perf.', 'Agencement sur-mesure'],
      link: '/renovation'
    },
    {
      id: 'photovoltaique',
      title: 'Photovoltaïque',
      description: 'Installation de panneaux solaires performants pour l’autoconsommation. Étude de rentabilité incluse.',
      icon: 'Electric',
      features: ['Autoconsommation', 'Pose intégrée', 'Raccordement'],
      link: '/photovoltaique'
    },
    {
      id: 'clim',
      title: 'Climatisation / PAC',
      description: 'Solutions de chauffage et refroidissement. Pompes à chaleur pour un confort thermique optimal.',
      icon: 'HVAC',
      features: ['Économies d\'énergie', 'Entretien inclus', 'Marques premium'],
      link: '/climatisation'
    }
  ];

  return (
    <div className="bg-white dark:bg-neutral-950 transition-colors duration-300">
      <HeroBlueprint />
      
      {/* Services Section */}
      <section className="py-12 md:py-20 bg-neutral-50 dark:bg-neutral-950 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-accent text-[10px] md:text-sm font-bold tracking-[0.2em] uppercase mb-2 md:mb-4">Nos Expertises</h2>
          <h3 className="font-display font-bold text-2xl md:text-4xl text-primary dark:text-white mb-8 md:mb-12">
            Une exécution technique premium
          </h3>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {services.map(service => (
              <div key={service.id} className="h-full">
                <ServiceCard service={service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 md:py-20 bg-white dark:bg-neutral-900 relative transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
             <div className="relative group order-first lg:order-none">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-neutral-800">
                  <img 
                    src="https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                    alt="Mathieu Touron sur chantier" 
                    className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-6 md:p-8">
                     <div className="text-white">
                        <p className="font-display font-bold text-lg md:text-xl">Mathieu Touron</p>
                        <p className="text-accent text-xs md:text-sm font-medium">Fondateur TM BTP</p>
                     </div>
                  </div>
                </div>
                <div className="absolute -top-4 -left-4 md:-top-6 md:-left-6 bg-accent text-primary p-4 md:p-6 rounded-xl shadow-lg hidden md:block">
                  <p className="font-bold text-2xl md:text-3xl font-display">15+</p>
                  <p className="text-[10px] font-bold uppercase tracking-wider">Ans d'expérience</p>
                </div>
             </div>

             <div className="order-last lg:order-none">
                <h2 className="font-display font-bold text-2xl md:text-4xl text-primary dark:text-white mb-4 md:mb-6 leading-tight">
                  L'exigence artisanale <br/> 
                  <span className="text-accent">au service de votre habitat.</span>
                </h2>
                <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg leading-relaxed mb-6">
                  TM BTP est née d'une conviction : la construction ne doit pas être source de stress, mais l'accomplissement d'un projet de vie.
                </p>
                <div className="grid grid-cols-2 gap-4 md:gap-6 mt-6 md:mt-8">
                  <div className="flex items-start">
                    <Icons.Shield className="w-5 h-5 md:w-6 md:h-6 text-accent mr-2 md:mr-3 mt-1" />
                    <div>
                      <h4 className="font-bold text-primary dark:text-white text-sm md:text-base">Décennale</h4>
                      <p className="text-[10px] md:text-sm text-gray-500">Protection totale.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Icons.Check className="w-5 h-5 md:w-6 md:h-6 text-accent mr-2 md:mr-3 mt-1" />
                    <div>
                      <h4 className="font-bold text-primary dark:text-white text-sm md:text-base">Maîtrise</h4>
                      <p className="text-[10px] md:text-sm text-gray-500">Un seul expert.</p>
                    </div>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-12 md:py-20 bg-white dark:bg-neutral-900 transition-colors duration-300" id="devis">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <div>
              <h2 className="font-display font-bold text-2xl md:text-4xl text-primary dark:text-white mb-4 md:mb-6 leading-tight">
                Lancez votre projet <br/>
                <span className="text-accent">en toute sérénité</span>
              </h2>
              <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 mb-8 md:mb-10">
                Estimation gratuite et rendez-vous technique sous 48h.
              </p>
              <div className="space-y-4 md:space-y-6 bg-neutral-50 dark:bg-neutral-800 p-6 md:p-8 rounded-2xl border dark:border-neutral-700">
                <a href={`tel:${COMPANY_INFO.phoneClean}`} className="flex items-center text-primary dark:text-white hover:text-accent transition-colors">
                    <Icons.Phone className="w-4 h-4 md:w-5 md:h-5 mr-3 md:mr-4 text-accent" />
                    <span className="font-bold text-lg md:text-xl">{COMPANY_INFO.phone}</span>
                </a>
                <a href={`mailto:${COMPANY_INFO.email}`} className="flex items-center text-primary dark:text-white hover:text-accent transition-colors">
                    <Icons.Mail className="w-4 h-4 md:w-5 md:h-5 mr-3 md:mr-4 text-accent" />
                    <span className="font-bold text-sm md:text-base break-all">{COMPANY_INFO.email}</span>
                </a>
              </div>
            </div>
            <QuoteWizard />
          </div>
        </div>
      </section>

      {/* Map Section - More Compact */}
      <section className="py-8 md:py-12 bg-neutral-900 overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 text-center text-white">
          <h2 className="font-display font-bold text-xl md:text-2xl mb-6 md:mb-8">Zone d'Intervention</h2>
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10">
            <InteractiveAreaMap />
          </div>
        </div>
      </section>
    </div>
  );
};
