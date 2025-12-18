import React from 'react';
import { Link } from 'react-router-dom';
import { Icons } from '../components/Icons';
import { QuoteWizard } from '../components/QuoteWizard';

export const Climatisation: React.FC = () => {
  return (
    <div className="pt-20 bg-white dark:bg-neutral-950 transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative h-[65vh] flex items-center bg-white overflow-hidden">
        <div className="absolute inset-0 z-0">
           <img 
            src="https://images.unsplash.com/photo-1590756254933-24193365df58?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Intérieur moderne climatisé" 
            className="w-full h-full object-cover"
          />
           <div className="absolute inset-0 bg-neutral-900/40"></div>
        </div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 border border-white/30 text-white text-sm font-bold uppercase tracking-wider mb-6 backdrop-blur-sm">
                <Icons.Thermometer className="w-4 h-4 mr-2" />
                Confort Thermique
                </div>
                <h1 className="font-display font-bold text-4xl md:text-6xl text-white mb-6">
                Chaud l'hiver. <br/>
                <span className="text-accent">Frais l'été.</span>
                </h1>
                <p className="text-xl text-gray-100 mb-8 max-w-2xl leading-relaxed">
                Installation de Pompes à Chaleur (PAC) Air/Air et Air/Eau. 
                Alliez confort absolu et économies d'énergie grâce à des systèmes silencieux et performants.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <Link 
                        to="/devis" 
                        className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary font-bold rounded-full hover:bg-accent hover:text-white transition-all shadow-xl"
                    >
                        Demander un devis
                        <Icons.ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                </div>
            </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-24 bg-white dark:bg-neutral-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl text-primary dark:text-white mb-4">Nos solutions de chauffage & climatisation</h2>
            <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* PAC Air/Air */}
            <div className="bg-neutral-50 dark:bg-neutral-800 rounded-2xl overflow-hidden border border-gray-100 dark:border-neutral-700 group hover:shadow-xl transition-all">
                <div className="h-64 overflow-hidden relative">
                    <img 
                        src="https://images.unsplash.com/photo-1618220179428-22790b461013?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                        alt="Climatisation split mural" 
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 right-4 bg-white text-primary text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                        Réversible
                    </div>
                </div>
                <div className="p-8">
                    <div className="flex items-center mb-4">
                        <Icons.HVAC className="w-6 h-6 text-accent mr-3" />
                        <h3 className="font-bold text-2xl text-primary dark:text-white">PAC Air / Air (Clim)</h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                        Idéal pour le confort pièce par pièce. Split mural design ou gainable invisible dans les combles.
                    </p>
                    <ul className="space-y-3 mb-8">
                        <li className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                            <Icons.Check className="w-4 h-4 text-green-500 mr-2" />
                            Rafraîchissement efficace en été
                        </li>
                        <li className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                            <Icons.Check className="w-4 h-4 text-green-500 mr-2" />
                            Filtration de l'air (anti-allergènes)
                        </li>
                        <li className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                            <Icons.Check className="w-4 h-4 text-green-500 mr-2" />
                            Pilotage WiFi à distance
                        </li>
                    </ul>
                </div>
            </div>

            {/* PAC Air/Eau */}
            <div className="bg-neutral-50 dark:bg-neutral-800 rounded-2xl overflow-hidden border border-gray-100 dark:border-neutral-700 group hover:shadow-xl transition-all">
                <div className="h-64 overflow-hidden relative">
                    <img 
                        src="https://images.unsplash.com/photo-1585969622956-6f81eb040c74?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                        alt="Pompe à chaleur extérieure" 
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 right-4 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                        Éligible Aides
                    </div>
                </div>
                <div className="p-8">
                    <div className="flex items-center mb-4">
                        <Icons.Electric className="w-6 h-6 text-accent mr-3" />
                        <h3 className="font-bold text-2xl text-primary dark:text-white">PAC Air / Eau</h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                        La solution rénovation par excellence. Remplace votre chaudière fioul ou gaz en conservant vos radiateurs actuels.
                    </p>
                    <ul className="space-y-3 mb-8">
                        <li className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                            <Icons.Check className="w-4 h-4 text-green-500 mr-2" />
                            Jusqu'à 70% d'économies de chauffage
                        </li>
                        <li className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                            <Icons.Check className="w-4 h-4 text-green-500 mr-2" />
                            Production d'eau chaude sanitaire
                        </li>
                        <li className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                            <Icons.Check className="w-4 h-4 text-green-500 mr-2" />
                            Marques Premium (Daikin, Atlantic)
                        </li>
                    </ul>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info Banner */}
      <section className="py-16 bg-primary dark:bg-neutral-900 text-white transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center">
                <div className="p-4 bg-white/10 rounded-full mr-6">
                    <Icons.Eco className="w-8 h-8 text-green-400" />
                </div>
                <div>
                    <h3 className="text-xl font-bold mb-1">Installation RGE QualiPAC</h3>
                    <p className="text-gray-300 text-sm max-w-md">
                        TM BTP travaille avec des installateurs certifiés RGE, vous permettant d'accéder aux aides de l'État (MaPrimeRénov', CEE).
                    </p>
                </div>
            </div>
            <div className="h-12 w-px bg-white/20 hidden md:block"></div>
            <div className="text-center md:text-right">
                <div className="text-accent font-bold text-3xl mb-1">COP {" > "} 4</div>
                <p className="text-xs text-gray-400 uppercase tracking-widest">Coefficient de Performance</p>
            </div>
        </div>
      </section>

      {/* FAQ / Maintenance */}
      <section className="py-24 bg-white dark:bg-neutral-950 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4">
            <h2 className="font-display font-bold text-2xl text-primary dark:text-white mb-8 text-center">Questions Fréquentes</h2>
            <div className="space-y-4">
                <div className="border border-gray-200 dark:border-neutral-800 rounded-xl p-6">
                    <h4 className="font-bold text-primary dark:text-white mb-2 flex items-center">
                        <Icons.ChevronRight className="w-4 h-4 text-accent mr-2" />
                        Est-ce bruyant ?
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm ml-6">
                        Les modèles récents que nous installons sont extrêmement silencieux. L'unité extérieure descend sous les 35dB à 3m, soit un chuchotement.
                    </p>
                </div>
                <div className="border border-gray-200 dark:border-neutral-800 rounded-xl p-6">
                    <h4 className="font-bold text-primary dark:text-white mb-2 flex items-center">
                        <Icons.ChevronRight className="w-4 h-4 text-accent mr-2" />
                        Faut-il entretenir la climatisation ?
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm ml-6">
                        Oui, un entretien annuel est recommandé (et obligatoire pour certaines charges de fluide) pour garantir la performance, l'hygiène de l'air et la longévité du matériel.
                    </p>
                </div>
            </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-24 bg-neutral-50 dark:bg-neutral-900 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-12">
                <h2 className="font-display font-bold text-3xl text-primary dark:text-white">Besoin de fraîcheur ou de chaleur ?</h2>
                <p className="text-gray-600 dark:text-gray-400 mt-2">Devis gratuit et dimensionnement thermique inclus.</p>
            </div>
          <QuoteWizard />
        </div>
      </section>
    </div>
  );
};