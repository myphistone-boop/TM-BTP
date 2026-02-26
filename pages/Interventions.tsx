import React from 'react';
import { Link } from 'react-router-dom';
import { Icons } from '../components/Icons';
import { QuoteWizard } from '../components/QuoteWizard';
import { MobileHorizontalScroll } from '../components/MobileHorizontalScroll';
import { COMPANY_INFO } from '../types';

export const Interventions: React.FC = () => {
  return (
    <div className="pt-20 bg-white dark:bg-neutral-950 transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative min-h-[55vh] sm:h-[50vh] flex items-center bg-white overflow-hidden">
        <div className="absolute inset-0 z-0">
           <img 
            src="https://storage.googleapis.com/novelec_assets/Serin_Plomberie/istockphoto-1410436592-612x612.jpg" 
            alt="Intervention plomberie rapide" 
            className="w-full h-full object-cover"
          />
           <div className="absolute inset-0 bg-neutral-900/60 sm:bg-neutral-900/50"></div>
        </div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-display font-bold text-3xl sm:text-5xl md:text-6xl text-white mb-4 sm:mb-6 leading-tight">
              Dépannage & <br/>
              <span className="text-accent">Interventions Rapides</span>
            </h1>
            <p className="text-base sm:text-xl text-gray-200 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Fuites, débouchage, réparation chauffe-eau. 
              Une équipe réactive à votre service sur {COMPANY_INFO.zone}.
            </p>
             <a 
                href={`tel:${COMPANY_INFO.phoneClean}`}
                className="inline-flex items-center px-7 py-3.5 sm:px-8 sm:py-4 bg-accent text-primary font-bold rounded-full hover:bg-white hover:text-primary transition-all shadow-xl text-sm sm:text-base"
              >
                <Icons.Phone className="mr-2 w-5 h-5" />
                Appeler le {COMPANY_INFO.phone}
              </a>
        </div>
      </section>

      {/* Services List */}
      <section className="py-12 md:py-16 bg-neutral-50 dark:bg-neutral-950 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl text-primary dark:text-white mb-4">Nos interventions courantes</h2>
            <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
          </div>

          <MobileHorizontalScroll className="lg:grid lg:grid-cols-3 lg:gap-8 lg:overflow-visible lg:pb-0">
            <div className="bg-white dark:bg-neutral-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-neutral-700 hover:border-accent/50 dark:hover:border-accent/50 transition-colors h-full">
              <Icons.Wrench className="w-10 h-10 text-accent mb-6" />
              <h3 className="font-bold text-xl text-primary dark:text-white mb-4">Recherche de Fuite</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                Détection précise et réparation de fuites d'eau sur canalisations apparentes ou encastrées. Intervention non destructive quand possible.
              </p>
            </div>
            <div className="bg-white dark:bg-neutral-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-neutral-700 hover:border-accent/50 dark:hover:border-accent/50 transition-colors h-full">
              <Icons.Droplet className="w-10 h-10 text-accent mb-6" />
              <h3 className="font-bold text-xl text-primary dark:text-white mb-4">Débouchage</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                Débouchage WC, éviers, douches et canalisations. Utilisation de furet électrique ou hydrocurage si nécessaire.
              </p>
            </div>
            <div className="bg-white dark:bg-neutral-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-neutral-700 hover:border-accent/50 dark:hover:border-accent/50 transition-colors h-full">
              <Icons.HVAC className="w-10 h-10 text-accent mb-6" />
              <h3 className="font-bold text-xl text-primary dark:text-white mb-4">Chauffe-eau & Cumulus</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                Dépannage, détartrage et remplacement de chauffe-eau électrique ou thermodynamique. Rétablissement rapide de l'eau chaude.
              </p>
            </div>
            <div className="bg-white dark:bg-neutral-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-neutral-700 hover:border-accent/50 dark:hover:border-accent/50 transition-colors h-full">
              <Icons.Settings className="w-10 h-10 text-accent mb-6" />
              <h3 className="font-bold text-xl text-primary dark:text-white mb-4">Robinetterie</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                Remplacement de mitigeurs, mélangeurs, colonnes de douche. Installation de réducteurs de pression.
              </p>
            </div>
            <div className="bg-white dark:bg-neutral-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-neutral-700 hover:border-accent/50 dark:hover:border-accent/50 transition-colors h-full">
              <Icons.Shield className="w-10 h-10 text-accent mb-6" />
              <h3 className="font-bold text-xl text-primary dark:text-white mb-4">Gaz & Sécurité</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                Mise aux normes installation gaz, remplacement de vannes, recherche de fuite gaz.
              </p>
            </div>
            <div className="bg-white dark:bg-neutral-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-neutral-700 hover:border-accent/50 dark:hover:border-accent/50 transition-colors h-full">
              <Icons.Check className="w-10 h-10 text-accent mb-6" />
              <h3 className="font-bold text-xl text-primary dark:text-white mb-4">WC & Sanitaires</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                Réparation chasse d'eau, remplacement mécanisme, pose de WC suspendu ou classique.
              </p>
            </div>
          </MobileHorizontalScroll>
        </div>
      </section>

       {/* Urgency Banner */}
       <section className="py-10 md:py-12 bg-primary dark:bg-neutral-900 text-white transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-display font-bold text-3xl mb-6">Une urgence plomberie ?</h2>
          <p className="text-lg text-gray-200 mb-8">
            Ne laissez pas une fuite ou un bouchon s'aggraver. Contactez-nous pour une intervention rapide.
          </p>
          <a 
            href={`tel:${COMPANY_INFO.phoneClean}`}
            className="inline-flex items-center px-8 py-4 bg-white text-primary font-bold rounded-full hover:bg-accent hover:text-white transition-all shadow-xl text-lg animate-pulse"
          >
            <Icons.Phone className="mr-3 w-6 h-6" />
            {COMPANY_INFO.phone}
          </a>
        </div>
      </section>

      {/* Form */}
      <section className="py-12 md:py-16 bg-white dark:bg-neutral-950 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-12">
                <h2 className="font-display font-bold text-3xl text-primary dark:text-white">Demande d'intervention tout type</h2>
                <p className="text-gray-600 dark:text-gray-400 mt-2">Pour les travaux planifiés, urgences ou devis, utilisez ce formulaire.</p>
            </div>
          <QuoteWizard />
        </div>
      </section>
    </div>
  );
};
