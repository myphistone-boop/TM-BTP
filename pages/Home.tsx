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
      description: 'Construction intégrale de A à Z. Nous gérons terrassement, fondations, maçonnerie et finitions pour une maison moderne et durable.',
      icon: 'NewBuild',
      features: ['RT 2020 / RE 2020', 'Gros œuvre maîtrisé', 'Finitions Premium'],
      link: '/maison-neuve'
    },
    {
      id: 'renovation',
      title: 'Rénovation',
      description: 'Transformation complète de l’existant. Redistribution des pièces, isolation, sols et mise aux normes électriques.',
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
      description: 'Solutions de chauffage et refroidissement. Pompes à chaleur air/air et air/eau pour un confort thermique optimal.',
      icon: 'HVAC',
      features: ['Économies d\'énergie', 'Entretien inclus', 'Marques premium'],
      link: '/climatisation'
    }
  ];

  return (
    <div className="overflow-x-hidden bg-white dark:bg-neutral-950 transition-colors duration-300">
      <HeroBlueprint />
      
      {/* About Section */}
      <section className="py-24 bg-white dark:bg-neutral-900 relative overflow-hidden transition-colors duration-300">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-neutral-50 dark:bg-neutral-800 skew-x-12 transform origin-top-right -z-0 transition-colors duration-300"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-neutral-800">
                  <img 
                    src="https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                    alt="Mathieu Touron sur chantier" 
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-8">
                     <div className="text-white">
                        <p className="font-display font-bold text-xl">Mathieu Touron</p>
                        <p className="text-accent text-sm font-medium">Fondateur TM BTP</p>
                     </div>
                  </div>
                </div>
                {/* Badge expérience */}
                <div className="absolute -top-6 -left-6 bg-accent text-primary p-6 rounded-xl shadow-lg hidden md:block">
                  <p className="font-bold text-3xl font-display">15+</p>
                  <p className="text-xs font-bold uppercase tracking-wider">Années d'expérience</p>
                </div>
             </div>

             <div>
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/5 dark:bg-white/5 border border-primary/10 dark:border-white/10 text-primary dark:text-accent text-xs font-bold uppercase tracking-wider mb-6">
                  Qui sommes-nous
                </div>
                <h2 className="font-display font-bold text-3xl md:text-4xl text-primary dark:text-white mb-6">
                  L'exigence artisanale <br/> 
                  <span className="text-accent">au service de votre habitat.</span>
                </h2>
                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
                  TM BTP est née d'une conviction : la construction ne doit pas être source de stress, mais l'accomplissement d'un projet de vie.
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                  Implantés historiquement entre Tarbes et Montauban, nous avons fait le choix de la qualité plutôt que de la quantité. Nous limitons le nombre de chantiers simultanés pour garantir la présence constante de nos équipes qualifiées et le respect strict des délais.
                </p>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex items-start">
                    <Icons.Shield className="w-6 h-6 text-accent mr-3 mt-1" />
                    <div>
                      <h4 className="font-bold text-primary dark:text-white">Assurance Décennale</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Couverture complète sur tous nos travaux.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Icons.Check className="w-6 h-6 text-accent mr-3 mt-1" />
                    <div>
                      <h4 className="font-bold text-primary dark:text-white">Interlocuteur Unique</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Un seul numéro : celui du patron.</p>
                    </div>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-neutral-50 dark:bg-neutral-950 relative transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-accent text-sm font-bold tracking-[0.2em] uppercase mb-4">Nos Expertises</h2>
            <h3 className="font-display font-bold text-3xl md:text-4xl text-primary dark:text-white mb-6">
              Une exécution technique sans faille
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Nous intervenons sur des projets globaux pour garantir la cohérence et la qualité du résultat final. Pas de sous-traitance en cascade, un seul responsable.
            </p>
          </div>
          
          {/* Modified Grid for Mobile: 2 cols on mobile, 2 on md, 4 on lg */}
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {services.map(service => (
              <div key={service.id} className="h-[180px] md:h-[420px]">
                <ServiceCard 
                  service={service}
                  /* onClick prop removed to allow default Link navigation */
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-24 bg-white dark:bg-neutral-900 relative overflow-hidden transition-colors duration-300" id="devis">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-primary/5 dark:bg-white/5 -skew-y-3 transform origin-top-left z-0"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-primary dark:text-white mb-6">
                Démarrez votre projet <br/>
                <span className="text-accent">avec sérénité</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-10">
                Obtenez une première estimation ou un rendez-vous sur chantier en quelques clics. 
                Nous privilégions les dossiers complets pour vous offrir notre meilleure disponibilité.
              </p>
              
              <div className="space-y-8 bg-neutral-50 dark:bg-neutral-800 p-8 rounded-2xl border border-gray-100 dark:border-neutral-700 transition-colors duration-300">
                <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center mr-4 flex-shrink-0">
                        <Icons.Phone className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                        <h4 className="font-bold text-primary dark:text-white">Par Téléphone</h4>
                        <a href={`tel:${COMPANY_INFO.phoneClean}`} className="text-lg text-gray-700 dark:text-gray-300 hover:text-accent transition-colors font-medium block">
                            {COMPANY_INFO.phone}
                        </a>
                        <p className="text-xs text-gray-400 mt-1">Ligne directe gérant</p>
                    </div>
                </div>

                <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center mr-4 flex-shrink-0">
                        <Icons.Mail className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                        <h4 className="font-bold text-primary dark:text-white">Par Email</h4>
                        <a href={`mailto:${COMPANY_INFO.email}`} className="text-lg text-gray-700 dark:text-gray-300 hover:text-accent transition-colors font-medium block break-all">
                            {COMPANY_INFO.email}
                        </a>
                        <p className="text-xs text-gray-400 mt-1">Réponse sous 24h</p>
                    </div>
                </div>

                <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center mr-4 flex-shrink-0">
                        <Icons.Clock className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                        <h4 className="font-bold text-primary dark:text-white">Horaires</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mt-1 leading-relaxed">
                            {COMPANY_INFO.hours}
                        </p>
                    </div>
                </div>
              </div>
            </div>
            
            <div className="-mt-8 lg:mt-0">
               <QuoteWizard />
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="py-20 bg-neutral-900 text-white text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 to-transparent pointer-events-none"></div>
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="mb-12">
            <Icons.Location className="w-12 h-12 text-accent mx-auto mb-6" />
            <h2 className="font-display font-bold text-3xl mb-4">Notre Zone d'Intervention</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Nous opérobs sur un axe stratégique dans le Sud-Ouest, entre Tarbes et Montauban.
              Zoomez sur la carte pour voir notre secteur précis.
            </p>
          </div>
          
          <div className="shadow-2xl rounded-2xl overflow-hidden border border-white/10">
            <InteractiveAreaMap />
          </div>
          
          <div className="mt-8 flex justify-center">
             <div className="inline-flex items-center bg-white/5 border border-white/10 px-6 py-3 rounded-full text-sm backdrop-blur-sm">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></span>
                Étude possible hors zone selon l'envergure du projet
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};