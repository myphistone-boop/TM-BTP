import React from 'react';
import { Link } from 'react-router-dom';
import { Icons } from '../components/Icons';
import { QuoteWizard } from '../components/QuoteWizard';

export const Photovoltaique: React.FC = () => {
  return (
    <div className="pt-20 bg-white dark:bg-neutral-950 transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative h-[55vh] sm:h-[65vh] flex items-center bg-primary overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-50 sm:opacity-50">
           <img 
            src="https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Panneaux photovoltaïques sur toit moderne" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/70 to-transparent sm:via-primary/50 z-10"></div>
        <div className="absolute inset-0 bg-black/30 sm:hidden z-10"></div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl animate-float" style={{ animationDuration: '10s' }}>
            <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-accent/20 border border-accent/30 text-accent-light text-[10px] sm:text-sm font-bold uppercase tracking-wider mb-4 sm:mb-6 backdrop-blur-sm">
              <Icons.Sun className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-2" />
              Énergie Verte & Économies
            </div>
            <h1 className="font-display font-bold text-3xl sm:text-5xl md:text-6xl text-white mb-4 sm:mb-6 leading-tight">
              Produisez votre <br/>
              <span className="text-accent">propre électricité.</span>
            </h1>
            <p className="text-base sm:text-xl text-gray-200 mb-6 sm:mb-8 leading-relaxed max-w-2xl">
              Devenez indépendant face à la hausse des prix. Une installation dimensionnée pour votre consommation réelle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/devis" 
                className="px-7 py-3.5 sm:px-8 sm:py-4 bg-accent text-primary font-bold rounded-full hover:bg-white transition-all shadow-xl text-center text-sm sm:text-base"
              >
                Étude de rentabilité gratuite
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-24 bg-white dark:bg-neutral-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-primary dark:text-white font-display font-bold text-3xl md:text-4xl mb-6">
                Pourquoi passer au solaire maintenant ?
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg mb-8">
                Le photovoltaïque n'est plus une technologie du futur, c'est la solution actuelle la plus rentable pour réduire vos factures résidentielles ou professionnelles.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent flex-shrink-0">
                    <Icons.Chart size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-primary dark:text-white">Rentabilité Immédiate</h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">Réduisez votre facture d'électricité jusqu'à 70% dès la mise en service grâce à l'autoconsommation.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent flex-shrink-0">
                    <Icons.Shield size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-primary dark:text-white">Garantie 25 ans</h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">Nos panneaux sont garantis en performance linéaire sur 25 ans. Un investissement pérenne et sécurisé.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent flex-shrink-0">
                    <Icons.Mobile size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-primary dark:text-white">Pilotage Intelligent</h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">Suivez votre production et consommation en temps réel depuis votre smartphone via notre application dédiée.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
               <div className="absolute inset-0 bg-accent transform rotate-3 rounded-3xl opacity-20"></div>
               <img 
                 src="https://images.unsplash.com/photo-1611365892117-00ac5ef43c90?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                 alt="Application de suivi solaire" 
                 className="relative rounded-3xl shadow-2xl z-10 border-4 border-white dark:border-neutral-800"
               />
               <div className="absolute -bottom-6 -left-6 bg-white dark:bg-neutral-800 p-6 rounded-xl shadow-xl z-20 max-w-xs border border-gray-100 dark:border-neutral-700 hidden md:block">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-bold text-gray-500 dark:text-gray-400">Production aujourd'hui</span>
                    <Icons.Sun className="w-5 h-5 text-accent" />
                  </div>
                  <div className="text-3xl font-bold text-primary dark:text-white">24.5 kWh</div>
                  <div className="w-full bg-gray-100 dark:bg-neutral-700 h-2 rounded-full mt-3 overflow-hidden">
                    <div className="bg-green-500 h-full w-3/4"></div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Details */}
      <section className="py-24 bg-neutral-50 dark:bg-neutral-950 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl text-primary dark:text-white mb-4">Une installation premium, sans compromis</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Nous sélectionnons uniquement du matériel de haute qualité (Tier 1) pour garantir performance et esthétisme.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-neutral-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-neutral-700 hover:shadow-md transition-all">
              <div className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6">1</div>
              <h3 className="font-bold text-xl text-primary dark:text-white mb-3">Panneaux Full Black</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Esthétique irréprochable. Intégration discrète sur toiture tuile ou ardoise. Technologie monocristalline haut rendement ({" > "}400Wc).
              </p>
            </div>
            <div className="bg-white dark:bg-neutral-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-neutral-700 hover:shadow-md transition-all">
              <div className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6">2</div>
              <h3 className="font-bold text-xl text-primary dark:text-white mb-3">Micro-onduleurs</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Indépendance de chaque panneau. Si l'un est à l'ombre, les autres continuent de produire à 100%. Sécurité incendie maximale (basse tension DC).
              </p>
            </div>
            <div className="bg-white dark:bg-neutral-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-neutral-700 hover:shadow-md transition-all">
              <div className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6">3</div>
              <h3 className="font-bold text-xl text-primary dark:text-white mb-3">Pose & Démarches</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Nos équipes gèrent tout : déclaration en mairie, consuel, raccordement Enedis. Pose en surimposition sans toucher à l'étanchéité.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-24 bg-white dark:bg-neutral-900 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 text-center mb-12">
          <h2 className="font-display font-bold text-3xl text-primary dark:text-white mb-6">Simulez votre installation</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Indiquez "Photovoltaïque" dans le formulaire ci-dessous pour recevoir une pré-étude de dimensionnement.
          </p>
        </div>
        <div className="max-w-4xl mx-auto px-4">
          <QuoteWizard />
        </div>
      </section>
    </div>
  );
};